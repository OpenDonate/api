import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

const LoginDonor: React.FC = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw'}}>
      <div style={{display: 'flex', flexDirection: 'column', height: '50vh', width: '50vw', backgroundColor: '#DCDCDC',borderRadius: '10px'}}>
          <div  style ={{paddingLeft: '65px'}}>
              <h1 style={{color: '#111', fontSize:'80px',justifyContent:'flex-end'}}>
                  Welcome!
              </h1>
          </div>
          <div style={{paddingLeft:'65px', justifyContent: 'center'}}>
              <input type="email" style={{width: '40vw', height: '25px'}} placeholder='Enter your email here...' />
          </div>

        <div style ={{justifyContent: 'center',paddingTop: '20px', paddingLeft: '200px'}}>
        <button style={{height: '5vh', width: '20vw', borderRadius: '10px', backgroundColor: '#0EBFE9' }}>Login</button>
        </div>
        </div>
    </div>
  );
}

export default LoginDonor;
