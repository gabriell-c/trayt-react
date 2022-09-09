import React, { useEffect, useState } from 'react';
import { FiExternalLink, MdContentCopy } from 'react-icons/all';
import Tooltip from '@mui/material/Tooltip';
import LoadindBody from '../loadingBody';
import preview_NetflixImg from './preview_api/preview_Netflix.png';
import preview_PrimeVideoImg from './preview_api/preview_Prime.jpg';
import preview_StarImg from './preview_api/preview_StarPlus.jpg';
import preview_DisneyImg from './preview_api/preview_DisneyPlus.jpg';
import preview_All from './preview_api/preview_All.png'
import preview_Outros from './preview_api/preview_Outros.png';
import preview_Trailers from './preview_api/preview_Trailers.png';
import Loading from '../Loading';
import LogoPlay from '../../assets/logo play.png';
import * as S from './style';

export default function Index() {

    type ApiInitialType = {
        id: number;
        title: string;
        url: string;
        method: string;
    };

    const [api, setApi] = useState<ApiInitialType[]>([]);
    const [loading, setLoading] = useState(false);
    const [loadingModal, setLoadingModal] = useState(false);
    const [hiddeModal, setHiddeModal] = useState(false);
    const [valueImg, setValueimg] = useState('');
    const [click, setClick] = useState(false)

    const fetchApiInitial = async () => {
        setLoading(true)
        const response = await fetch('https://trailersapi.herokuapp.com/');
        const listApi = await response.json();
        setApi(listApi);
        setLoading(false)
    };

    useEffect(()=>{
        fetchApiInitial();
    }, []);

    const TxtNetflix = 'Esta API retorna as diversas informações dos vídeos que são postados no canal da Netflix no YouTube, como vídeo separado por categoria, por exemplo, se é um trailer/teaser oficial, se é um vídeo que mostra o por trás das câmeras, se é um vídeo dos shorts, o título do vídeo, thumb do vídeo, se o vídeo for um trailer/teaser terá a descrição do filme/serie, e também a url do vídeo já pronta para colocar no "src" da tag iframe se você precisar.';
    const TxtPrimeVideo = 'Esta API retorna as diversas informações dos vídeos que são postados no canal do Prime Vídeo no YouTube, como vídeo separado por categoria, por exemplo, se é um trailer/teaser oficial ou se é um vídeo dos shorts, o título do vídeo, thumb do vídeo, se o vídeo for um trailer/teaser terá a descrição do filme/serie, e também a url do vídeo já pronta para colocar no "src" da tag iframe se você precisar.';
    const TxtStar = 'Esta API retorna as diversas informações dos trailers e teasers oficiais que são postados no canal do Star+ no YouTube, como vídeo separado pelo áudio, por exemplo, se é legendado ou dublado, o título do vídeo, thumb do vídeo, a descrição do filme/serie, e também a url do vídeo já pronta para colocar no "src" da tag iframe se você precisar.';
    const TxtDisney = 'Esta API retorna as diversas informações dos trailers e teasers oficiais que são postados no canal do Disney+ e Walt Disney Studios BR no YouTube, como vídeo separado pelo áudio, por exemplo, se é legendado ou dublado, o título do vídeo, thumb do vídeo, a descrição do filme/serie, e também a url do vídeo já pronta para colocar no "src" da tag iframe se você precisar.';
    const TxtAll = 'Esta API retorna as diversas informações dos vídeos que são postados no canal da Netflix, Prime vídeo, Star+, Disney+ e Disney+ e Walt Disney Studios BR no YouTube, como vídeo separado por categoria, por exemplo, se é um trailer/teaser oficial, se é um vídeo que mostra o por trás das câmeras, se é um vídeo dos shorts, o título do vídeo, thumb do vídeo, se o vídeo for um trailer/teaser terá a descrição do filme/serie, e também a url do vídeo já pronta para colocar no "src" da tag iframe se você precisar.'
    const TxtTrailers = 'Esta API retorna as informações dos trailers e oficias dos vídeos que são postados no canal da Netflix, Prime vídeo, Star+, Disney+ e Disney+ e Walt Disney Studios BR no YouTube, os títulos dos vídeos, thumb do vídeo, a descrição do filme/serie, e também a url do vídeo já pronta para colocar no "src" da tag iframe se você precisar.'
    const TxtOutros = 'Esta API retorna as informações dos vídeos que são postados no "shorts" no canal da Netflix, Prime vídeo, Star+, Disney+ e Disney+ e Walt Disney Studios BR no YouTube, os títulos dos vídeos, thumb do vídeo, a url do vídeo já pronta para colocar no "src" da tag iframe se você precisar.'

    return (
        <S.Container>
            {loading && 
                <Loading />
            }
            <S.Title>
                <img src="https://cdn-icons-png.flaticon.com/512/1493/1493169.png" alt='API' />
                <h1>API</h1>
            </S.Title>

            {api.map((item, key)=>(
                <S.Item key={key}>
                    <S.ItemHeader>
                        <S.HeaderLeft>
                            <img src={item.title === 'Netflix' ? 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png' : '' ||
                                item.title === 'Prime video' ? 'https://m.media-amazon.com/images/G/01/digital/video/DVUI/favicons/favicon._CB527404570_.png' : '' ||
                                item.title === 'Star plus' ? 'https://static-assets.bamgrid.com/product/starplus/favicons/favicon-32x32.da4ae1a0645d9c381645155d7dc1b4d3.png' : '' ||
                                item.title === 'Disney plus' ? 'https://static-assets.bamgrid.com/product/disneyplus/favicons/favicon-32x32.3699f19f7fdff1a556c0953c12fb883f.png' : '' ||
                                item.title === 'Todas juntas' ? LogoPlay : '' ||
                                item.title === 'Somente Trailers/Taser oficiais' ? LogoPlay : '' ||
                                item.title === 'Somente outros' ? LogoPlay : '' } alt={item.title} />
                            <h1>{item.title}</h1>
                        </S.HeaderLeft>
                        <S.ButtonNavi>
                            <button><MdContentCopy style={{color: click ? '#09e33c' : '#f9f9f9', transition: 'all ease .2s', filter: `${click ? 'drop-shadow(0 0 5px #09e33c)' : 'drop-shadow(0 0 10px #f9f9f950)' }`}} onClick={() => {navigator.clipboard.writeText(`https://trailersapi.herokuapp.com${item.url}`)
                                setClick(true)
                                setTimeout(()=>setClick(false), 3000)
                                }} /></button>
                            <Tooltip title={item.title} disableFocusListener >
                                <a target='_blank' href={`https://trailersapi.herokuapp.com${item.url}`}><button><FiExternalLink /></button></a>
                            </Tooltip>
                        </S.ButtonNavi>
                    </S.ItemHeader>
                    <S.ItemBody>
                        <p>{item.title === 'Netflix' ? TxtNetflix : '' ||
                        item.title === 'Prime video' ? TxtPrimeVideo : '' ||
                        item.title === 'Star plus' ? TxtStar : '' ||
                        item.title === 'Disney plus' ? TxtDisney : '' ||
                        item.title === 'Todas juntas' ? TxtAll : '' ||
                        item.title === 'Somente Trailers/Taser oficiais' ? TxtTrailers : '' ||
                        item.title === 'Somente outros' ? TxtOutros : ''}</p>
                        <img onClick={()=>{setHiddeModal(true)
                        setValueimg(item.title)}} src={item.title === 'Netflix' ? preview_NetflixImg : '' ||
                        item.title === 'Prime video' ? preview_PrimeVideoImg : '' ||
                        item.title === 'Star plus' ? preview_StarImg : '' ||
                        item.title === 'Disney plus' ? preview_DisneyImg : '' ||
                        item.title === 'Todas juntas' ? preview_All : '' ||
                        item.title === 'Somente Trailers/Taser oficiais' ? preview_Trailers : '' ||
                        item.title === 'Somente outros' ? preview_Outros : '' } alt={item.title} />
                    </S.ItemBody>

                    <S.ModalArea onLoad={()=>setLoadingModal(false)} style={{visibility: hiddeModal ? 'visible' : 'hidden'}}>   
                        <S.ModalItem style={{transition: 'all ease-in-out .3s', top: hiddeModal ? '15px' : '100vh'}}>
                            {loadingModal && 
                                <S.loadingModalArea>
                                    <LoadindBody />
                                </S.loadingModalArea>
                            }
                            <S.ButtonExit onClick={()=>setHiddeModal(false)}>x</S.ButtonExit>
                            <img src={valueImg === 'Netflix' ? preview_NetflixImg : '' ||
                            valueImg === 'Prime video' ? preview_PrimeVideoImg : '' ||
                            valueImg === 'Star plus' ? preview_StarImg : '' ||
                            valueImg === 'Disney plus' ? preview_DisneyImg : '' ||
                            valueImg === 'Todas juntas' ? preview_All : '' ||
                            valueImg === 'Somente Trailers/Taser oficiais' ? preview_Trailers : '' ||
                            valueImg === 'Somente outros' ? preview_Outros : ''} alt={valueImg} />
                        </S.ModalItem>
                        <S.ModalBG onClick={()=>setHiddeModal(false)}></S.ModalBG>
                    </S.ModalArea>
                </S.Item>
            ))}

        </S.Container>
    )
}
