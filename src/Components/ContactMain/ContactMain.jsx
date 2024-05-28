import React from 'react'
import StyleContactMain from './ContactMain.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import PhoneCall from "../../assets/Images/PhoneCall.png";
import MailBox from "../../assets/Images/MailBox.png";
import Location from "../../assets/Images/LocationB.png";
import Twitter from "../../assets/Images/twitter.png";
import Instagram from "../../assets/Images/intagram.png";
import Discord from "../../assets/Images/discord.png";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';







const ContactMain = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container>
            <div>

                <h1 className='text-center fw-bold' style={{ color: '#F6AF03' }}>Contact Us</h1>

                <p className='text-center ' style={{ fontWeight: '300', color: '#717171' }}>Any question or remarks? Just write us a message!</p>

            </div>

            <Row>
                <Col lg={6} className={`${StyleContactMain.card} rounded-3 mb-4`}>
                    <div>

                        <h4 className='text-start text-white pt-4 ps-4 fs-1'>Contact Information</h4>
                        <p className='text-white ps-4 pt-2 fs-5'>Say something to start a live chat!</p>
                    </div>

                    <div className='py-5 my-5'>

                        <div className='d-flex align-items-start justify-content-start p-4 text-white'>
                            <Image src={PhoneCall} rounded />

                            <p>+1012 3456 789</p>

                        </div>
                        <div className='d-flex align-items-start justify-content-start  p-4 text-white'>
                            <Image src={MailBox} rounded />

                            <p>demo@gmail.com</p>

                        </div>
                        <div className='d-flex align-items-start justify-content-start  p-4 text-white'>
                            <Image src={Location} rounded />

                            <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>

                        </div>


                    </div>
                    <div className='d-flex justify-content-start align-items-center px-2 mb-3'>
                        <div
                            style={{ width: '50', height: '50' }} className={`${StyleContactMain.Icon} mx-2`}>
                            <Image src={Twitter} rounded />
                        </div>
                        <div
                            style={{ width: '50', height: '50' }} className={`${StyleContactMain.Icons} mx-2`}>
                            <Image src={Instagram} rounded />
                        </div>
                        <div
                            style={{ width: '50', height: '50' }} className={`${StyleContactMain.Icon} mx-2`}>
                            <Image src={Discord} rounded />
                        </div>

                    </div>

                </Col>
                <Col className='ms-lg-5 mt-3'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-6">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue="FirstName"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue="LastName"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text></InputGroup.Text>
                                    <Form.Control
                                        type="Email"
                                        placeholder="Email"
                                        aria-describedby="Email"
                                        required
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="Number" placeholder="Phone" required />
                                <Form.Control.Feedback type="Number">
                                </Form.Control.Feedback>
                                Plese Provide a Number.
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>
                            {/* <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control type="text" placeholder="Zip" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
                                </Form.Control.Feedback>
                            </Form.Group> */}
                        </Row>
                        <Form.Group className=" ">
                            <h6 className='pt-3'>Select Service</h6> <br /> <br />
                            <div className=' mb-2 d-flex'>
                                <Form.Check className='me-3 ps-3 mb-3'
                                    required
                                    label="General Inquiry"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                                <Form.Check className='me-3 ps-3'
                                    required
                                    label="General Inquiry"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                                <Form.Check className='me-3 ps-3'
                                    required
                                    label="General Inquiry"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </div>
                        </Form.Group>

                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                            <Form.Control
                                as="textarea"
                                placeholder="Message Here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>




                        <div className='position-relative'>

                            <Button className={StyleContactMain.BtnStyle} style={{ backgroundColor: '#BD8C20', color: 'white', height: '60px', width: '150px' }} type="submit">Send Message</Button>
                        </div>
                    </Form>
                </Col>






            </Row>

        </Container >
    )
}

export default ContactMain
