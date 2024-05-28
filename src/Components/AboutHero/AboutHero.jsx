import React from 'react'
import StyleAboutHero from '../AboutHero/AboutHero.module.css'
import Image from 'react-bootstrap/Image';
// import HeroImage from "../../assets/Images/headerBackimg.png";
import ImageDelivery from "../../assets/Images/ImageDelivery.png";
import Location from "../../assets/Images/Location.png";
import Calender from "../../assets/Images/Calender.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutHero = () => {
  return (
    <div className={StyleAboutHero.bg_colr}>
      <Container>

        <Row className='position-relative'>
                    <Col sm>
                        <h1 style={{ fontSize: '60px', fontFamily:'Bebas Neue' }}>About US </h1>

                        <p className={`${StyleAboutHero.paragraph} text-lowercase`}>we provide fast service that’s safe and reliable so you can move as soon as possible</p>

                        <Button className={`${StyleAboutHero.btn}`} variant="dark">Get Qoute</Button>
                    </Col>

                    <Col sm>
                        <div className={`${StyleAboutHero.ImageHero}  `}>
                            {/* <Image src={HeroImage} fluid /> */}
                            <Image src={ImageDelivery} fluid />
                        </div>

                    </Col>
                </Row>
      </Container>
    </div>
  )
}

export default AboutHero
