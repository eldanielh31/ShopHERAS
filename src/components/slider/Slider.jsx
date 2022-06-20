import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { sliderItems } from "../../data"
import { useState } from "react"
import { mobile } from "../../responsive"
import "./slider.css"

const Container = styled.div`
    ${mobile({ display: "none" })}
`
const Arrow = styled.div`
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
`

const Wrapper = styled.div`
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    background-color: #${props => props.bg};
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <Container className="sliderContainer">
            <Arrow className="arrowSlider" direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper className="wrapperSlider" slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide className="slide" bg={item.bg} key={item.id}>
                        <div className="imgContainerSlider">
                            <img className="imgSlider" src={item.img} alt="imagen promocion" />
                        </div>
                        <div className="infoContainerSlider">
                            <h1 className="titleSlider">{item.title}</h1>
                            <p className="descriptionSlider">{item.desc}</p>
                            <button className="buttonSlider">Comprar</button>
                        </div>
                    </Slide>
                ))}
            </Wrapper>

            <Arrow className="arrowSlider" direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider