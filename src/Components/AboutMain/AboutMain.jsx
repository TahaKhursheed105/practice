import StyleAboutMain from "./AboutMain.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ImgAboutMain1 from '../../assets/Images/ImgAboutMain1.png'
import ImgAboutMain2 from '../../assets/Images/ImgAboutMain2.png'
import ImgAboutMain3 from '../../assets/Images/ImgAboutMain3.png'
import ImgAboutMain4 from '../../assets/Images/ImgAboutMain4.png'
import ImgAboutMain5 from '../../assets/Images/ImgAboutMain5.png'
import IconTiming from '../../assets/Images/Icon_timing.png'
import Icon1 from '../../assets/Images/icons1.png'
import Icon2 from '../../assets/Images/icon2.png'
import Icon3 from '../../assets/Images/icon3.png'
import Button from 'react-bootstrap/Button';



const AboutMain = () => {
    return (
        <Container>


            <Row>
                <Col sm>
                    <h5 className="pt-5" style={{ color: '#BD8C20' }}>About</h5>
                    <h1 style={{ fontSize: '40px', fontFamily: 'Bebas Neue' }}>An Experience
                        <span style={{ color: '#BD8C20' }}> Moving Company </span> </h1>
                </Col>
                <Col sm className="p-4 my-5 ">


                    <div className="pt-5" style={{ color: '#4F4E4E', fontSize: '16px' }}>
                        <p>he argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>
                        <p>Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim mi quis neque interdum, quis porta sem finibus.</p>
                        <p>Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim mi quis neque interdum, quis porta sem finibus.</p>
                    </div>


                </Col>
            </Row>

            <Row>

                <Col lg={6}>
                    <Image src={ImgAboutMain1} fluid />

                </Col>
                <Col lg={6}>
                    <Image src={ImgAboutMain2} fluid />
                    <Image src={ImgAboutMain3} fluid />
                    <Image src={ImgAboutMain4} fluid />
                    <Image src={ImgAboutMain5} fluid />


                </Col>
            </Row>



            <Row className="pt-5 mt-5">
                <Col sm>
                    <h1 style={{ fontSize: '40px', fontWeight: '100', fontFamily: 'Bebas Neue' }}>Why <br />
                        <span style={{ color: '#BD8C20', fontWeight: '600' }}>JNR  </span> </h1>

                    <p style={{ fontWeight: '400' }}>Long run, and work as an extension of the merchant's team.</p>
                    <p style={{ color: '#4F4E4E' }}>The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.
                    </p>

                    <Button className={`${StyleAboutMain.btn} btnn mx-3 mb-3`} variant="dark">Contact Us</Button>
                </Col>






                <Col sm >

                    <Row>
                        <Col className="d-flex align-items-center justify-content-center flex-column" lg={6} style={{ backgroundColor: '#4F4E4E' }}>
                            <div className="d-flex align-items-center justify-content-center" style={{
                                backgroundColor: '#BD8C20', borderRadius: '50%', width: '80px', height: '80px'
                            }}>
                                <Image src={IconTiming} fluid width={50} />
                            </div>

                            <div className="text-center">

                                <h5 className={StyleAboutMain.heading} style={{ fontSize: '40px', fontWeight: '600', fontFamily: 'Bebas Neue', color: 'white' }}>Quick
                                    <br />
                                    <span style={{ fontWeight: '200' }}>Services </span> </h5>
                            </div>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center flex-column" lg={6} style={{ backgroundColor: '#BD8C20' }}>
                            <div className="d-flex align-items-center justify-content-center" style={{
                                backgroundColor: '#4F4E4E', borderRadius: '50%', width: '80px', height: '80px'
                            }}>
                                <Image src={Icon1} fluid width={50} />
                            </div>

                            <div className="text-center">

                                <h5 className={StyleAboutMain.heading} style={{ fontSize: '40px', fontWeight: '600', fontFamily: 'Bebas Neue', color: 'white' }}>100% Reliable
                                    <br />
                                    <span style={{ fontWeight: '200' }}>Services </span> </h5>
                            </div>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center flex-column" lg={6} style={{ backgroundColor: '#BD8C20' }}>
                            <div className="d-flex align-items-center justify-content-center" style={{
                                backgroundColor: '#4F4E4E', borderRadius: '50%', width: '80px', height: '80px'
                            }}>
                                <Image src={Icon2} fluid width={50} />
                            </div>

                            <div className="text-center">

                                <h5 className={StyleAboutMain.heading} style={{ fontSize: '40px', fontWeight: '600', fontFamily: 'Bebas Neue', color: 'white' }}>Competitive
                                    <br />
                                    <span style={{ fontWeight: '200' }}>Prices </span> </h5>
                            </div>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center flex-column" lg={6} style={{ backgroundColor: '#4F4E4E' }}>
                            <div className="d-flex align-items-center justify-content-center" style={{
                                backgroundColor: ' #BD8C20', borderRadius: '50%', width: '80px', height: '80px'
                            }}>
                                <Image src={Icon3} fluid width={50} />
                            </div>

                            <div className="text-center">

                                <h5 className={StyleAboutMain.heading} style={{ fontSize: '35px', fontWeight: '600', fontFamily: 'Bebas Neue', color: 'white' }}>24/7 Customer
                                    <br />
                                    <span style={{ fontWeight: '200' }}> Support </span> </h5>
                            </div>
                        </Col>



                    </Row>

                </Col>







            </Row>




        </Container >

    )
}

export default AboutMain
