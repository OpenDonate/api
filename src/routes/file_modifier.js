const fs = require('fs');

const new_file = (fileName) => {
	try {
		fs.openSync(fileName, 'w');
        fs.appendFileSync(fileName, 'donor,merchant,charity,amount,timestamp\n');
	} catch (error) {
		console.error(error);
	}
};

const append_to_file = (fileName, message) => {
	try {
		fs.appendFileSync(fileName, message + '\n');
	} catch (error) {
		console.error(error);
	}
};

const delete_file = (fileName) => {
	try {
		fs.unlinkSync(fileName);
	} catch (error) {
		console.error(error);
	}
};

const copy_file = (src, dest) => {
	try {
		fs.copyFileSync(src, dest)
	} catch (error) {
		console.error(error);
	}
};

const count_file_lines = (fileName) => {
	let count = 0;
	try {
		let lines = fs.readFileSync(fileName, 'utf-8').split('\n').filter(Boolean);
		return lines.length;
	} catch (err) {
		return -1
	}
};

module.exports = {
	new_file,
	append_to_file,
	delete_file,
	count_file_lines,
	copy_file
};




