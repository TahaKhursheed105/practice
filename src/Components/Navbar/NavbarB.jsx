import Logo from '../../assets/Images/logo-1.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavbarStyle from "../Navbar/Navbar.module.css";
import { Link } from 'react-router-dom'

const NavbarB = () => {
  return (
    <Navbar expand="lg" className={NavbarStyle.bg_colr}>
      <Container>
        <Navbar.Brand href="#home"><Image src={Logo} width={180} fluid /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${NavbarStyle.navlink} ms-auto me-auto `}>
            <Nav.Link href="/" className='mx-3'><Link to='/' className='text-decoration-none text-dark'>Home</Link></Nav.Link>
            <Nav.Link href="/about" className='mx-3'><Link to='/about' className='text-decoration-none text-dark'>About</Link></Nav.Link>
            <Nav.Link href="/service" className='mx-3'><Link to='/service' className='text-decoration-none text-dark'>Services</Link></Nav.Link>
            <Nav.Link href="/contact-us" className='mx-3'> <Link to='/contact-us' className='text-decoration-none text-dark'>Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarB;
