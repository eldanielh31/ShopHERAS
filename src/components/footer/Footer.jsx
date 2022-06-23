import { Facebook, Instagram, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../../responsive"
import "./footer.css"

const Container = styled.div`
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    background: #111;
    height: auto;
    width: 100vw;
    font-family: "Open Sans";
    padding-top: 40px;
    color: #fff;
    ${mobile({ flexDirection: "column" })}
`


const Footer = () => {
  return (
    <Container>
        <div className="footer-content">
          <h3>HERAS</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo iste corrupti doloribus odio sed!</p>
        <ul className="socials">
          <li><a href="https://www.facebook.com"><i><Facebook/></i></a></li>
          <li><a href="https://www.twitter.com"><i><Twitter/></i></a></li>
          <li><a href="https://www.instagram.com"><i><Instagram /></i></a></li>
          </ul>
        </div>
      <div className="footer-bottom">
          <p>copyright &copy;2022 HERAS. designed by <span>Daniel Brenes</span></p>
        </div>
      </Container>
  )
}

export default Footer