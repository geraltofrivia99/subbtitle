import React, { memo, useRef, useState, } from 'react';
import { useHistory } from "react-router-dom";
import { Input } from '../../components';

import { matchYoutubeUrl } from '../../utils';

interface IError {
    message: string | null;
}

export const Search = memo(() => {
    const value = useRef('');
    let history = useHistory();
    const [error, setError] = useState<IError>({ message: null });
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log((e.target as HTMLInputElement).value);
        value.current = (e.target as HTMLInputElement).value;
    }
    const onSubmit = () => {
        if (matchYoutubeUrl(value.current)) {
            const id = value.current.split('v=')[1];
            if (id) {
                history.push(`/${id}`);
            } else {
                setError(() => ({ message: 'Invalid video id' }));
            }
        } else {
            setError(() => ({ message: 'Invalid link' }));
        }
    }
    return (
        <Input onChange={onChange} onSubmit={onSubmit} error={error.message}/>
    )
})