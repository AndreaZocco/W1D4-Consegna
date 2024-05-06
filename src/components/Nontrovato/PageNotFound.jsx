import { Col, Row } from 'react-bootstrap';

const PageNotFound = () => (
  <Row style={{ justifyContent: 'center', alignItems: 'center', marginTop: '40px', marginBottom: '40px' }}>
    <Col style={{ maxWidth: '100%', flex: '0 0 auto', padding: '0 15px' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '72px', fontWeight: '300', margin: '0' }}>404</h1>
        <h2 style={{ fontWeight: 'bold' }}>Page Not Found</h2>
        <p style={{ fontSize: '1.25rem', fontWeight: '300' }}>Sorry, the page you are looking for does not exist.</p>
      </div>
    </Col>
  </Row>
);

export default PageNotFound;
