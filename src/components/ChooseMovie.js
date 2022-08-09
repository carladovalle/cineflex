import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Movie({source, id}) {
    return (
        <div className="frame">
            <Link to={`/sessoes/${id}`}>
                <img className="imageMovie" src={source} />
            </Link>
        </div>
        
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
        <>
            <Select>
                Selecione o filme
            </Select>
            <Catalog>
                {
                    movies.map(movie => <Movie source={movie.posterURL} id={movie.id} />)
                }
            </Catalog>
        </>

        
    )
}

const Select = styled.div`
    width: 374px;
    height: 110px;
    color: #293845;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
`
const Catalog = styled.div`
    width: 374px;
    height: 700px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
`