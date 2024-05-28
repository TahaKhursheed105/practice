import React from 'react'
import StyleServiceContent from './ServiceContent.module.css'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ServiceContent = () => {
    return (
        <Container className='pb-5 mb-5'>
            <Row className='pb-5 mb-5'>
                <Col lg={6}>
                    <h4 style={{ color: '#BD8C20', fontWeight: '200' }}>How we work</h4>
                    <h1 style={{ fontWeight: '700' }}>
                        How We Work
                    </h1>

                    <p className='pt-4'>The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design. <br /> <br />
                        The argument in favor of using filler text goes something like this: If you use real content in the
                    </p>


                </Col>
                <Col >
                    <div className='d-flex justify-content-start align-items-center text-start p-3'>
                        <h1 className='me-5' style={{ fontSize: '80px' ,fontWeight:'600' }}>1</h1>
                        <h4 style={{ fontWeight: '600', color: '#BD8C20' }}>Full service range including</h4>

                    </div>
                    <div className='d-flex justify-content-start align-items-center  text-start p-3'>
                        <h1 className='me-4' style={{ fontSize: '80px' }}>2</h1>
                        <h4 style={{ fontWeight: '600', color: '#BD8C20' }}>Technical skills, design, business</h4>

                    </div>
                    <div className='d-flex justify-content-start align-items-center  text-start p-3'>
                        <h1 className='me-4' style={{ fontSize: '80px' }}>3</h1>
                        <h4 style={{ fontWeight: '600', color: '#BD8C20' }}>Themselves in the merchant's</h4>

                    </div>


                </Col>


            </Row>


        </Container>
    )
}

export default ServiceContent
