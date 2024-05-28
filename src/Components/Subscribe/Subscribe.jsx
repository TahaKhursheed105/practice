import React from 'react'
import StyleSubscribe from '../Subscribe/Subscribe.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import BTN from '../../assets/Images/BtnIMG.png';
import Image from 'react-bootstrap/Image';

const Subscribe = () => {
    return (
        <div className={StyleSubscribe.Container}>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col lg={7}>
                        <h2 className='text-white text-center pt-5'>Subscribe  Now </h2>
                        <p className='text-white text-center '>Reciev latest news, update, and many other things every week. </p>

                        <InputGroup className="mb-3 pb-5">
                            <Form.Control
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                size='sm'
                                className='p-lg-3'
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                            <Image src={BTN} />
                            </Button>
                        </InputGroup>

                    </Col>

                </Row>

            </Container>
        </div>
    )
}

export default Subscribe
