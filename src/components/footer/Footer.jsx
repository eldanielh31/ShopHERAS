import { Facebook, Instagram, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../../responsive"
import "./footer.css"

const Container = styled.div`
    ${mobile({ flexDirection: "column" })}
`


const Footer = () => {
  return (
    <Container className="containerFooter">
        <div className="footer-content">
          <h3>HERAS</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo iste corrupti doloribus odio sed!</p>
        <ul className="socials">
          <li><a href="https://www.facebook.com/luisk.brenesgomez"><i><Facebook/></i></a></li>
          <li><a href="https://twitter.com/LuisK_Brenes"><i><Twitter/></i></a></li>
          <li><a href="https://www.instagram.com/heras_cr/"><i><Instagram /></i></a></li>
          </ul>
        </div>
      <div className="footer-bottom">
          <p>copyright &copy;2022 HERAS. designed by <span>Daniel Brenes</span></p>
        </div>
      </Container>
  )
}

export default Footer