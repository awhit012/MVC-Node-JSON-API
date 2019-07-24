class Book {
	constructor() {
		this.books = [
		  {id: 1, title: "You Don't Know JS", author: "Kyle Simpson"},
		  {id: 2, title: "Sometimes a Great Notion", author: "Ken Kesey"},
		  {id: 3, title: "The Teachings of Don Juan", author: "Carlos Casteneda"}
		]
	}

	all() {
		return this.books;
	}

	save(book) {
		this.books.push(book)
	}

	find(id) {
		let foundBook;
		this.books.forEach( book => {
			if(book.id === id) {
				foundBook = book;
			}
		})
		return foundBook
	}

	delete(id) {
		let foundBook;
		let index;
		books.forEach( (book, idx) => {
			if(book.id === bookId) {
				foundBook = book;
				index = idx;
			}
		})
		if (foundBook) {
			this.books.splice(index, 1)
			return true
		} else {
			return false
		}
	}

	edit(id, newBookData) {
		let foundBook = this.find(id)
		if(!foundBook) {
			return false
		}
		for(key in newBookData) {
			foundBook[key] = newBookData[key]
		}
		return foundBook;
	}
}

module.exports = new Book()