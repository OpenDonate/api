import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Link,
  useHistory,
} from 'react-router-dom';
import crypto from 'crypto';

const LoginDonor: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');

  function handleButtonClick(): void {
    const donorId = crypto.createHash('sha256').update(email, 'utf8').digest('hex');
    history.push(`/donors/${donorId}/donations`)
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw'}}>
      <div style={{display: 'flex', flexDirection: 'row', height: '70vh', width: '50vw', borderRadius: 10, border: '1px solid #EEEEEE'}}>
        <img src='/koala.jpg' style={{height: '100%', width: '40%', objectFit: 'cover', borderBottomLeftRadius: 10, borderTopLeftRadius: 10}} />
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: 40, color: '#444444'}}>

          <div>
            <h1>Gain control of your donations</h1>
            <div style={{color: '#888888'}}>
              - View your past donations<br />
              - Choose which benificiary you prefer to donate to
            </div>
          </div>

          <div>
            <input onChange={(event) => setEmail(event.target.value)}
                   value={email}
                   type="email"
                   onKeyUp={event => {if (event.keyCode === 13) {handleButtonClick()}}}
                   style={{width: '100%', height: 50, border: 'none', backgroundColor: "#EEEEEE", borderRadius: 50, paddingLeft: 20, paddingRight: 20, marginBottom: 20, boxSizing: 'border-box', fontSize: 16, outline: 'none'}}
                   placeholder='Enter your email here...' />
            <button onClick={handleButtonClick}
                    style={{height: 50, width: '100%',border: "none", borderRadius: 50, backgroundColor: "purple", color: "#EEEEEE", fontSize: 16, outline: 'none'}}>
              <b>LOGIN</b>
            </button>
          </div>
        </div>
        {/*  <div  style ={{paddingLeft: '65px'}}>*/}
        {/*      <h1 style={{color: '#111', fontSize:'80px',justifyContent:'flex-end'}}>*/}
        {/*          Welcome!*/}
        {/*      </h1>*/}
        {/*  </div>*/}
        {/*  <div style={{paddingLeft:'65px', justifyContent: 'center'}}>*/}
        {/*      <input type="email" style={{width: '40vw', height: '25px'}} placeholder='Enter your email here...' />*/}
        {/*  </div>*/}

        {/*<div style ={{justifyContent: 'center',paddingTop: '20px', paddingLeft: '200px'}}>*/}
        {/*<button style={{height: '5vh', width: '20vw', borderRadius: '10px', backgroundColor: '#0EBFE9' }}>Login</button>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default LoginDonor;
