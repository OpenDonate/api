import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams,
  useLocation,
} from 'react-router-dom';
import ContentLoader, { Facebook } from 'react-content-loader';
const numeral = require('numeral');
const axios = require('axios');
const csvParse = require('csv-parse/lib/sync');

interface ITransaction {
  charityId: string;
  sellerId?: string;
  donatedBy?: string;
  amount: number;
  createdOn: string;
}

const tempTransactions = `
charityId,sellerId,donatedBy,amount,createdOn
charityId,sellerId,5cd8955d1e2348c4fb2dd036a0dc757595260f0699dd1ea316349f904f1d00a2,amount,createdOn
WWF,Mcdonalds,5cd8955d1e2348c4fb2dd036a0dc757595260f0699dd1ea316349f904f1d00a2,1000,date
Cancer foundation,Business inc,5cd8955d1e2348c4fb2dd036a0dc757595260f0699dd1ea316349f904f1d00a2,2000,date
Really good charity,My businesss,5cd8955d1e2348c4fb2dd036a0dc757595260f0699dd1ea316349f904f1d00a2,3000,date
WWF,Fake business,5cd8955d1e2348c4fb2dd036a0dc757595260f0699dd1ea316349f904f1d00a2,4000,date
Dolphin savers,Business that wants to steal yo money,5cd8955d1e2348c4fb2dd036a0dc757595260f0699dd1ea316349f904f1d00a2,5000,date
`;

const DonorMyDonations: React.FC = () => {
  const { donorId } = useParams();
  const location = useLocation();
  const [donations, setDonations] = useState<ITransaction[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    setIsLoading(true);

    // Fetch the list of hashes of blocks that this user is involved in
    const response: any = await axios.get('https://raw.githubusercontent.com/zameschua/zameschua.github.io/master/index.html');
    const fileContents: string = response.data;
    let blockHashes: string[] = fileContents.split('\n');
    blockHashes = blockHashes.reverse(); // Latest transactions first

    const allTransactions: ITransaction[] = [];

    for (let hash of blockHashes) {
      //const response: any = await axios.get('https://raw.githubusercontent.com/Azure-Samples/AnomalyDetector/master/example-data/request-data.csv');
      //const fileContents: string = response.data;
      const fileContents = tempTransactions;
      const transactions: ITransaction[] = csvParse(fileContents, {
        columns: true,
        skip_empty_lines: true,
      });
      let myTransactions = transactions.filter((transaction: ITransaction) => transaction.donatedBy === donorId);
      myTransactions = myTransactions.reverse();
      const newAllTransactions = allTransactions.concat(myTransactions); // Latest transactions first
      setDonations(newAllTransactions);
    }

    setIsLoading(false);
  }

  return (
    <div style={{width: '100%'}}>
      <h1 style={{fontFamily: 'Georgia, Times, "Times New Roman", serif', color: '#333333'}}>My donations</h1>
      <div style={{overflowY: 'scroll', height: '80%'}}>
      {isLoading ? (
        <div style={{display: 'flex', flexDirection: 'column',}}>
          <ContentLoader style={{width: '50%'}}>
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
          </ContentLoader>
          <ContentLoader style={{width: '50%'}}>
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
          </ContentLoader>
          <ContentLoader style={{width: '50%'}}>
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
          </ContentLoader>
        </div>
      ) : null}
      {!isLoading && donations.length > 0 ? (
        donations.map((donation: ITransaction) => (
          <div style={{display: 'flex', flexDirection: 'row'}} key={Math.random()}>
            <img src='https://justcreative.com/wp-content/uploads/2016/06/wwf-logo.jpg'
                 style={{height: 150, width: 150, objectFit: 'cover', borderRadius: 10}}/>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: "space-evenly", padding: 30}}>
              <span>{donation.charityId}</span>
              <span>{numeral(donation.amount / 100).format(	'$0,0.00')}</span>
                <span>{donation.sellerId}</span>
              <span style={{color: '#888888'}}>Date: {donation.createdOn}</span>
            </div>
          </div>
        ))
      ) : (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', color: '#333333'}}>
          <img src='/empty.png' style={{height: 200, width: 200}} />
          <h1>You haven't made any donations!</h1>
          <h3 style={{color: "DDDDDD"}}>Start shopping with one of our partners today!</h3>
        </div>
      )}
      </div>
    </div>
  );
};

export default DonorMyDonations;
