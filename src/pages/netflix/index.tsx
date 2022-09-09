import React from 'react';
import * as S from './style';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import HeaderNEt from '../../components/HeaderNetflix'
import BodyNEt from '../../components/BodyNetflix'

export default function index() {
  return (
    <S.Contianer>
        <NavBar />
        <HeaderNEt />
        <BodyNEt />
        <Footer />
    </S.Contianer>
  )
}
