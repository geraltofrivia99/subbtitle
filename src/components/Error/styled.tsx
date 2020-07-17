import styled, { keyframes } from 'styled-components';

const DARK = '#777777';
const WHITE = '#FCFCFC';

const roll = keyframes`
    0% {
      transform: rotate(0deg);
      left: 10%;
    }
    50% {
      left: 70%;
      transform: rotate(168deg);
    }
    100% {
      transform: rotate(0deg);
      left: 10%;
    }
`;

const move = keyframes`
    0% {
        left: 10%;
    }
    50% {
        left: 70%;
    }
    100% {
        left: 10%;
    }
`;

export const Box = styled.div`
    width: 640px;
    height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const Face = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    background: ${WHITE};
    border-radius: 50%;
    border: 1px solid ${DARK};
    top: 21%;
    left: 37.5%;
    z-index: 2;
    animation: ${roll} 3s ease-in-out infinite;
`;

export const Eye = styled.div<{ left: boolean }>`
    position: absolute;
    width: 5px;
    height: 5px;
    background: ${DARK};
    border-radius: 50%;
    top: 40%;
    left: ${({ left }) => left ? '20%' : '68%'};
`;

export const Mouth = styled.div`
    position:absolute;
    left: 41%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    top: 49%;
    border: 2px solid;
    border-color: ${DARK} transparent transparent ${DARK};
    transform: rotate(45deg);
`;

export const Message = styled.p`
    color: #5e5e5e;
    margin-bottom: -1em;
    font-size: 0.9em;
    padding-top: 5px;
    color: #5e5e5e;
    padding-bottom: 5px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 5px;
`;

export const Shadow = styled.div`
    position: absolute;
    width: 25%;
    height: 6%;
    opacity: .5;
    background: #777777;
    top: 200px;
    border-radius: 50%;
    z-index: 1;
    animation: ${move} 3s ease-in-out infinite;
`;