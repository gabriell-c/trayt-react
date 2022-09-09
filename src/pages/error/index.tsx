import Button from '@mui/material/Button';
import * as S from './style'
import ErrorImg from '../../assets/404 error img.svg'
import StarsImg from '../../assets/stars.png'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <S.Container>
        <S.ErrorImg src={ErrorImg} alt='error image'/>
        <Link to='/'><Button variant="contained" disableElevation>Voltar ao início</Button></Link>
        <S.Stars src={StarsImg} />
    </S.Container>
  )
}