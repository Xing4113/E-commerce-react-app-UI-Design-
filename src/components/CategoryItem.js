import styled from 'styled-components'
import "./styles/CategoryItem.css"
import { mobile } from "../responsive";

const Container = styled.div`
flex:1;
margin: 3px;
heigh: 70vh;
position:relative;
`

const Info = styled.div`
position:absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.div`
color: white;
margin-bottom: 20px;
`
const Image = styled.img`
${mobile({ height: "20vh" })}

`
export const CategoryItem = ({ item }) => {

    return (
        <Container>
            <Image className='category-image' src={item.image} />
            <Info>
                <Title>{item.title}</Title>
                <button className='shop-now-btn'>SHOP NOW</button>
            </Info>
        </Container>
    )
}
