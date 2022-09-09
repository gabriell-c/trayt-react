import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import PageNotFound from '../pages/error';
import Netflix from '../pages/netflix';
import PrimeVideo from '../pages/primevideo'
import StarPlus from '../pages/starplus'
import DisneyPlus from '../pages/Disney'
import Outros from '../pages/outros'
import API from '../pages/api'

export default function index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<PageNotFound />} />
                <Route path='/netflix' element={<Netflix />} />
                <Route path='/primevideo' element={<PrimeVideo />} />
                <Route path='/starplus' element={<StarPlus />} />
                <Route path='/disneyplus' element={<DisneyPlus />} />
                <Route path='/outros' element={<Outros />} />
                <Route path='/api' element={<API />} />
            </Routes>
        </BrowserRouter>
    )
}