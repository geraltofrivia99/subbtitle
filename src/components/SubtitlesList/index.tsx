import React, { memo } from 'react';
import { Subtitles } from '../Subtitles';
import { Error } from '../Error';
import { List } from './styled';

interface ISubtitleList {
    subtitles: Array<{ start: number, content: string }>;
    curentSecond: number;
    error: string;
}

export const SubtitlesList = memo(({ subtitles, curentSecond, error }: ISubtitleList) => {
    if (error) {
        return <Error error={error} />
    }
    return (
        <List>{subtitles.map(({ start, content }, i) => (<Subtitles key={start + '' + i} activeSub={content} isActive={curentSecond === start} />))}</List>
    )
})