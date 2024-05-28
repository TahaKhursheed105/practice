import React from 'react'
import StyleServiceSectionMain from './ServiceSectionMain.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Homeicon from "../../assets/Images/Homeicon.png";
import Buss from "../../assets/Images/Buss.png";
import Delivery from "../../assets/Images/Delivery.png";
import Giving from "../../assets/Images/Giving.png";
import Button from 'react-bootstrap/Button';


const ServiceSectionMain = () => {
    return (
        <Container >
            <Row className='py-5'>
                <Col sm>
                    <h4 style={{ color: '#BD8C20' }}>Services</h4>

                    <h2 style={{ fontWeight: '800' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </h2>
                </Col>
                <Col sm>
                    <p>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team. <br /> <br />

                        A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
                </Col>


                <Row className='g-3 d-flex align-item-center justify-content-center'>
                    <Col lg={5} className='rounded-2  mx-3' style={{ backgroundColor: '#BD8C20' }}>
                        <div className='  d-flex align-items-center justify-content-center flex-column'>

                            <Image className='p-4' src={Homeicon} fluid />
                            <h2 className='p-1' style={{ color: 'white', fontWeight: '600' }}>House Moving <span style={{ fontWeight: '200' }}>Services
                            </span> </h2>
                            <p className='text-white p-2'>The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>

                            <Button className={`${StyleServiceSectionMain.btn} mb-3`} variant="dark">Get Qoute</Button>


                        </div>






                    </Col>
                    <Col lg={5} className='rounded-2 mx-3' style={{ backgroundColor: '#BD8C20' }}>
                        <div className='  d-flex align-items-center justify-content-center flex-column'>

                            <Image className='p-4' src={Buss} fluid />
                            <h2 className='p-1' style={{ color: 'white', fontWeight: '600' }}>Furniture Moving <span style={{ fontWeight: '200' }}>Services
                            </span> </h2>
                            <p className='text-white p-2'>The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>

                            <Button className={`${StyleServiceSectionMain.btn} mb-3`} variant="dark">Get Qoute</Button>


                        </div>






                    </Col>
                    <Col lg={5} className='rounded-2 mx-3' style={{ backgroundColor: '#BD8C20' }}>
                        <div className='  d-flex align-items-center justify-content-center flex-column'>

                            <Image className='p-4 ' src={Delivery} fluid />
                            <h2 className='p-1' style={{ color: 'white', fontWeight: '600' }}>Office Moving<span style={{ fontWeight: '200' }}>Services
                            </span> </h2>
                            <p className='text-white p-2'>The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>

                            <Button className={`${StyleServiceSectionMain.btn} mb-3`} variant="dark">Get Qoute</Button>


                        </div>






                    </Col>
                    <Col lg={5} className='rounded-2 mx-3' style={{ backgroundColor: '#BD8C20' }}>
                        <div className='  d-flex align-items-center justify-content-center flex-column'>

                            <Image className='p-4' src={Giving} fluid />
                            <h2 className='p-1' style={{ color: 'white', fontWeight: '600' }}>General Moving <span style={{ fontWeight: '200' }}>Services
                            </span> </h2>
                            <p className='text-white p-2'>The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>

                            <Button className={`${StyleServiceSectionMain.btn} mb-3`} variant="dark">Get Qoute</Button>


                        </div>






                    </Col>

                </Row>

            </Row>

        </Container>
    )
}

export default ServiceSectionMain
