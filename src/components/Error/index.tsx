import React, { memo } from 'react';
import { Box, Mouth, Eye, Face, Message, Shadow } from './styled';

interface IError {
    error: string;
}

export const Error = memo(({ error }: IError) => {
    return (
        <Box>
            <Face>
                <Eye left={true} />
                <Eye left={false} />
                <Mouth />
            </Face>
            <Shadow />
            <Message>{error}</Message>
        </Box>
    )
})