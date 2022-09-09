import React from 'react';
import * as S from './style';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import HeaderOutros from '../../components/HeaderOutros'
import BodyOutros from '../../components/BodyOutros'

export default function index() {
  return (
    <S.Contianer>
        <NavBar />
        <HeaderOutros />
        <BodyOutros />
        <Footer />
    </S.Contianer>
  )
}
