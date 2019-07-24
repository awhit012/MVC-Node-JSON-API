class Magazine {
	constructor() {
		this.magazine = [
		  {id: 1, issue:"May", title: "You Don't Know JS", author: "Kyle Simpson"},
		  {id: 2, issue:"June", title: "Sometimes a Great Notion", author: "Ken Kesey"},
		  {id: 3, issue:"July", title: "The Teachings of Don Juan", author: "Carlos Casteneda"}
		]
	}

	all() {
		return this.magazine;
	}

	save(book) {
		this.magazine.push(book)
	}

	find(id) {
		let foundMagazine;
		this.magazine.forEach( book => {
			if(book.id === id) {
				foundMagazine = book;
			}
		})
		return foundMagazine
	}

	delete(id) {
		let foundMagazine;
		let index;
		magazine.forEach( (book, idx) => {
			if(book.id === bookId) {
				foundMagazine = book;
				index = idx;
			}
		})
		if (foundMagazine) {
			this.magazine.splice(index, 1)
			return true
		} else {
			return false
		}
	}

	edit(id, newMagazineData) {
		let foundMagazine = this.find(id)
		if(!foundMagazine) {
			return false
		}
		for(key in newMagazineData) {
			foundMagazine[key] = newMagazineData[key]
		}
		return foundMagazine;
	}
}

module.exports = new Magazine()