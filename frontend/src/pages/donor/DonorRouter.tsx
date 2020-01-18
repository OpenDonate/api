import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams,
  useLocation,
} from 'react-router-dom';
import DonorMyDonations from "./DonorMyDonations";

const DonorRouter: React.FC = () => {
  let { donorId } = useParams();
  let location = useLocation();

  return (
    <div style={{display: 'flex', height: '100vh', width: '100vw'}}>
      {/*// Side Nav*/}
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 300, paddingLeft: 100}}>
        <Link to={`/donors/${donorId}/donations`}
              style={{padding: 20, color: location.pathname.split('/')[3] === 'donations' ? '#444444' : '#999999', textDecoration: 'none', fontWeight: 'bold', fontSize: 20}}>
          My Donations
        </Link>
        <Link to={`/donors/${donorId}/settings`}
              style={{padding: 20, color: location.pathname.split('/')[3] === 'settings' ? '#444444' : '#999999', textDecoration: 'none', fontWeight: 'bold', fontSize: 20,}}>
          Settings
        </Link>
      </div>
      <Switch>
        <Route path={"/donors/:donorId/donations"}>
          <DonorMyDonations />
        </Route>
        <Route path={"/donors/:donorId/settings"}>
          SETTINGS
        </Route>
      </Switch>
    </div>
  );
};

export default DonorRouter;
