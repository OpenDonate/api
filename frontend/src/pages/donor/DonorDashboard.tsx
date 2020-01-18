import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  useParams
} from 'react-router-dom';

const DonorDashboard: React.FC = () => {
  let { donorId } = useParams();


  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw'}}>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '50vh', width: '50vw'}}>
        <p>Enter your email {donorId}</p>
        <input type="email" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default DonorDashboard;
