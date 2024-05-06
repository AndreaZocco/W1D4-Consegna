import { Container } from 'react-bootstrap';

const MyFooter = () => (
  <footer className="mt-2 py-3">
    <Container className="text-center text-white">
      <span>
        <strong>EPICODE</strong> - &copy; {new Date().getFullYear()}
      </span>
    </Container>
  </footer>
);

export default MyFooter;
