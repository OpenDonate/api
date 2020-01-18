import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw'}}>
      <div style={{display: 'flex', justifyContent: 'space-around', height: '80vh', width: '80vw'}}>
        <Link to='/login/donors' style={{flex: 1, margin: '20px', color: '#444444', textDecoration: 'none'}}>
          <img src="/donor.jpg" style={{height: '70%', width: '100%', objectFit: 'cover', borderRadius: '10px'}} />
          <h1 style={{fontFamily: 'Georgia, Times, "Times New Roman", serif'}}>Donors</h1>
          <p>For people like you and I who want to vote with our wallets</p>
        </Link>
        <Link to='/login/merchant' style={{flex: 1, margin: '20px', color: '#444444', textDecoration: 'none'}}>
          <img src="/merchant.jpg" style={{height: '70%', width: '100%', objectFit: 'cover', borderRadius: '10px'}} />
          <h1 style={{fontFamily: 'Georgia, Times, "Times New Roman", serif'}}>Merchants</h1>
          <p>Simple, transparent APIs for your business</p>
        </Link>
        <Link to='/login/charity' style={{flex: 1, margin: '20px', color: '#444444', textDecoration: 'none'}}>
          <img src="/charity.jpg" style={{height: '70%', width: '100%', objectFit: 'cover', borderRadius: '10px'}} />
          <h1 style={{fontFamily: 'Georgia, Times, "Times New Roman", serif'}}>Charities</h1>
          <p>For non-profits looking for donations</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
