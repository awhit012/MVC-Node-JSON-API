const notFound = (response) => {
	response.writeHead(404,{'Content-Type':'application/json'});
	response.write("Not found");
	response.end();
}

const serverError = (response) => {
	response.writeHead(500);
	response.end();
}

module.exports = {
	notFound: notFound,
	serverError: serverError
}

