import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top" data-bs-theme="dark" >
      <Container>
          <Navbar.Brand>Application Title</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
