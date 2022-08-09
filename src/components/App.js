import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header';
import ChooseMovie from './ChooseMovie';
import ChooseSection from './ChooseSection';
import Footer from './Footer';
import ChooseSeats from './ChooseSeats';
import Success from './Success';

export default function App () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<ChooseMovie />} />
            </Routes>
        </BrowserRouter>
    )
}