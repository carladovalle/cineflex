import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Footer from './Footer';

function InformationSeats({number, key, availability}) {

    const [selected, setSelected] = useState(false);

    let color, border;

    if (selected == false) {
        color = availability ? "#C3CFD9" : "#FBE192";
        border = availability ? "#808F9D" : "#F7C52B";
    } else {
        color = "#8DD7CF";
        border = "#45BDB0";
    }

    return (
            <Seat color={color} border={border} onClick={() => {
                if (selected == false && availability == true) {
                    setSelected(true);
                } else if (availability == true) {
                    setSelected(false);
                }
            }}>
                { number }
            </Seat>  
    )
}

export default function ChooseSeats () {

    const { seatId } = useParams();
    const [seats, setSeats] = useState([]);
    const [movieFooter, setMovieFooter] = useState([]);
    const [dayFooter, setDayFooter] = useState([]);
    const [timeFooter, setTimeFooter] = useState({});

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${seatId}/seats`);

        promise.then(response => {
            setSeats(response.data.seats);
            setMovieFooter(response.data.movie);
            setDayFooter(response.data.day);
            setTimeFooter(response.data);
        });

    }, []);

    return (
        <ScreenChooseSeat>
            <h1>Selecione o(s) assento(s)</h1>
            <Seats>
                {
                    seats.map(info => 
                        <InformationSeats 
                            number = {info.name}
                            id = {info.id}
                            key = {info.id}
                            availability = {info.isAvailable}
                        />
                    )
                }
            </Seats>
            <Status>
                <OptionSelected>
                    <SelectedSeat></SelectedSeat>
                    Selecionado
                </OptionSelected>
                <OptionAvailable>
                    <SeatAvailable></SeatAvailable>
                    Disponível
                </OptionAvailable>
                <OptionUnavailable>
                    <SeatUnavailable></SeatUnavailable>
                    Indisponível
                </OptionUnavailable>
            </Status>
            <form>
                <Label>Nome do comprador</Label>
                <Input />
                <Label>CPF do comprador</Label>
                <Input />
                <ButtonReserve>Reservar assento(s)</ButtonReserve>
            </form>
            <Footer>
                    <Frame>
                            <img src= {movieFooter.posterURL} />
                    </Frame>
                    <InfoMovie>
                        {movieFooter.title}
                        <DetailsInfo>
                            {dayFooter.weekday} - {timeFooter.name}
                        </DetailsInfo>
                    </InfoMovie>
            </Footer>
        </ScreenChooseSeat>
    )
}

const ScreenChooseSeat = styled.div`
    width: 375px;
    height: 800px;
    background-color: #FFFFFF;
    margin-top: 67px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    h1 {
        font-size: 24px;
        color: #293845;
        margin-left: 50px;
        padding-top: 30px;
        padding-bottom: 30px;
    }
`
const Seats = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 374px;
    height: 202px;
    flex-wrap: wrap;
`
const Seat = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${props => props.color};
    border-radius: 12px;
    border: 1px solid ${props => props.border};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 7px;
    font-size: 11px;

    &:hover {
        cursor: pointer;
    }
`
const Status = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 374px;
    height: 54px;
    margin-top: 16px;
    margin-bottom: 42px;
`
const OptionSelected = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 13px;
    width: 91px;
    justify-content: center;
    align-items: center;
`
const SelectedSeat = styled.div`
    width: 25px;
    height: 25px;
    background-color: #8DD7CF;
    border-radius: 12px;
    border: 1px solid #1AAE9E;
    margin-bottom: 5px;
`
const OptionAvailable = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 13px;
    width: 65px;
    justify-content: center;
    align-items: center;
`
const SeatAvailable = styled.div`
    width: 25px;
    height: 25px;
    background-color: #C3CFD9;
    border-radius: 12px;
    border: 1px solid #808F9D;
    margin-bottom: 5px;
`
const OptionUnavailable = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 13px;
    width: 91px;
    justify-content: center;
    align-items: center;
`
const SeatUnavailable = styled.div`
    width: 25px;
    height: 25px;
    background-color: #FBE192;
    border-radius: 12px;
    border: 1px solid #F7C52B;
    margin-bottom: 5px;
`
const Label = styled.div`
    color: #293845;
    font-size: 18px;
    margin-left: 24px;
    margin-bottom: 1px;
    margin-top: 7px;
`
const Input = styled.input`
    width: 327px;
    height: 51px;
    border: 1px solid #D4D4D4;
    margin-left: 24px;
`
const ButtonReserve = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border: 1px solid #E8833A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 18px;
    margin-left: 72px;
    margin-top: 57px;
    margin-bottom: 30px;
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
const InfoMovie = styled.div`
    color: #293845;
    font-size: 26px;
    margin-left: 14px;
    display: flex;
    flex-direction: column;
`
const DetailsInfo = styled.div`
`