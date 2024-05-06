import { Alert } from 'react-bootstrap';

const GreetingBanner = () => (
  <Alert variant="info" className="text-center p-5 mb-0" style={{ background: '#f0f0f0', border: 'none', borderRadius: '15px' }}>
    <h1 style={{ color: '#007bff', fontWeight: 'bold', textShadow: '2px 2px 5px #ccc' }}>Welcome to EpicBooks</h1>
    <p style={{ color: '#333', fontSize: '1.2em', marginTop: '15px' }}>Discover your next great read!</p>
  </Alert>
);

export default GreetingBanner;
