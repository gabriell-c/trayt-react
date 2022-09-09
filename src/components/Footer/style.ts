import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    padding: 1em;
    margin-top: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: var(--dark-secondary);

    img{
        height: 80px;
        margin: .5em auto;
    }

    p{
        font-size: 15px;
        text-align: center;
        font-weight: 600;
        letter-spacing: 1px;
        text-align: center;
        margin: .5em auto 2em auto;
    }

    p a{
        color: inherit;
        text-decoration: underline;
    }
`;