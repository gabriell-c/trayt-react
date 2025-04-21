import { useState, useEffect } from 'react';
import ApiType from '../Type';
import LoadindBody from '../loadingBody';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import sortDefault from '../../assets/sort default.png';
import sortCres from '../../assets/crescente.png';
import sortDecr from '../../assets/decrescente.png';
import { FaSearch } from "react-icons/all";
import * as S from './style';

export default function Index() {

    document.title = "Trayt - Prime Vídeo";

    const [api, setApi] = useState<ApiType[]>([]);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState<ApiType[]>([]);
    const [valueSelectOrder, setValueSelectOrder] = useState('');
    const [valueSelectType, setValueSelectType] = useState('');
    const [valueSearch, setValueSearch] = useState('');
    const [arraySearch, setArraySearch] = useState<ApiType[]>([]);
    const [title, setTitle] = useState('Trailers/Teasers');
    const [hiddeModal, setHiddeModal] = useState(false);
    const [valueModal, setValueModal] = useState<ApiType>();
    const [loadingModal, setLoadingModal] = useState(true);

    const handleChangeOrder = (e: SelectChangeEvent) => {
        setValueSelectOrder(e.target.value as string);
        setLoading(false);
    };

    const handleChange = (e: SelectChangeEvent) => {
        setValueSelectType(e.target.value);
    };

    const fetchtrailersPrimeJSON = async () => {
        const response = await fetch('https://trayt-node-1.onrender.com/api/primevideo');
        const trailersPrime = await response.json();
        setApi(trailersPrime);
    };

    useEffect(() => {
        fetchtrailersPrimeJSON();
    }, []);

    useEffect(() => {
        let filtered = [...api];

        // Filtro por busca
        if (valueSearch) {
            filtered = filtered.filter(e =>
                e.name.toLowerCase().includes(valueSearch.toLowerCase())
            );
        }

        // Filtro por categoria
        if (valueSelectType === 'outros') {
            filtered = filtered.filter(e => e.category === 'outros');
        }
        if (valueSelectType === 'por_tras_das_cameras') {
            filtered = filtered.filter(e => e.category === 'por_tras_das_cameras');
        }
        if (valueSelectType === 'trailer_oficial') {
            filtered = filtered.filter(e => e.category === 'trailer_oficial');
        }

        // Ordenação
        if (valueSelectOrder === 'Crescente') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (valueSelectOrder === 'Decrescente') {
            filtered.sort((a, b) => b.name.localeCompare(a.name));
        }
        if (valueSelectOrder === 'Padrão') {
            filtered.sort((a, b) => a.id - b.id);
        }

        setArraySearch(filtered);
        setOrder(filtered);
    }, [api, valueSearch, valueSelectOrder, valueSelectType]);

    useEffect(() => {
        if (valueSelectType === '') {
            setTitle("Trailers/Teasers");
        }
        if (valueSelectType === 'outros') {
            setTitle("Outros");
        }
        if (valueSelectType === 'por_tras_das_cameras') {
            setTitle("Por Trás das Câmeras");
        }
        if (valueSelectType === 'trailer_oficial') {
            setTitle("Trailers/Teasers oficiais");
        }
    }, [valueSelectType]); 

  return (
    <S.Container>
        <h1>{title}</h1>
        <S.SearchArea>
            <S.InputSearch>
                <TextField color='secondary' fullWidth id="outlined-search" value={valueSearch} onChange={(e)=>setValueSearch(e.target.value)} label="Pesquisar"
                type="search" variant="outlined" />
                <button onClick={() => setValueSearch(valueSearch)}>
                    <FaSearch />
                </button>
            </S.InputSearch>

            <S.SelectType>
                <FormControl color='secondary' fullWidth >
                    <InputLabel id="demo-simple-select-autowidth-label">Categoria</InputLabel>
                    <Select labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth" value={valueSelectType} onChange={handleChange}
                    autoWidth label="Categoria" >
                        <MenuItem value="">
                            <em>Todos</em>
                        </MenuItem>
                        <MenuItem value='outros'>outros</MenuItem>
                        <MenuItem value='trailer_oficial'>Trailers/teasers oficiais</MenuItem>
                    </Select>
                </FormControl>
            </S.SelectType>

            <S.SelectOrder>
                <img src={
                    valueSelectOrder === 'Crescente' ? sortCres : '' ||
                    valueSelectOrder === 'Decrescente' ? sortDecr : '' ||
                    valueSelectOrder === 'Padrão' ? sortDefault : '' ||
                    valueSelectOrder !== 'Padrão' &&
                    valueSelectOrder !== 'Decrescente' &&
                    valueSelectOrder !== 'Crescente' ? sortDefault : ''
                } />
                <FormControl color='secondary' fullWidth>
                    <InputLabel id="demo-simple-select-label">Ordenar</InputLabel>
                    <Select labelId="demo-simple-select-label"
                        id="demo-simple-select" value={valueSelectOrder}
                        label="Ordenar" onChange={handleChangeOrder}
                    >
                        <MenuItem value='Crescente'>Crescente</MenuItem>
                        <MenuItem value='Decrescente'>Decrescente</MenuItem>
                        <MenuItem value='Padrão'>Padrão</MenuItem>
                    </Select>
                </FormControl>
            </S.SelectOrder>
        </S.SearchArea>

        {loading &&
            <LoadindBody />
        }

        <S.Trailers>
            {order?.map((item, key)=>(
                <S.Item key={key}>
                    <img src={item.thumb_img} alt='Image' onClick={ ()=>{
                        setValueModal(item)
                        setHiddeModal(true)}}  />
                    <p>{item.name}</p>
                </S.Item>
            ))}

            <S.ModalArea onLoad={()=>setLoadingModal(false)} style={{visibility: hiddeModal ? 'visible' : 'hidden'}}>   
                <S.Modal style={{transition: 'all ease-in-out .3s', top: hiddeModal ? '35px' : '100vh'}}>
                    {loadingModal && 
                        <S.loadingModalArea>
                            <LoadindBody />
                        </S.loadingModalArea>
                    }
                    <S.ButtonExit onClick={()=>setHiddeModal(false)}>x</S.ButtonExit>
                    <S.VideoModel frameBorder="0" allowFullScreen src={`${valueModal?.url_video}${hiddeModal ? '?autoplay=1' : '?autoplay=0'}${hiddeModal ? '' : '&pause=1'}`} title={valueModal?.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></S.VideoModel>
                    <S.InfoModal>
                        <h3>{valueModal?.name}</h3>
                        <S.Streaming>Streaming: {valueModal?.streaming === 'Netflix' ? 'Netflix' : '' ||
                        valueModal?.streaming === 'Prime_Video' ? 'Prime vídeo' : '' ||
                        valueModal?.streaming === 'Star_Plus' ? 'Star+' : '' ||
                        valueModal?.streaming === 'Disney_Plus' ? 'Disney+' : ''}</S.Streaming>
                        {valueModal?.audio &&
                            <S.AudioDec>Áudio: {valueModal?.audio}</S.AudioDec>
                        }
                        <S.Category>Categoria: {valueModal?.category === 'trailer_oficial' ? 'Trailer/Teaser oficial' : '' ||
                            valueModal?.category === 'por_tras_das_cameras' ? 'Por Trás das Câmeras' : '' ||
                            valueModal?.category === 'outros' ? 'Outros' : ''}
                        </S.Category>
                        {valueModal?.desc &&
                            <S.Desc><span>Descrição: </span>{valueModal?.desc}</S.Desc>
                        }
                        
                    </S.InfoModal>
                </S.Modal>
                <S.ModalBG onClick={()=>setHiddeModal(false)}></S.ModalBG>
            </S.ModalArea>
        </S.Trailers>

        {arraySearch.length === 0 &&
            <S.NotFound>Resultado não encontrado :/</S.NotFound>
        }        
    </S.Container>
  )
}
