import React, { memo } from 'react';
import ReactPlayer from 'react-player/lazy';

export interface IPlayerOptions {
    id: string;
    onProgress: (state: {
        played: number;
        playedSeconds: number;
        loaded: number;
        loadedSeconds: number;
    }) => void;
}

export const Player = memo(({ id, onProgress }: IPlayerOptions) => {
    return (
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            onProgress={onProgress}
            controls
            width={1030}
            height={600}
        />
    )
})