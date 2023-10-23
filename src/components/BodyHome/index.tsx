import { useState, useEffect } from 'react';
import ApiType from '../Type';
import LoadindBody from '../loadingBody';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField';
import sortDefault from '../../assets/sort default.png';
import sortCres from '../../assets/crescente.png';
import sortDecr from '../../assets/decrescente.png';
import { FaSearch } from "react-icons/all";
import * as S from './style';

export default function Index() {

    document.title = "Trayt"

    const [ api, setApi ] = useState<ApiType[]>([]);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState<ApiType[]>()
    const [valueSelect, setValueSelect] = useState('');
    const [valueSearch, setValueSearch] = useState('');
    const [arraySearch, setArraySearch] = useState<ApiType[]>([]);
    const [hiddeModal, setHiddeModal] = useState(false);
    const [valueModal, setValueModal] = useState<ApiType>();
    const [loadingModal, setLoadingModal] = useState(true);

    const handleChange = (e: SelectChangeEvent) => {
        setValueSelect(e.target.value as string);
        setLoading(false)
    };

    const fetchtrailersBodyJSON = async () => {
        const response = await fetch('http://apitrayt.infinityfreeapp.com');
        const trailersBody = await response.json();
        setApi(trailersBody)

        if(!trailersBody){
            alert("Deu errado no fetch")
        }
    }
    useEffect(()=>{
        if(valueSearch === '' && valueSelect !== 'Crescente' && valueSelect !== 'Decrescente' && valueSelect !== 'Padrão'){
            handleSearch()
        }
    }, [api])

    useEffect(()=>{
 
        fetchtrailersBodyJSON()
        if(valueSelect === 'Crescente'){
            setOrder(arraySearch.sort((a, b)=>{
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            }))
        } 
        if(valueSelect === 'Decrescente'){
            setOrder(arraySearch.sort((a, b)=>{
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                return 0;
            }))
        }   
        if(valueSelect === 'Padrão'){
            setOrder(arraySearch.sort((a, b)=>{
                if (a.id < b.id) return -1;
                if (a.id > b.id) return 1;
                return 0;
            }))
        }
    }, [valueSelect])

    const filterItems = (search: string) => {
        return api.filter(e => e.name.toLowerCase().indexOf(search.toLowerCase()) > -1);
    };

    const handleSearch=(): any=>{
        setArraySearch(filterItems(valueSearch))
    }
    
  return (
    <S.Container>
        <h1>Trailers</h1>
        <S.SearchArea>
            <S.InputSearch>
                <TextField color='secondary' fullWidth id="outlined-search" value={valueSearch} onChange={(e)=>setValueSearch(e.target.value)} label="Pesquisar"
                type="search" variant="outlined" />
                <button onClick={handleSearch}><FaSearch /></button>
            </S.InputSearch>
            <S.SelectOrder>
                <img src={
                    valueSelect === 'Crescente' ? sortCres : '' ||
                    valueSelect === 'Decrescente' ? sortDecr : '' ||
                    valueSelect === 'Padrão' ? sortDefault : '' ||
                    valueSelect !== 'Crescente' && valueSelect !== 'Decrescente' && valueSelect !== 'Padrão' ? sortDefault : ''
                } />
                <FormControl color='secondary' fullWidth>
                    <InputLabel id="demo-simple-select-label">Ordenar</InputLabel>
                    <Select labelId="demo-simple-select-label"
                        id="demo-simple-select" value={valueSelect}
                        label="Ordenar" onChange={handleChange}
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
            {arraySearch?.map((item, key)=>(
                <S.Item key={key}>
                    <img src={item.thumb_img} onClick={ ()=>{
                        setValueModal(item)
                        setHiddeModal(true)}} alt='Thumb' />
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
