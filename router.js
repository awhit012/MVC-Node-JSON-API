const booksController = require('./booksController')
const magazinesController = require('./magazinesController')
const errorHandler = require('./errorHandler')

const router = (request, response) => {
	if(request.url === "/books") {
		if(request.method === "GET") {
			booksController.getAll(response)
		}
		if(request.method === "POST") {
			booksController.createBook(request, response)
		}
	} else if(request.url.slice(0, 6) === "/books") {
		let bookId = parseInt(request.url.slice(7))
		if(bookId) {
			if(request.method === "GET") {
				booksController.getOne(response, bookId)
			} else if (request.method === "DELETE") {
				booksController.deleteBook(response, bookId)
			} else if (request.method === "PUT" || request.method === "PATCH") {
				booksController.editBook(request, response, bookId)
			}
		} else {
			errorHandler.notFound(response)
		}
	} 
	if(request.url === "/magazines") {
		if(request.method === "GET") {
			magazinesController.getAll(response)
		}
		if(request.method === "POST") {
			magazinesController.createBook()
		}
	} else if(request.url.slice(0, 10) === "/magazines") {
		let magId = parseInt(request.url.slice(11))
		if(magId) {
			console.log(magId)
			if(request.method === "GET") {
				magazinesController.getOne(response, magId)
			} else if (request.method === "DELETE") {
				magazinesController.deleteBook(response, magId)
			} else if (request.method === "PUT" || request.method === "PATCH") {
				magazinesController.editBook(response, magId)
			}
		} else {
			errorHandler.notFound(response)
		}
	} 
}

module.exports = router