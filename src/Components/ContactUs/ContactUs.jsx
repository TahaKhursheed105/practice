import React from 'react'
import StyleContactUs from './ContactUs.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ContactImage from '../../assets/Images/ImageContact.png';
import Heroimage from "../../assets/Images/Mover.png";
import ImageContact from "../../assets/Images/ImageContact.png";
import HeaderBack from "../../assets/Images/jnr.png";



const ContactUs = () => {
    return (
        <div className={StyleContactUs.bg_colr}>

        <Container>

            <Row className='d-flex justify-content-center align-items-center mb-3 px-3 py-3'>
                <Col sm>
                    <h1 style={{ fontSize: '60px', fontFamily: 'Bebas Neue' }}>Contact Us 
                   </h1>

                </Col>

                <Col sm>


                    <div>
                        <Image className='' src={HeaderBack} fluid />
                    </div>


                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactUs
