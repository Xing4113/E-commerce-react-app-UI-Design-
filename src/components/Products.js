import { Product } from './Product'
import { products } from '../data'
import styled from 'styled-components'

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
juatify-content: space-between;
`

export const Products = () => {
    return (
        <Container>
            {products.map(item => {
                return <Product item={item} key={item.id} ProductId={item.id} />
            })}
        </Container>
    )
}
