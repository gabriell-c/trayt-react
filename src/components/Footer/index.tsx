import LogoImgFooter from '../../assets/logo trayt with triangle purple and txt white_00000.png'
import * as S from './style'

export default function Index() {
    return (
        <S.Container>
            <img src={LogoImgFooter} alt='Logo' />
            <p>© 2022 todos direitos reservados | feito por <a href='https://github.com/gabriell-c' target='_blank' > Gabriel Cardoso</a>.</p>
        </S.Container>
    )
}
