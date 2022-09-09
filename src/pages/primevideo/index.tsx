import React from 'react';
import * as S from './style';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import HeaderPV from '../../components/HeaderPrimeV'
import BodyPV from '../../components/BodyPrimeV'

export default function index() {
  return (
    <S.Contianer>
        <NavBar />
        <HeaderPV />
        <BodyPV />
        <Footer />
    </S.Contianer>
  )
}
