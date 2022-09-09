import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;

    button{
        text-transform: none;
        font-family: 'OPEN SANS';
        padding: 0.5em 1em;
        font-size: 18px;
        letter-spacing: 1px;
        background-color: var(--default-color);
        font-weight: 600;
        z-index: 2;

        &:hover{
            background-color: var(--dark-purple);
        }
    }
`;

export const Stars = styled.img`
    height: 100%;
    width: 100%;
    opacity: 20%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;

export const ErrorImg = styled.img`
    width: 90%;
    max-width: 500px;
    z-index: 2;
    margin-bottom: 1em;
`;