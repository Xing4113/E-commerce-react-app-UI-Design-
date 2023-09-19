import React from 'react'
import { Narbar } from '../components/Narbar'
import { Announcement } from '../components/Announcement'
import { Slider } from '../components/Slider'
import { Categories } from '../components/Categories'
import { Products } from '../components/Products'

export const Home = () => {
    return (
        <div>
            <Announcement />
            <Narbar />
            <Slider />
            <Categories />
            <Products />
        </div>
    )
}
