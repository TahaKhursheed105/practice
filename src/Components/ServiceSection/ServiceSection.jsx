import React from 'react'
import styleServiceSection from './ServiceSection.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageDelivery from "../../assets/Images/ImageDelivery.png";


import StyleAboutHero from '../AboutHero/AboutHero.module.css'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const ServiceSection = () => {
    return (
        <div className={styleServiceSection.bg_colr}>

        <Container >

            <Row className='position-relative'>
                <Col sm>
                    <h1 style={{ fontSize: '60px', fontFamily: 'Bebas Neue' }}>Services </h1>

                    <p className={`${StyleAboutHero.paragraph} text-lowercase`}>we provide fast service that’s safe and reliable so you can move as soon as possible</p>

                    <Button className={`${styleServiceSection.btn} mb-3`} variant="dark">Get Qoute</Button>
                </Col>

                <Col sm>
                    <div className={`${styleServiceSection.ImageHero}  `}>
                        {/* <Image src={HeroImage} fluid /> */}
                        <Image src={ImageDelivery} fluid />
                    </div>

                </Col>
            </Row>

        </Container>
        </div>
    )
}

export default ServiceSection
