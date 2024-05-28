import styles from "../PreNav/Prenav.module.css";
import facbook from "../../assets/Images/Facebook.png";
import Instagram from "../../assets/Images/instagram.svg";
import Call from "../../assets/Images/Call.png";
import Email from "../../assets/Images/Email.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const prenav = () => {
  return (
    <div className={styles.bg_colr}>
      <Container >
        <Row className='d-flex justify-content-between text-center text-lg-start text-md-start'>
          <Col lg={8} md={6} xs={12} className="d-flex flex-column flex-lg-row flex-md-row">
            <div>
              <img src={Call} alt="" />
              +12 345 6789 0
            </div>
            <div className="ps-2">
              <img src={Email} alt="" />
              <span>
                support@jnreliteremovalist.com
              </span>
            </div>
          </Col>
          {/* <Col lg={3}>


        </Col> */}
          <Col lg={2} md={6} xs={12}>
            <div>
              <span><img src={Instagram} alt="" /></span>
              <span><img src={facbook} alt="" /></span>
            </div>

          </Col>

          <hr />
        </Row>
      </Container>
    </div>
  )
}

export default prenav
