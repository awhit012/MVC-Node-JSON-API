const Book = require('./book')
const errorHandler = require('./errorHandler')

const BooksController = () => {
	return {
		getAll: (response) => {
			let books = Book.all()
			response.writeHead(200,{'Content-Type':'application/json'});
			response.write(JSON.stringify(books));
			response.end();
		},

		createBook: (request, response) => {
			let body = [];
			request.on('data', (chunk) => {
			  body.push(chunk);
			}).on('end', () => {
			  let book = Buffer.concat(body).toString();
			  try {
			  	let parsedBook = JSON.parse(book)
			  	Book.save(parsedBook)
			  	response.writeHead(200,{'Content-Type':'application/json'});
				response.write(JSON.stringify(book));
				response.end();
			  }
			  catch (e) {
			  	console.log(e)
			  	errorHandler.serverError(response)
			  }
			});
		},

		getOne: (response, bookId) => {
			let foundBook = Book.find(bookId)
			if (foundBook) {
				response.writeHead(200,{'Content-Type':'application/json'});
				response.write(JSON.stringify(foundBook));
				response.end();
			} else {
				errorHandler.notFound(response)
			}
		},

		deleteBook: (response, bookId) => {
			if(Book.delete(bookId)){
				response.writeHead(200,{'Content-Type':'application/json'});
				response.end();
			} else {
				errorHandler.notFound(response)
			}
		},

		editBook(request, response, bookId) {
			let body = [];
			request.on('data', (chunk) => {
			  body.push(chunk);
			}).on('end', () => {
			  let newBookData = Buffer.concat(body).toString();
			});
			let foundBook = Book.edit(bookId, newBookData)
			if(foundBook){
				response.writeHead(200,{'Content-Type':'application/json'});
				response.write(JSON.stringify(foundBook));
				response.end();
			} else {
				errorHandler.notFound(response)
			}
		}
	}
}

module.exports = BooksController()