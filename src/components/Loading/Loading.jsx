import { Spinner } from 'react-bootstrap';

const LoadingIndicator = () => (
  <Spinner 
    animation="border" 
    variant="success" 
    style={{
      marginTop: '8px',
      width: '3rem',     
      height: '3rem',    
      color: '#28a745'   
    }} 
  />
);

export default LoadingIndicator;
