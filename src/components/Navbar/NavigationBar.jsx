import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';

const NavigationBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ marginBottom: '16px' }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: '#ffffff' }}>
          <FaBook style={{ marginRight: '5px' }} /> EpiBooks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" style={{ maxHeight: '100px', margin: '8px 0' }}>
            <Nav.Link as={Link} to="/" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>About</Nav.Link>
            <Nav.Link as={Link} to="/browse" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>Browse</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search for books..."
              className="mr-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ marginRight: '8px' }}
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
