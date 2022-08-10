import styled from 'styled-components';

export default function Footer (props) {
    return (
        <FooterScreen>
            {props.children}
        </FooterScreen>
    )
}

const FooterScreen = styled.div`
    width: 375px;
    height: 117px;
    background-color: #DFE6ED;
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    position: fixed;
    bottom: 0;
    left: 0;
`