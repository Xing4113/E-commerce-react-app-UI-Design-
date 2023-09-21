import styled from 'styled-components'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from "@mui/icons-material"
import "./styles/Product.css"
import { mobile } from "../responsive";

const Info = styled.div`
    opacity: 0;
    width:100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
     
    display: flex;
    align-items: center;
    justify-content: center;

    transition:all 0.4s ease;   
    cursor: pointer;
`


const Container = styled.div`
flex:1;
margin: 5px;
min-width: 285px;
max-width: 285px;
height: 350px;

display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;

position:relative;

&:hover ${Info}{
 opacity:1;
}

${mobile({ maxWidth: "400px" })}

`
const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    margin:10px;

    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    background-color: white;
`

export const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <img className='product-image' src={item.image} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>

                <Icon>
                    <SearchOutlined />
                </Icon>

                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}
