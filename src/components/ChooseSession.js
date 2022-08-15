import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Footer from './Footer';

function InformationSessions({weekday, date, showtimes, key}) {
    return (
        <Session>
            <Day>
                {weekday} - {date}
                    <Times>
                        {
                            showtimes.map(time => 
                                <Link to={`/assentos/${time.id}`}>
                                    <Time key={time.id}>{time.name}</Time>
                                </Link>
                            )
                        }
                    </Times>
            </Day>
        </Session>
    )
}

export default function ChooseSection () {

    const { movieId } = useParams();
    const [sessions, setSessions] = useState([]);
    const [movieFooter, setMovieFooter] = useState({});

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)

        promise.then(response => {
            setSessions(response.data.days);
            setMovieFooter(response.data);
        })

    }, [])

    return (
        <ScreenChooseSession>
            <h1>Selecione o horário</h1>
            <SessionsTimes>
                    {
                        sessions.map(info => 
                            <InformationSessions
                                weekday = {info.weekday}
                                date = {info.date}
                                showtimes = {info.showtimes}
                                key = {info.id}
                            />
                            )
                    }
            </SessionsTimes>
            <Footer>
                    <Frame>
                            <img src= {movieFooter.posterURL} />
                    </Frame>
                    <NameMovie>
                        {movieFooter.title}
                    </NameMovie>
            </Footer>
        </ScreenChooseSession>
    )
}

const ScreenChooseSession = styled.div`
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
const SessionsTimes = styled.div`
    width: 374px;
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    font-family: 'Roboto', sans-serif;

    a {
        text-decoration: none;
    }
`
const Session = styled.div`
    display: flex;
    flex-direction: row;
`
const Day = styled.div`
    color: #293845;
    font-weight: 400;
    font-size: 20px;
`
const Times = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 23px;
`
const Time = styled.div`
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 3px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
    margin-right: 8px;
`
const Frame = styled.div`
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-bottom: 11px;

    img {
        width: 48px;
        height: 72px;
    }
`
const NameMovie = styled.div`
    color: #293845;
    font-size: 26px;
    margin-left: 14px;
    display: flex;
    flex-direction: column;
`