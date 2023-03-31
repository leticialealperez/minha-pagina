import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Recados from '../pages/Recados';

const AppRoputes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro /> }/>
                <Route path='/recados' element={<Recados />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoputes;