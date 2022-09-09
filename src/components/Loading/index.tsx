import React from 'react'
import * as S from './style'

export default function Index() {
  return (
    <S.LoadingScreen>
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </S.LoadingScreen>
  )
}
