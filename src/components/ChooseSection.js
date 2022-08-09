import styled from 'styled-components';

export default function ChooseSection () {
    return (
        <>
            <Select>
                Selecione o horário
            </Select>
            <SectionsTimes>
                <Section>
                    <Day>
                        Quinta feira - 24/06/2021
                        <Times>
                            <Time>
                                15:00
                            </Time>
                            <Time>
                                19:00
                            </Time>
                        </Times>
                    </Day>
                </Section>
                <Section>
                    <Day>
                        Sexta feira - 25/06/2021
                        <Times>
                            <Time>
                                15:00
                            </Time>
                            <Time>
                                19:00
                            </Time>
                        </Times>
                    </Day>
                </Section>
            </SectionsTimes>
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
const SectionsTimes = styled.div`
    width: 374px;
    height: 583px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
`
const Section = styled.div`
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