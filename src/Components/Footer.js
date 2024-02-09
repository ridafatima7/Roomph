import React from 'react'
import  './Files/Romph.css';
import whtsapp from './Files/logo.png';
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import{Input,Container, Button,Image,Row,Col } from 'reactstrap';
const Footer = () => {
  return (
    <>
       <Container fluid>
         {/* <Row > */}
            <Row  className='text-white Footer pt-5'>
                <Col md={4} className='Fcol'>
                   <h1 style={{fontWeight:'1000'}}>roomph</h1>
                </Col>
                <Col md={4} className='Fcol'>
                    <h4 style={{fontWeight:'300'}}>Useful Links</h4>
                     <h6>About Us</h6>
                     <h6>Contact Us</h6>
                     <h6>Blogs</h6>
                     {/* </BsFacebook>
                     </BsTwitter> */}
                </Col>
                <Col md={4}  className='Fcol'>
                    <h4 style={{fontWeight:'300'}}>How can we help?</h4>
                    <h1 style={{fontWeight:'150'}}>+9230467865</h1>
                    <p style={{fontWeight:'100'}}>Contact Our Customer Support</p>
                </Col>
            </Row>
         {/* </Row> */}
       </Container>
    </>
  )
}

export default Footer
