import React from 'react';
import * as S from './style';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import HeaderStar from '../../components/HeaderStar'
import BodyStar from '../../components/BodyStar'

export default function index() {
  return (
    <S.Contianer>
        <NavBar />
        <HeaderStar />
        <BodyStar />
        <Footer />
    </S.Contianer>
  )
}
