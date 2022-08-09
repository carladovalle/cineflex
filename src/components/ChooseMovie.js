import styled from 'styled-components';

export default function ChooseMovie () {
    return (
        <Select>
            Selecione o filme
        </Select>
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