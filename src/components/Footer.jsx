import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.h1`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Rigth = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>HERAS.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Similique perferendis adipisci natus possimus iste suscipit
                ipsum ea aut quasi aliquam? Amet esse quia corrupti nisi 
                mollitia quas iure, corporis tempore!
            </Desc>
            <SocialContainer>
                <SocialIcon color = "3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color = "E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color = "55ACEE">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links utiles</Title>
            <List>
                <ListItem>Principal</ListItem>
                <ListItem>Carro</ListItem>
                <ListItem>T-Shirt</ListItem>
                <ListItem>Sweaters</ListItem>
                <ListItem>Mi cuenta</ListItem>
                <ListItem>Seguimiento de orden</ListItem>
                <ListItem>Lista de deseos</ListItem>
                <ListItem>Terminos</ListItem>
            </List>
        </Center>
        <Rigth>
            <Title>Contacto</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> Cartago, Costa Rica.
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> (+506) 8493 3867
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}} /> luiskbrenes@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/3T1JCgm/payment.png"/>
        </Rigth>
    </Container>
  )
}

export default Footer