var express = require('express');
var router = express.Router();
const fs = require('./file_modifier');
const gitchain = require('./git_wrapper');

let merch_donate_handler = async (req, res) => {
	// 1) Create a transaction of type string with values from req
	const transaction = Object.values(req.body).join(',')
	console.log('Transaction: ' + transaction)

	const fileName = "temp_block.txt"
	let numLines = fs.count_file_lines(fileName)
	if(numLines == -1) {
		console.log("File does not exist")
		fs.new_file(fileName)
		fs.append_to_file(fileName, transaction)
	} else if(numLines == 10) {
		// Commit file
		await gitchain.push_block(fileName);
		fs.delete_file(fileName);
	} else if(numLines == 9) {
		fs.append_to_file(fileName, transaction)
		await gitchain.push_block(fileName);
		fs.delete_file(fileName);
	} else {
		fs.append_to_file(fileName, transaction)
	}

	res.status(200).send('OK\n')
}

router.use(express.json())

router.post('/donate', merch_donate_handler)

/* GET home page. */
router.get('/healthcheck', function(req, res, next) {
  res.send('Yo');
});

module.exports = router;
