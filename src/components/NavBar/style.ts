import styled from 'styled-components'

export const Container = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    position: fixed;
    justify-content: space-between;
    z-index: 14;
    transition: .3s all ease-in-out;

    ul{
        display: inline-flex; 
        align-items: center;
        height: 100%;

        @media screen and (max-width: 1090px){
            position: fixed;
            background-color: var(--dark-secondary);
            height: 100vh;
            width: 240px;
            left: 0;
            top: 0;
            flex-direction: column;
            padding: .5em 0 4em 0;
            transition: all ease-in-out .5s;
        }
    }

    ul a{
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 1em;
        margin: 0 .5em;
        background: linear-gradient(currentColor, currentColor) left bottom / 0 0em no-repeat;
        transition: .3s background-size;

        &:hover{
            background-size: 100% .2em;
            background-position: left bottom;
        }

        @media screen and (max-width: 1090px){
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 0;
        }
    }

    ul li{
        list-style: none;
        height: 100%;
        font-weight: 600;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        cursor: pointer;
        text-shadow: 0 0 10px #f9f9f940;
    }

    li:hover {
        text-shadow: 0 0 10px #f9f9f980;
    }
`;

export const Logo = styled.img`
    height: 90px;

    @media screen and (max-width: 500px){
        height: 75px;
    }
`;

export const LogoStr = styled.img`
    height: 35%;
    margin-right: .4em;
`;

export const IconExtern = styled.img`
    height: 25px;
    margin-right: .4em;

    @media screen and (max-width: 1090px){
        height: 35px;
    }
`;

export const MenuArea = styled.div`
    display: none;
    @media screen and (max-width: 1090px){
        display: block;
    }
`;

export const Nav= styled.div`
    width: 100%;
    height: 70px;
    padding: .2em 1em;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 11;
    justify-content: space-between;
`;

export const BgMenu = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: #000; 
    position: fixed;
    z-index: 9;
    opacity: 70%;
`;