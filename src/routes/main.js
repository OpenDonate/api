var express = require('express');
var router = express.Router();
const fs = require('./file_modifier');
const gitchain = require('./git_wrapper');
const appRoot = require('app-root-path');
const crypto = require('crypto');

let merch_donate_handler = async (req, res) => {
	// 1) Create a transaction of type string with values from req
	const transactionJson = req.body;
    const donor = transactionJson['donor'];
    const donorHash = crypto.createHash('sha256').update(donor, 'utf8').digest('hex');
    const merchant = transactionJson['merchant'];
    const charity = transactionJson['charity'];
    const amount = transactionJson['amount'];
	const timestamp = new Date().toISOString();

	const transactionString = `${donorHash},${merchant},${charity},${amount},${timestamp}`;

	console.log('Transaction: ' + transactionString);

	const fileName = "temp_block.txt";
	let numLines = fs.count_file_lines(fileName);
	if(numLines === -1) {
		console.log("File does not exist");
		fs.new_file(fileName);
		fs.append_to_file(fileName, transactionString)
	} else if(numLines === 5) {
		// Commit file
		await gitchain.push_block(fileName);
		fs.delete_file(appRoot + '/' + fileName);
	} else if(numLines === 4) {
		fs.append_to_file(fileName, transactionString)
		await gitchain.push_block(fileName);
		fs.delete_file(appRoot + '/' + fileName);
	} else {
		fs.append_to_file(fileName, transactionString)
	}

	res.status(200).send('OK\n')
};

router.use(express.json())

router.post('/donate', merch_donate_handler)

/* GET home page. */
router.get('/healthcheck', function(req, res, next) {
  res.send('Yo');
});

module.exports = router;
