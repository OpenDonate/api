const fs = require('fs');

const new_file = (fileName) => fs.open(fileName, 'w', 
	(err, file) => {
	if (err) throw err;
});


const append_to_file = (fileName, message) => fs.appendFile(fileName, message + '\n',
	(err, file) => {
	if (err) throw err;
});

const delete_file = (fileName) => fs.unlink(fileName,
	(err, file) => {
	if (err) throw err;
});

const count_file_lines = (fileName) => {
	let count = 0
	try {
		let lines = fs.readFileSync(fileName, 'utf-8').split('\n').filter(Boolean);
		return lines.length;
	} catch (err) {
		return -1
	}
}

module.exports = {
	new_file,
	append_to_file,
	delete_file,
	count_file_lines,
}




