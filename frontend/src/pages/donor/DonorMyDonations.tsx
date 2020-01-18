import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams,
  useLocation,
} from 'react-router-dom';
const axios = require('axios');
const csvParse = require('csv-parse/lib/sync')

interface ITransaction {
  charityId: string;
  sellerId?: string;
  donatedBy?: string;
  amount: number;
  createdOn: string;
}

const tempTransactions = `charityId,sellerId,donatedBy,amount,createdOn
charityId,sellerId,donatedBy,amount,createdOn
WWF,Mcdonalds,1234,1000,date
Cancer foundation,Business inc,1234,2000,date
Really good charity,My businesss,1234,3000,date
WWF,Fake business,1234,4000,date
Dolphin savers,Business that wants to steal yo money,1234,5000,date
`;

const DonorMyDonations: React.FC = () => {
  const { donorId } = useParams();
  const location = useLocation();
  const [donations, setDonations] = useState<ITransaction[]>([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
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
  }

  return (
    <div>
      <h1>My donations</h1>
      {donations.map((donation: ITransaction) => (
        <div key={Math.random()}>
          Amount: {donation.amount}
          Charity: {donation.charityId}
          Seller: {donation.sellerId}
          Date: {donation.createdOn}
        </div>

      ))}
    </div>
  );
};

export default DonorMyDonations;
