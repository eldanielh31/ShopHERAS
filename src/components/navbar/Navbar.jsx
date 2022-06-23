import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'
import { mobile } from '../../responsive'
import {useDispatch, useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import { deleteCurrentUserSuccess, deleteUserFailure, deleteUserStart } from '../../redux/userRedux'
import "./navbar.css"

//NAVBAR
const Container = styled.div`
  ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
  ${mobile({ padding: "10px 0px" })}
`

const Input = styled.input`
  ${mobile({ width: "50px" })}
`

//NAVBAR CENTRO

const Logo = styled.h1`

  ${mobile({ fontSize: "24px" })}
`

//NAVBAR DERECHA

const Rigth = styled.div`

  ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(deleteUserStart());
    try {
      dispatch(deleteCurrentUserSuccess());
    } catch (error) {
      dispatch(deleteUserFailure());
    }
  }


  return (
    <Container className='navbar'>
      <Wrapper className='wrapper'>
        <div className='left'>
          <div className='searchContainer'>
            <Input className='input'/>
            <Search style={{color:"gray", frontSize: 16}}/>
          </div>
        </div>
        
        <div className='center'>
          <Link to="/">
            <Logo className='logo'>HERAS.</Logo>
          </Link>
        </div>

        <Rigth className='rigth'>
          {((user !== null)) ? <MenuItem className='menuItem' onClick={handleLogout}>Cerrar Sesion</MenuItem> : <Link to="/login"><MenuItem>Iniciar sesión</MenuItem></Link>}
          <Link to = "/cart">
            <MenuItem className='menuItem'>
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