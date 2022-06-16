import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'
import { mobile } from '../responsive'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'

//NAVBAR
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`

//NAVBAR IZQUIERDA

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`

//NAVBAR CENTRO

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })}
`

//NAVBAR DERECHA

const Rigth = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;   
  ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px; 
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input></Input>
            <Search style={{color:"gray", frontSize: 16}}/>
          </SearchContainer>
        </Left>
        
        <Center>
          <Link to="/">
            <Logo>HERAS.</Logo>
          </Link>
        </Center>

        <Rigth>
          <MenuItem href= "./pages/Register">Registrar</MenuItem>
          <MenuItem>Iniciar Sesión</MenuItem>
          <Link to = "/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
            </MenuItem>
          </Link>
          
        </Rigth>
      </Wrapper>
    </Container>
  )
}

export default Navbar