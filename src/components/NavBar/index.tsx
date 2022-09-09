import React, { useEffect, useState } from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/logo trayt with triangle purple and txt white_00000.png'
import logoIcon from '../../assets/logo play.png'
import Hamburger from 'hamburger-react'

export default function Index() {

    const [show, setShow] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const controlNavbar = () => {
        if (window.scrollY > 100 ) {
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
    }, [])

    return (
        <S.Container >
            <S.Nav style={{background: show ? 'var(--dark)' : 'transparent'}}>
                <Link to='/'><S.Logo src={LogoImg} alt='Logo' /></Link>
                <ul style={{left: isOpen ? '0' : '-100vw'}}>
                    <Link to='/'><S.IconExtern src={logoIcon}/><li>Início</li></Link>
                    <Link to='/netflix'><S.LogoStr src='https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png'/><li>Netflix</li></Link>
                    <Link to='/primevideo'><S.LogoStr src='https://m.media-amazon.com/images/G/01/digital/video/DVUI/favicons/favicon._CB527404570_.png'/><li>Prime vídeo</li></Link>
                    <Link to='/starplus'><S.LogoStr src='https://static-assets.bamgrid.com/product/starplus/favicons/favicon-32x32.da4ae1a0645d9c381645155d7dc1b4d3.png'/><li>Star+</li></Link>
                    <Link to='/disneyplus'><S.LogoStr src='https://static-assets.bamgrid.com/product/disneyplus/favicons/favicon-32x32.3699f19f7fdff1a556c0953c12fb883f.png'/><li>Disney+</li></Link>
                    <Link to='/outros'><li>Outros</li></Link>
                    <Link to='/api'><S.IconExtern src='https://cdn-icons-png.flaticon.com/512/1493/1493169.png'/><li>API</li></Link>
                </ul>
                <S.MenuArea onClick={()=>setOpen(!isOpen)}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </S.MenuArea>
            </S.Nav>
            <S.BgMenu onClick={()=>setOpen(!isOpen)} style={{display: isOpen ? 'flex' : 'none'}}></S.BgMenu>
        </S.Container>
    )
}
