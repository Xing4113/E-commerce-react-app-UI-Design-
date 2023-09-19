import { Send } from "@mui/icons-material"
import styled from "styled-components"
import "./styles/Newsletter.css"

const Container = styled.div``
const Title = styled.h1``
const Description = styled.div``
const InputContainer = styled.div``

export const NewsLetter = () => {
    return (
        <Container>
            <Title></Title>
            <Description></Description>
            <InputContainer>
                <input type="text" />
                <button>
                    <Send />
                </button>
            </InputContainer>
        </Container>
    )
}
