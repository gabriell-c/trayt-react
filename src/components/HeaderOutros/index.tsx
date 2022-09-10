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
            const response = await fetch('https://trailersapi.herokuapp.com/api/outros');
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
            <S.Bg></S.Bg>
        </S.Container>
    )
}
