import styled from 'styled-components';

export default function Header () {
    return (
        <HeaderScreen>
            CINEFLEX
        </HeaderScreen>
    )
}

const HeaderScreen = styled.div`
    width: 375px;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #E8833A;
    font-size: 34px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
`