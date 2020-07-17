import React, { memo } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Wrapper, TextFieldWrapper, ButtonWrapper, SearchContainer } from './styled';

interface IInput {
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSubmit: () => void;
    error: string | null;
}

export const Input = memo(({ onChange, onSubmit, error }: IInput) => {
    return (
        <Wrapper>
            <SearchContainer>
                <TextFieldWrapper>
                    <TextField
                        error={!!error}
                        autoFocus
                        fullWidth
                        id="outlined-error-helper-text"
                        label="Youtube"
                        helperText={error}
                        // variant="outlined"
                        onChange={onChange}
                    />
                </TextFieldWrapper>
                <ButtonWrapper>
                    <Button variant="outlined" color="primary" onClick={onSubmit}>Search</Button>
                </ButtonWrapper>
            </SearchContainer>
        </Wrapper>
    )
})