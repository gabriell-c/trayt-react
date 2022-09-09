import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import React from 'react';
import BodyApi from '../../components/BodyApi'
import * as S from './style';

export default function Index() {
  return (
    <S.Container>
      <NavBar />
      <BodyApi />
      <Footer />
    </S.Container>
  )
}
