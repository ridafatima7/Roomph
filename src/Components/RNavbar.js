import React from 'react'
import  './Files/Romph.css';
import logo from './Files/logo.png';
// import {Link} from 'react-router-dom'
import{Input,Container, Navbar,Nav, Button,NavItem,NavLink, NavbarBrand,Image } from 'reactstrap';
const RNavbar = () => {
  return (
    <>
     <Navbar expand="lg">
      <Container fluid style={{  display: 'flex'}}>
      <Nav className="mr-auto" navbar style={{  display: 'flex'}} > 
        <NavbarBrand href="/"><img src={logo} alt="Logo" fluid /></NavbarBrand> 
            <NavItem className='pt-2' style={{  display: 'flex',fontFamily:'Poppins'}} > 
              <Button  style={{background:'white', border:'white', outline: 'none', borderRadius: '0' ,color: 'black', marginLeft: '1090px',color: "#ff3d00"}}>Sign Up</Button>
            </NavItem> 
       </Nav> 
      </Container>
    </Navbar>
    </>
  )
  
}

export default RNavbar
