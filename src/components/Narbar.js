import React from 'react'
import "./styles/Narbar.css"
import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import Badge from '@mui/material/Badge';

export const Narbar = () => {
    return (
        <div className='navbar-container'>
            <div className='header-container'>
                <div className='header header-left-section'>
                    <div className='language'>
                        EN
                    </div>
                    <div className='search-container'>
                        <input className='search-box' type='text' />
                        <Search className='search-icon' style={{ fontSize: "14px" }} />
                    </div>
                </div>

                <div className='header header-center-section'>
                    <div className='header-logo'>
                        XING.
                    </div>
                </div>

                <div className='header header-right-section'>
                    <div className='header-menu-item'>REGISTER</div>
                    <div className='header-menu-item'>SIGN IN</div>
                    <div className='header-menu-item'>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>

                </div>
            </div>
        </div>
    )
}
