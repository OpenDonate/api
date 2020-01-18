const express = require('express');
const fs = require('./xxxxx');
const Git = require("nodegit");
//const guides = require('./asdf')

const app = express();
const port = 3000;

//app.use('/guide', guides)
app.use(express.json())

let merch_donate_handler = (req, res) => {
	// 1) Create a transaction of type string with values from req
	const transaction = Object.values(req.body).join(',')
	console.log('Transaction: ' + transaction)
	
	const fn = "zames.txt"
	let numLines = fs.count_file_lines(fn)
	if(numLines == -1) {
		console.log("File does not exist")
		// Create file
		fs.new_file(fn)
		//Write to file
		fs.append_to_file(fn, transaction)
	} else if(numLines == 100) {
		// Commit file
		//console.log(numLines)
	} else {
		console.log("rawr");
		// Write to file
		console.log(numLines)
		fs.append_to_file(fn, transaction)
		commit_file('./gitchain', fn)
	}
	
	res.status(200).send('OK')
}

let home_handler = (req, res) => {
	res.status(200).send('OK')
}

/**
app.post('/customer/signup',cust_signup_handler)
app.post('/customer/login',cust_login_handler)
app.get('/customer/custId/past-transactions',cust_history_handler)
app.get('/customer/custId/past-transactions/transacID',cust_transaction_handler)

app.post('/merchant/signup',cust_signup_handler)
app.post('/merchant/login',cust_login_handler)
app.post('/merchant/id/donate', merch_donate_handler)//main merchant end-point
app.get('/merchant/id/past-transactions', merch_transaction_history_handler)
app.get('/merchant/id/past-transactions/transacID', merch_transaction_handler)
**/
app.post('/merchant/id/donate', merch_donate_handler)//main merchant end-point
app.get('/', home_handler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
