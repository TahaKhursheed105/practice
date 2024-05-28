import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeroStyle from '../HeroSection/Hero.module.css'
import Image from 'react-bootstrap/Image';
import HeroImage from "../../assets/Images/headerBackimg.png";
import Heroimage from "../../assets/Images/Mover.png";
import Location from "../../assets/Images/Location.png";
import Calender from "../../assets/Images/Calender.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';



const Hero = () => {
    return (
        <div className={HeroStyle.bg_colr}>
            <Container>
                <Row className='position-relative'>
                    <Col sm>
                        <h1 style={{ fontSize: '60px', fontFamily:'Bebas Neue' }}>welcome to JnR Elite Removalists <span style={{ color: '#BD8C20' }}> Australia </span> </h1>

                        <p className={`${HeroStyle.paragraph} text-lowercase`}>we provide fast service that’s safe and reliable so you can move as soon as possible</p>

                        <Button className={`${HeroStyle.btn}`} variant="dark">Get Qoute</Button>
                    </Col>

                    <Col sm>
                        <div className={`${HeroStyle.ImageHero}  `}>
                            {/* <Image src={HeroImage} fluid /> */}
                            <Image src={Heroimage} fluid />
                        </div>

                    </Col>
                </Row>

                <Row className='bg-white p-4 ' style={{borderRadius: '96px'}}>
                    <Col>
                        <p className={`${HeroStyle.colrChange}`}>Pickup Location</p>
                        <span className='d-flex align-items-start'>
                            <Image className='px-3' src={Location} fluid />
                            <p>
                                Sydney
                            </p>

                        </span>
                    </Col>
                    <Col>
                        <p className={`${HeroStyle.colrChange}`}>Dropoff Location</p>
                        <span className='d-flex align-items-start'>
                            <Image className='px-3' src={Location} fluid />
                            <p>
                                Melbourne
                            </p>

                        </span>
                    </Col>
                    <Col>
                        <p className={`${HeroStyle.colrChange}`}> Pick Up Date</p>
                        <span className='d-flex align-items-start'>
                            <Image className='px-3' src={Calender} fluid />
                            <Form.Control type='date'>


                            </Form.Control>
                    
                           

                        </span>
                    </Col>

                    <Col className='d-flex align-items-center '>
                        <Form.Group as={Col} md="6" controlId="validationCustom05">
                            <Form.Label className={`${HeroStyle.colrChange} `}>Contact Number</Form.Label>
                            <Form.Control className={HeroStyle.form} type="text" placeholder="" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button className={`${HeroStyle.btn} btnn mx-3` } variant="dark">Submit</Button>
                    </Col>

                </Row>


            </Container>
        </div>
    )
}

export default Hero;
