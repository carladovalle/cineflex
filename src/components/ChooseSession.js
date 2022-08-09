import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

function InformationSessions({weekday, date, showtimes, key}) {
    return (
        <div className="session">
            <div className="day">
                {weekday} - {date}
                <div className="times">
                    {
                        showtimes.map(time => 
                            <Time key={time.id}>{time.name}</Time>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default function ChooseSection () {

    const { movieId } = useParams();
    const [sessions, setSessions] = useState([]);

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)

        promise.then(response => {
            setSessions(response.data.days)
        })

    }, [])

    return (
        <>
            <Select>
                Selecione o horário
            </Select>
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
const SessionsTimes = styled.div`
    width: 374px;
    height: 583px;
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    font-family: 'Roboto', sans-serif;
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