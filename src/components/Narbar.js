import "./styles/Narbar.css"
import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import Badge from '@mui/material/Badge';
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
`
const Wrapper = styled.div`
    ${mobile({ padding: "10px 0px" })}
`

const Logo = styled.div`
`

const Language = styled.span`
    ${mobile({ display: "none" })}

`

const Input = styled.input`
    ${mobile({ width: "50px" })}
`

const Right = styled.div`
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`    
    ${mobile({ fontSize: "13px", marginLeft: "5px" })}   
`


export const Narbar = () => {
    return (
        <Container className='navbar-container'>
            <Wrapper className='header-container'>
                <div className='header header-left-section'>
                    <Language className='language'>
                        EN
                    </Language>
                    <div className='search-container'>
                        <Input className='search-box' placeholder="Search" />
                        <Search className='search-icon' style={{ fontSize: "18px" }} />
                    </div>
                </div>

                <div className='header header-center-section'>
                    <Logo className='header-logo'>
                        XING.
                    </Logo>
                </div>

                <Right className='header header-right-section'>
                    <MenuItem className='header-menu-item'>REGISTER</MenuItem>
                    <MenuItem className='header-menu-item'>SIGN IN</MenuItem>
                    <MenuItem className='header-menu-item'>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Narbar