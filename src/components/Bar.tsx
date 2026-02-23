import styled from "styled-components";

const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const StyledImg = styled.img`
    width: 10%;
    margin: 1% 2%;
`

export default function Bar(){
    return (
        <>
            <Container>
                <StyledImg src="../src/assets/logo f1.png" alt ="logo f1"></StyledImg>
                <h1>Drivers of Formula 1</h1>
                <StyledImg src="../src/assets/car.png" alt ="logo f1 car"></StyledImg>
            </Container>

        </>
    )
}