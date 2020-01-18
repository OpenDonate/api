var express = require('express');
var router = express.Router();
const fs = require('./file_modifier');
const Git = require("nodegit");

// router.use(express.json())

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
		// Write to file
		console.log(numLines)
		fs.append_to_file(fn, transaction)
	}

	res.status(200).send('OK')
}

router.post('/merchant/id/donate', merch_donate_handler)

/* GET home page. */
router.get('/healthcheck', function(req, res, next) {
  res.send('Yo');
});

module.exports = router;
