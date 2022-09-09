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
            const response = await fetch('https://trailersapi.herokuapp.com/api/netflix');
            const trailers = await response.json();
            setApi(trailers);
            setLoading(false);
        }
        fetchTrailersJSON()
    }, [])

    let IDs: number[] = api.map(e=>e.id).slice(0, 15)
    let random = Math.ceil(Math.random() * IDs.length)
    let result = api.find(e=>e?.id === random)?.thumb_img;

    return (
        <S.Container style={{backgroundImage: `url(${result})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'}}>
            {loading &&
                <Loading />
            }
            <S.Info>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='logo' />
            </S.Info>
            <S.Bg></S.Bg>
        </S.Container>
    )
}
