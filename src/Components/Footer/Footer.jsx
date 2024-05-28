import React from 'react'
import StyleFooter from '../Footer/Footer.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/Images/logo-1.png';
import Calls from '../../assets/Images/Calls.png';
import Message from '../../assets/Images/message.png';
import Locations from '../../assets/Images/Locations.png';
import Facebook from '../../assets/Images/Facebooks.png';
import Youtube from '../../assets/Images/Youtube.png';
import Whatsapp from '../../assets/Images/Whatsapp.png';


const Footer = () => {
    return (
        <div style={{ backgroundColor: '#4F4E4E' }}>
            <Container>
                <Row>
                    <Col lg={6} className='border-end'>
                        <div className='mb-5'>
                            <Image src={Logo} />

                            <p>The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>
                        </div>
                    </Col>

                    <Col lg={3}>
                        <div className='my-5'>
                            <h4 style={{ color: '#BD8C20' }} >Quick Links</h4>

                            <ul className='list-unstyled'>
                                <li style={{ marginBottom: '20px', marginTop: '20px' }}><a href="" className={`${StyleFooter.footerLink} text-decoration-none`} >Home</a></li>
                                <li style={{ marginBottom: '20px' }}><a href="" className={`${StyleFooter.footerLink} text-decoration-none`}>About</a></li>
                                <li style={{ marginBottom: '20px' }}><a href="" className={`${StyleFooter.footerLink} text-decoration-none`}>Services</a></li>
                                <li style={{ marginBottom: '20px' }}><a href="" className={`${StyleFooter.footerLink} text-decoration-none`}>Contact</a></li>
                            </ul>

                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='my-5'>
                            <h4 style={{ color: '#BD8C20' }}>Contact</h4>

                            <ul className='list-unstyled'>
                                <li>
                                    <div className="d-flex py-3">
                                        <div>
                                            <Image src={Calls} fluid roundedCircle />
                                        </div>
                                        <div>
                                            <span className='d-block'>Have a question?</span>
                                            <span style={{ fontWeight: '600' }}>310-437-2766</span>

                                        </div>
                                    </div></li>
                                <li> <div className="d-flex py-3">
                                    <div>
                                        <Image src={Message} fluid roundedCircle />
                                    </div>
                                    <div>
                                        <span className='d-block'>Contact us at</span>
                                        <span style={{ fontWeight: '600' }}>unreal@outlook.com</span>

                                    </div>
                                </div></li>
                                <li> <div className="d-flex py-3">
                                    <div>
                                        <Image src={Locations} fluid roundedCircle />
                                    </div>
                                    <div>
                                        <span className='d-block'>Location</span>
                                        <span style={{ fontWeight: '600' }}>Sydney</span>

                                    </div>
                                </div></li>

                            </ul>

                        </div>


                    </Col>

                </Row>

                <div className='d-flex justify-content-between border-top align-items-center flex-column flex-lg-row flex-md-row flex-sm-column'>
                    <div>
                        <Image className='m-1 text-white' src={Facebook} fluid roundedCircle />
                        <Image className='m-1 text-white' src={Youtube} fluid roundedCircle />
                        <Image className='m-1 text-white' src={Whatsapp} fluid roundedCircle />
                    </div>

                    <div style={{ fontSize: '20px', fontWeight: '400' }} className='text-white'>
                        © 2023 JNR  All Rights Reserved
                    </div>
                    <div>
                        <p className='text-white' style={{ opacity: '9px', fontWeight: '200', fontSize: '10px' }}> © 2023, All Rights Reserved</p>

                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Footer
