import React, { memo } from 'react';
import ReactPlayer from 'react-player/lazy';

import { Wrapper } from './styled';

export interface IPlayerOptions {
    id: string;
    onProgress: (state: {
        played: number;
        playedSeconds: number;
        loaded: number;
        loadedSeconds: number;
    }) => void;
    offset: number;
}

export const Player = memo(({ id, onProgress, offset }: IPlayerOptions) => {
    return (
        <Wrapper>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                onProgress={onProgress}
                controls
                width={1030}
                height={600}
            />
        </Wrapper>
    )
})