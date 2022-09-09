import React, { useState, useEffect } from 'react';
import * as S from './style';
import ApiType from '../Type';
import Loading from '../Loading';

export default function Index() {
    const [ api, setApi ] = useState<ApiType[]>([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchTrailersJSON() {
            setLoading(true);
            const response = await fetch('https://trailersapi.herokuapp.com/api/disneyplus');
            const trailers = await response.json();
            setApi(trailers);
            setLoading(false);
        }
        fetchTrailersJSON()
    }, [])

    let ID: number[] = api.map(e=>e.id)

    let IDs: number[] = ID.slice(0, 20)
    let random = IDs[Math.ceil(Math.random() * IDs.length)]
    let result = api.find(e=>e?.id === random)?.thumb_img;
    
    return (
        <S.Container style={{backgroundImage: `url(${result})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'}}>
            {loading &&
                <Loading />
            }
            <S.Info>
                <img src='https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original' alt='logo' />
            </S.Info>
            <S.Bg></S.Bg>
        </S.Container>
    )
}
