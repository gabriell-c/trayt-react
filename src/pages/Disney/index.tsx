import React from 'react';
import * as S from './style';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import HeaderDisney from '../../components/HeaderDisney'
import BodyDiney from '../../components/BodyDisney'

export default function index() {
  return (
    <S.Contianer>
        <NavBar />
        <HeaderDisney />
        <BodyDiney />
        <Footer />
    </S.Contianer>
  )
}
