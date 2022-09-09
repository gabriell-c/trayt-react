import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.div`
    display: flex;
    margin: 4em auto 2em auto;
    align-items: center;
    img{
        width: 80px;
        margin-right: .7em;
    }
    h1{
        font-size: 60px;
        letter-spacing: 4px;
        text-shadow: 0 0 20px #f9f9f950;
    }
`;

export const Item = styled.div`
    max-width: 700px;
    width: 90%;
    padding: 2.5em;
    margin: 1em auto;
    border-radius: 5px;
    background-color: var(--dark-secondary);

    @media screen and (max-width: 400px){
        padding: 1em;   
    }
`;
export const ItemHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
    border-bottom: solid 3px var(--white);
`;

export const HeaderLeft= styled.div`
    display: flex;
    align-items: center;

    h1{
        @media screen and (max-width: 400px){
            font-size: 22px;
            padding-right: .5em;
        }
    }

    img{
        margin-right: .4em;
        height: 30px;
    }
`;

export const ItemBody = styled.div`
    width: 100%;
    padding: 1em 0;
    p{
        font-weight: 500;
        margin-bottom: 2em;
    }

    img{
        width: 100%;
        border-radius: 4px;
    }
`;

export const ButtonNavi = styled.div`
    display: flex;
    align-items: center;

    button{
        font-size: 28px;
        color: var(--white);
        border: 0;
        margin: 0 .2em;
        background: transparent;
        cursor: pointer;
    }
`

export const ModalArea = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalItem = styled.div`
    width: 70%;
    height: 80vh;
    background: var(--dark);
    position: relative;
    z-index: 12;
    border-radius: 5px;

    img{
        width: 100%;
        height: 100%;
        z-index: 13;
    }
`;

export const ModalBG = styled.div`
    width: 100%;
    height: 100%;
    background: #00000040;
    position: fixed;
`;

export const loadingModalArea = styled.div`
    width: 100%;
    height: 100%;
`;

export const ButtonExit = styled.button`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    border-radius: 4px 4px 0 0;
    border: 0;
    background: var(--default-color); 
    color: var(--white);
    font-weight: 600;
    padding: .4em 0;
    cursor: pointer;

    &:hover{
        filter: brightness(1.3);
        box-shadow: 0 0 10px #4E00FF90;
    }
`;

// export const loadingModalArea = styled.div``;
// export const loadingModalArea = styled.div``;
// export const loadingModalArea = styled.div``;