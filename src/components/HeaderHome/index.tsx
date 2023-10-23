import React, { useState, useEffect } from 'react';
import * as S from './style';
import ApiType from '../Type';
import Loading from '../Loading';
import LogoHeader from '../../assets/logo trayt with triangle purple and txt white_00000.png';

export default function Index() {
    const [ api, setApi ] = useState<ApiType[]>([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchTrailersJSON() {
            setLoading(true);
            const response = await fetch('http://apitrayt.infinityfreeapp.com/TrailersApi/');
            const trailers = await response.json();
            setApi(trailers);
            setLoading(false);
        }
        fetchTrailersJSON()
    }, [])

    
        let random = Math.ceil(Math.random() * 101)
        let result = api.find(e=>e?.id === random)?.thumb_img;

    return (
        <S.Container style={{backgroundImage: `url(${result})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'}}>
            {loading &&
                <Loading />
            }
            <S.Info>
                <img src={LogoHeader} alt='logo' />
            </S.Info>
            <S.Bg></S.Bg>
        </S.Container>
    )
}
