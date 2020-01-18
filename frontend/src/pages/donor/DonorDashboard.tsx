import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  useParams
} from 'react-router-dom';

const DonorDashboard: React.FC = () => {
  let { donorId } = useParams();


  return (
    <div style={{display: 'flex', height: '100vh', width: '100vw'}}>
      {/*// Side Nav*/}
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 300}}>
        <Link to="/donors/:id/donations" style={{padding: 20, color: '#444444', textDecoration: 'none', fontWeight: 'bold', fontSize: 20,}}>My Donations</Link>
        <Link to="/donors/:id/settings" style={{padding: 20, color: '#444444', textDecoration: 'none', fontWeight: 'bold', fontSize: 20,}}>Settings</Link>
      </div>
      <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <p>Your recent donations{donorId}</p>
          <input type="email" />
          <button>Login</button>
      </div>
    </div>
  );
};

export default DonorDashboard;
