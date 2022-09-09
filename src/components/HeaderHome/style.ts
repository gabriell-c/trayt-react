import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const LoadingScreen = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    z-index: 9;
    background-color: var(--dark);
`;

export const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background:
    linear-gradient(to top, var(--dark) 2%, transparent 60%),
    linear-gradient(to right, var(--dark) 2%, transparent 70%),
    linear-gradient(to bottom, var(--dark) 2%, transparent 40%);
    opacity: 100%;
`

export const Info = styled.div`
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        width: 80%;
        max-width: 600px;
    }
`;