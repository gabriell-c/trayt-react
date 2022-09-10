import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 60px;
        letter-spacing: 1px;
        margin: 1em;

        @media screen and (max-width: 530px){
            font-size: 40px;
        }

        @media screen and (max-width: 390px){
            font-size: 33px;
        }
    }
`

export const Trailers = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2em;
`

export const Item = styled.div`
    margin: 1em;
    padding: .5em;
    width: 95%;
    max-width: 300px;
    cursor: pointer;
    transition: all ease-in-out .3s;

    &:hover{
        transform: scale(1.05);
        transition: all ease-in-out .3s;
    }

    &:hover > img{
        transition: all ease-in-out .3s;
        border: solid 4px var(--white);
    }

    img{
        border: solid 4px transparent;
        width: 100%;
        border-radius: 7px;
        transition: all ease-in-out .3s;
    }

    p{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-weight: 500;
        margin: .5em 0;
    }
`

export const SearchArea = styled.section`
     display: flex;    
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 160px;
    max-width: 950px;
    margin: 1em auto 3em auto;
    padding: .5em 1em;

    @media screen and (max-width: 775px) {
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }

    img{
        width: 40px;
        margin-right: .2em;
    }

    button{
        height: 2.25em;
        width: 60px;
        background-color: var(--default-color);
        border:0;
        border-radius: 0 4px 4px 0;
        font-size: 25px;
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    fieldset{
        border-color: #9c27b0;
        border-width: 2px;
        filter: hue-rotate(-40deg);
    }

    .MuiInputBase-root:hover fieldset{
        border-color: #711c80;
    }

    label{
        font-weight: 500;
        color: var(--white);
        filter: saturate(0) brightness(10);
    }

    #outlined-search, #demo-simple-select, #demo-simple-select-autowidth{
        color: #fff;
        font-weight: 600;
        letter-spacing: 1px;

        label{
            color: var(--white);
        }
    }
`

export const InputSearch = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: .7em .7em;

    .MuiTextField-root:hover fieldset{
        border-color: #711c80;
    }

    fieldset{
        border-color: #9c27b0;
        border-width: 2px;
        filter: hue-rotate(-40deg);
        border-radius: 4px 0 0 4px;
    }

`;

export const SelectOrder = styled.div`
    display: flex;
    align-items: center;
    margin: .7em .7em;
    width: 350px;

    svg{
        color: var(--white);
    }

    @media screen and (max-width: 500px){
        width: 150px;
    }
`;

export const NotFound = styled.h3`
    margin: 1em auto 2em auto;
    text-align: center;
    font-size: 50px;
    text-shadow: 0 0 15px #f9f9f925;

    @media screen and (max-width: 530px){
        font-size: 40px;
    }

    @media screen and (max-width: 390px){
        font-size: 33px;
    }
`

export const ModalArea = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalBG = styled.div`
    width: 100%;
    height: 100%;
    background: #000;
    position: absolute;
    opacity:80%;
`;

export const Modal = styled.div`
    width: 90%;
    height: 88vh;
    max-width: 900px;
    background-color: var(--dark);
    z-index: 12;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 0 10px var(--dark);
    border-radius: 4px;
`;

export const loadingModalArea = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: var(--dark);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonExit = styled.button`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
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

export const VideoModel = styled.iframe`
    width: 100%;
    height: 38vw;

    @media screen and (max-width: 1310px){
        height: 45vw;
    }
    @media screen and (max-width: 1083px){
        height: 50vw;
    }
`;

export const InfoModal = styled.div`
    width: 95%;
    margin: 0 auto;
    h3{
        font-size: 50px;
        margin-bottom: .5em;
        text-shadow: 0 0 10px #f9f9f950;

        @media screen and (max-width: 900px){
            font-size: 40px;
        }
        @media screen and (max-width: 600px){
            font-size: 30px;
            margin-bottom: .8em;
        }
        @media screen and (max-width: 400px){
            font-size: 25px;
        }
    }
`;
export const Desc = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    margin-bottom: 2em;

    span{
        font-size: 20px;
        font-weight: bold;
    }

    @media screen and (max-width: 400px){
        font-size: 15px;

        span{
            font-size: 17px;
        }
    }
`;

export const Streaming = styled.h4`
    font-size: 25px;
    margin-bottom: .3em;

    @media screen and (max-width: 500px){
        font-size: 20px;
    }

    @media screen and (max-width: 400px){
        font-size: 17px;
    }
`;

export const AudioDec = styled.h4`
    font-size: 25px;
    margin-bottom: .3em;

    @media screen and (max-width: 500px){
        font-size: 20px;
    }

    @media screen and (max-width: 400px){
        font-size: 17px;
    }
`;

export const Category = styled.h4`
    font-size: 25px;
    margin-bottom: .8em;

    @media screen and (max-width: 500px){
        font-size: 20px;
        margin-bottom: 1.2em;
    }

    @media screen and (max-width: 400px){
        font-size: 17px;
    }
`;