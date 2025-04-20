import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../CSS/Navbar.css'
import logo1 from '../images/logo1.jpg'
function BasicExample() {
  return (
    <Navbar expand="lg" className="fixed-top shadow-lg p-1 mb-5 bg-body rounded bg-transparent">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo1}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Me</Nav.Link>
            <Nav.Link href="#home">Skills</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#home">Public Message Board</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>

         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;