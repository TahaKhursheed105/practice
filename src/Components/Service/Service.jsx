import StyleService from "../Service/Service.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Home from '../../assets/Images/home.png';
import Bus from '../../assets/Images/Bus.png';
import Delivery from '../../assets/Images/Delivery.png';
import Recieved from '../../assets/Images/Recieved.png';




const Service = () => {
  return (
    <div className={StyleService.Container}>
      <Container >
        <Row>
          <Col className={`${StyleService.ColumnService} p-5`} lg={6}>

            <p className={StyleService.HeadService}>Our Services</p>
            <h3 className={StyleService.HeadingService}>WE OFFER THE FOLLOWING SERVICES AT REASONABLE PRICES</h3>

            <p className={StyleService.ParagraphService}>Suspendisse sed nisi lacus sed viverra tellus in hac. Quis vel eros donec ac odio tempor orci dapibus ultrices. Morbi tristique senectus et netus. Elementum facilisis leo vel fringilla.</p>
            <p className={StyleService.ParagraphLine}>Trust score 5.0 (Based on 2,100 reviews)</p>

            <Button className={`${StyleService.btnServices} py-3`} variant="secondary">See All Services</Button>

          </Col>
          <Col lg={6}>
            <Row className=" d-flex align-items-center justify-content-center py-5">
              <Col lg={6} className="text-center h-100 pb-5 border-end gy-5">
                <Image src={Home} fluid width={100} className="p-3"/>
                <h5 className="fw-bold">House Moving
                  <span className="fw-normal d-block"> Services </span>
                </h5>
                <p className="text-white">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <a className="text-dark text-decoration-none" href="">Read More ...........</a>
              </Col>
              <Col lg={6} className="text-center h-100 py-4">
                <Image src={Bus} fluid width={100} className="p-2" />
                <h5 className="fw-bold ">Furniture Moving
                  <span className="fw-normal d-block"> Services </span>
                </h5>
                <p className="text-white">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <a className="text-dark text-decoration-none" href="">Read More ...........</a>
              </Col>
              <Col lg={6} className="text-center h-100 border-end gy-5  pt-1">
                <Image src={Delivery} fluid width={100} />
                <h5 className="fw-bold">Office Moving 
                  <span className="fw-normal d-block"> Services </span>
                </h5>
                <p className="text-white">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <a className="text-dark text-decoration-none" href="">Read More ...........</a>
              </Col>
              <Col lg={6} className="text-center h-100 pt-5 ">
                <Image src={Recieved} fluid width={100} />
                <h5 className="fw-bold">General Moving
                  <span className="fw-normal d-block"> Services </span>
                </h5>
                <p className="text-white">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <a className="text-dark text-decoration-none" href="">Read More ...........</a>
              </Col>
              

            </Row>

          </Col>


        </Row>

        


      </Container>
    </div>
  )
}

export default Service
