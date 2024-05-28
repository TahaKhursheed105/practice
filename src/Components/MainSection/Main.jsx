import MainStyle from "../MainSection/Main.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ImageBusiness from '../../assets/Images/Bussiness.png';
import Headset from '../../assets/Images/headset.png';
import Box from '../../assets/Images/box.png';
import Paking from '../../assets/Images/Paking.png';
import Rectangle from '../../assets/Images/Rectangle.png';
import RectangleSmall from '../../assets/Images/Rectangle2.png';




const Main = () => {
    return (
        <div className={`${MainStyle.MainSection} `}>
            <Container>

                <Row>
                    <Col sm  className="me-lg-5 mb-5">
                        <div>
                            <div className="position-relative">
                                <Image src={ImageBusiness} fluid className={MainStyle.girls} />
                                <div className={`${MainStyle.ImageBussiness} position-absolute`}>
                                    <Image className={MainStyle.BGImage} src={Rectangle} />
                                </div>
                            </div>
                            <div className="position-relative">
                                <div className={`${MainStyle.RectangleSmallD} position-absolute`}>
                                    <Image src={RectangleSmall} />
                                </div>
                                <div>
                                    <p className={`${MainStyle.ImgPara}`}>More than 350 Moving Projects were completed.</p>
                                </div>
                                <div className={`${MainStyle.RectangleSmallU} position-absolute`}>
                                    <Image src={RectangleSmall} />
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col sm className="my-5">
                        <p className={MainStyle.HeadingPara}>
                            Our Introduction
                        </p>
                        <h3 className={MainStyle.Headingh3}>
                            We Are Here
                            To Manage Quality <br />
                            <span style={{ color: '#BD8C20' }}>
                                Services of Moving
                            </span>
                        </h3>
                        <p className={MainStyle.ParaMain}>
                            The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design. <br />  <br />
                            Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim mi quis neque interdum, quis porta sem finibus.
                        </p>
                        <h3 className={MainStyle.Headingh3}>
                            How it Works
                            <span style={{ color: '#BD8C20' }}>
                                ?
                            </span>
                        </h3>
                        <p className={MainStyle.ParaMain}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et just
                        </p>
                        <div>
                            <Row className="py-5">
                                <Col sm>
                                    <Image src={Headset} width={75} fluid />
                                    <div>
                                        <h3 className={MainStyle.FontSizing}>
                                            <span style={{ color: '#BD8C20' }} className="pe-2"> 01</span>

                                            Contact Office

                                        </h3>
                                        <p className={MainStyle.SizePara}>
                                            Lorem ipsum dolor sit amet. Ut rerum autem qui maxime consequatur qui inventore illo. Ab dolor fugiat
                                        </p>
                                    </div>

                                </Col>
                                <Col sm>
                                    <Image src={Box} width={75} fluid />
                                    <div>
                                        <h3 className={MainStyle.FontSizing}>
                                            <span style={{ color: '#BD8C20' }} className="pe-2"> 02</span>

                                            Packing Day

                                        </h3>
                                        <p className={MainStyle.SizePara}>
                                            Lorem ipsum dolor sit amet. Ut rerum autem qui maxime consequatur qui inventore illo. Ab dolor fugiat
                                        </p>
                                    </div>

                                </Col>
                                <Col sm>
                                    <Image src={Paking} width={100} fluid />
                                    <div>
                                        <h3 className={MainStyle.FontSizing}>
                                            <span style={{ color: '#BD8C20' }} className="pe-2"> 03</span>

                                            Packing Day

                                        </h3>
                                        <p className={MainStyle.SizePara}>
                                            Lorem ipsum dolor sit amet. Ut rerum autem qui maxime consequatur qui inventore illo. Ab dolor fugiat
                                        </p>
                                    </div>

                                </Col>

                            </Row>
                        </div>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main
