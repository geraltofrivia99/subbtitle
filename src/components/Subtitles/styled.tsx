import styled from 'styled-components';

export const Row = styled.div<{ isActive: boolean }>`
    display: inline-flex;
    background-color: ${({ isActive }) => isActive ? 'red' : 'transparent'}
`;