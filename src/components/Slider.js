import React, { useState } from 'react'
import "./styles/Slider.css"
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import styled from '@emotion/styled';
import { sliderItems } from '../data';
import { mobile } from "../responsive";

const Container = styled.div`
    ${mobile({ display: "none" })}
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;

    background-color: #${props => props.bg};
`
const Wrapper = styled.div`
    height: 100%;

    display: flex;

    transition: all 1.5s ease;
    transform:translateX(${props => props.slideIndex * -100}vw);
`

export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container className='slider-container'>
            <div className='arrow arrow-left' onClick={() => handleClick("left")}>
                <KeyboardArrowLeft className='left-arrow' />
            </div>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => {
                    return (
                        <Slide bg={item.bg} key={item.id}>
                            <div className='img-container'>
                                <img className='product-img' src={item.image} />
                            </div>
                            <div className='info-container'>
                                <div className='info-title'>{item.title}</div>
                                <div className='info-desc'>{item.desc}</div>
                                <button className='info-btn'>SHOW NOW</button>
                            </div>
                        </Slide>
                    );
                })}
            </Wrapper>

            <div className='arrow arrow-right' onClick={() => handleClick("right")}>
                <KeyboardArrowRight className='right-arrow' />
            </div>
        </Container>
    )
}
