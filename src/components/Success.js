import styled from 'styled-components';

export default function Success () {
    return (
        <>
            <Select>
                Pedido feito com sucesso!
            </Select>
            <SuccessScreen>
                <Information>
                    <Title>
                        Filme e sessão
                    </Title>
                    <Description>
                        Enola Holmes
                        24/06/2021 15:00
                    </Description>
                </Information>
                <Information>
                    <Title>
                        Ingressos
                    </Title>
                    <Description>
                        Assento 15
                        Assento 16
                    </Description>
                </Information>
                <Information>
                    <Title>
                        Comprador
                    </Title>
                    <Description>
                        Nome: João da Silva Sauro
                        CPF: 123.456.789-10
                    </Description>
                </Information>
                <BackButton>
                    Voltar pra Home
                </BackButton>
            </SuccessScreen>
        </>
    )
}

const Select = styled.div`
    width: 374px;
    height: 89px;
    color: #247A6B;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    text-align: center;
`
const SuccessScreen = styled.div`
    width: 374px;
    height: 651px;
    display: flex;
    flex-direction: column;
`
const Information = styled.div`
    color: #293845;
    font-weight: 400;
    margin-bottom: 24px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    margin-left: 28px;
`
const Title = styled.div`
    font-weight: 700;
    margin-bottom: 7px;
`
const Description = styled.div`
    display: flex;
    flex-direction: column;
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
`