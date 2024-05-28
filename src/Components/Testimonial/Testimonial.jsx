import React from 'react'
import StyleTestimonial from "../Testimonial/Testimonial.module.css";
import Blog from "../../assets/Images/bloglight.png";
import BlogDark from "../../assets/Images/Blogdark.png";
import Image from 'react-bootstrap/Image';
import Slider from "react-slick";
import Profile from "../../assets/Images/profile-img.jpg";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';



const Testimonial = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        arrows: false,
        dots: true,

    };

    return (
        <div style={{ backgroundColor: '#4F4E4E' }} className='py-5'>
            <div className='py-5 text-center' style={{color:'#BD8C20'}}>
                <h5 className='pb-4'>Testimonials</h5>
                <h2 className='text-white text-center'>What Our
                    Clients Saying</h2>
            </div>

            <div className="slider-container">
                <Container>
                    <Slider {...settings} className={StyleTestimonial.slick_list}>
                        <Card className={StyleTestimonial.slick_slide}>

                            <Card.Body>
                                <div>
                                    <div className='py-5'>
                                        <span>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </span>
                                        <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you. A digital agency is a business you hire to outsource your digital marketing efforts, </p>
                                    </div>
                                    <div className="d-flex py-3">
                                        <div>
                                            <Image src={Profile} fluid width={100} roundedCircle />
                                        </div>
                                        <div>
                                            <h5>Alan Martín</h5>
                                            <p>Meta Inc.</p>

                                        </div>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card >
                        <Card className={StyleTestimonial.slick_slide}>

                            <Card.Body>
                                <div>
                                    <div className='py-5'>
                                        <span>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </span>
                                        <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you. A digital agency is a business you hire to outsource your digital marketing efforts, </p>
                                    </div>
                                    <div className="d-flex py-3">
                                        <div>
                                            <Image src={Profile} fluid width={100} roundedCircle />
                                        </div>
                                        <div>
                                            <h5>Alan Martín</h5>
                                            <p>Meta Inc.</p>

                                        </div>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                        <Card className={StyleTestimonial.slick_slide}>

                            <Card.Body>
                                <div>
                                    <div className='py-5'>
                                        <span>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </span>
                                        <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you. A digital agency is a business you hire to outsource your digital marketing efforts, </p>
                                    </div>
                                    <div className="d-flex py-3">
                                        <div>
                                            <Image src={Profile} fluid width={100} roundedCircle />
                                        </div>
                                        <div>
                                            <h5>Alan Martín</h5>
                                            <p>Meta Inc.</p>

                                        </div>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                    </Slider>
                </Container>
            </div>



        </div>
    )
}

export default Testimonial
