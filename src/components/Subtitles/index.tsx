import React, { memo } from 'react';
import { Row } from './styled';

interface ISubtitles {
    activeSub: string;
    isActive: boolean
}

export const Subtitles = memo(({ activeSub, isActive }: ISubtitles) => {
    return (
        <Row isActive={isActive}>{activeSub}</Row>
    )
})