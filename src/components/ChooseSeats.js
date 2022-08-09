import styled from 'styled-components';

export default function ChooseSeats () {
    return (
        <>
            <Select>
                Selecione o(s) assento(s)
            </Select>
            <Seats>
                <Seat>
                    1
                </Seat>
                <Seat>
                    2
                </Seat>
                <Seat>
                    3
                </Seat>
                <Seat>
                    4
                </Seat>
                <Seat>
                    5
                </Seat>
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
            <Form>
                <TitleInput>
                    Nome do comprador
                </TitleInput>
                <Input>
                </Input>
                <TitleInput>
                    CPF do comprador
                </TitleInput>
                <Input>
                </Input>
            </Form>
            <ButtonReserve>
                Reservar assento(s)
            </ButtonReserve>
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
const Seats = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 374px;
    height: 202px;
`
const Seat = styled.div`
    width: 26px;
    height: 26px;
    background-color: #C3CFD9;
    border-radius: 12px;
    border: 1px solid #808F9D;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 7px;
`
const Status = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 374px;
    height: 54px;
    margin-top: 16px;
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
const Form = styled.div`
    width: 374px;
    height: 161px;
    margin-top: 66px;
`
const TitleInput = styled.div`
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