import React from 'react'
import * as S from './style'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Header from '../../components/HeaderHome'
import Body from '../../components/BodyHome'

export default function Index() {
    return (
        <S.Container>
            <NavBar />
            <Header />
            <Body />
            <Footer />
        </S.Container>
    )
}
