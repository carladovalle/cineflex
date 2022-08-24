import styled from 'styled-components';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Success () {

    const { state } = useLocation();

    return (
        <ScreenSuccess>
            <h1>Pedido feito com sucesso!</h1>
                <Information>
                    <h2>Filme e sessão</h2>
                    <h3>
                        {state.title}
                        <br></br>
                        {state.day} {state.time}
                    </h3>
                </Information>
                <Information>
                    <h2>Comprador</h2>
                    <h3>
                        Nome: {state.name}
                        <br></br>
                        CPF: {state.cpf}
                    </h3>
                </Information>
                <BackButton>
                    <Link to='/'>
                        Voltar pra Home
                    </Link>
                </BackButton>
        </ScreenSuccess>
    )
}

const ScreenSuccess = styled.div`
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
        color: #247A6B;
    }
`
const Information = styled.div`
    color: #293845;
    font-weight: 400;
    margin-bottom: 24px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    margin-left: 28px;

    h2 {
        font-weight: 700;
        margin-bottom: 7px;
        font-style: 24px;
    }
    h3 {
        display: flex;
        flex-direction: column;
    }
`
const BackButton = styled.button`
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
    margin-left: 74px;
    margin-top: 62px;
    margin-bottom: 189px;

    a {
        text-decoration: none;
        color: #FFFFFF;
    }
    &:hover {
        cursor: pointer;
    }
`