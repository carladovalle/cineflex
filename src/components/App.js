import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header';
import ChooseMovie from './ChooseMovie';
import ChooseSession from './ChooseSession';
import ChooseSeats from './ChooseSeats';
import Success from './Success';

export default function App () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<ChooseMovie />} />
                <Route path="/sessoes/:movieId" element={<ChooseSession />} />
                <Route path="/assentos/:seatId" element={<ChooseSeats />} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}