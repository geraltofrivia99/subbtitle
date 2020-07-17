import React, { memo, useEffect, useState, useRef } from 'react';
import { Player, IPlayer, SubtitlesList } from '../../components';
import { getSubtitlesArray, trnslateWord } from '../../api';
import { useParams } from "react-router-dom";

type onProgress = IPlayer['onProgress'];

// const id = 'fJ9rUzIMcZQ';
interface IAllSub {
    [key: number]: string;   
}

export default memo(() => {
    const [activeSub, setActiveSub] = useState(0);
    const [allSub, setAllSub] = useState<any>([]);
    let [error, setError] = useState('');
    let { id } = useParams();

    const startKeysRef: any = useRef({});
    const onProgress: onProgress = ({ playedSeconds }) => {
        const sec = Math.floor(playedSeconds);
        // console.log(allSub[sec], 'dsadsa', sec);
        if (startKeysRef.current[sec]) {
            setActiveSub(sec);
        }
    }
    const onTest = () => {
        trnslateWord('Is this the real life Is this just fantasy Caught in a landslide').then((res) => console.log(res));
    }
    useEffect(() => {
        getSubtitlesArray(id, false).then(({ startKeys, list, error }) => {
            if (!error) {
                console.log(startKeys);
                startKeysRef.current = startKeys;
                setAllSub(list);
                setError('');
            } else {
                console.log(error);
                setError(error);
            } 
        });
    }, [id])
    return (
        <>
            
            <Player id={id} onProgress={onProgress} />
            <SubtitlesList subtitles={allSub} curentSecond={activeSub} error={error}/>
            <button onClick={onTest}>Click</button>
            {/* <Subtitles activeSub={allSub[activeSub]} /> */}
        </>
    )
})