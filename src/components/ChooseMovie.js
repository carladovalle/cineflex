import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Movie({source, id}) {
    return (
        <Frame>
            <Link to={`/sessoes/${id}`}>
                <img src={source} />
            </Link>
        </Frame>
        
    )
}

export default function ChooseMovie () {

    const [movies,setMovies] = React.useState([]);

    useEffect(() => {

        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then((response) => {
            console.log(response.data)
            setMovies([...response.data]);
        });

    },[]);

    return (
            <ScreenChooseMovie>
                    <h1>Selecione o filme</h1>
                <Catalog>
                    {
                        movies.map(movie => <Movie source={movie.posterURL} id={movie.id} />)
                    }
                </Catalog>
            </ScreenChooseMovie>

        
    )
}

const ScreenChooseMovie = styled.div`
    width: 375px;
    height: 100%;
    background-color: #FFFFFF;
    margin-top: 67px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    h1 {
        font-size: 24px;
        color: #293845;
        margin-left: 100px;
        padding-top: 30px;
        padding-bottom: 30px;
    }
`
const Catalog = styled.div`
    width: 374px;
    height: 700px;
    display: flex;
    flex-wrap: wrap;
`
const Frame = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    margin-bottom: 11px;

    img {
        width: 129px;
        height: 193px;
    }
`