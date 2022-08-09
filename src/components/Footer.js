import styled from 'styled-components';

export default function Footer () {
    return (
        <FooterScreen>
            nome do filme
        </FooterScreen>
    )
}

const FooterScreen = styled.div`
    width: 375px;
    height: 117px;
    background-color: #DFE6ED;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
`