const Magazine = require('./magazine')

class MagazinesController {
	getAll(response) {
		let magazines = Magazine.all()
		response.writeHead(200,{'Content-Type':'application/json'});
		response.write(JSON.stringify(magazines));
		response.end();
	}

	createMagazine(response) {
		let body = [];
		request.on('data', (chunk) => {
		  body.push(chunk);
		}).on('end', () => {
		  let magazine = Buffer.concat(body).toString();
		  Magazine.save(magazine)
		  response.writeHead(200,{'Content-Type':'application/json'});
			response.write(JSON.stringify(magazines));
			response.end();
		});
	}

	getOne(response, magazineId) {
		let foundMagazine = Magazine.find(magazineId)
		if (foundMagazine) {
			response.writeHead(200,{'Content-Type':'application/json'});
			response.write(JSON.stringify(foundMagazine));
			response.end();
		} else {
			response.writeHead(404,{'Content-Type':'application/json'});
			response.write("Not found");
			response.end();
		}
	}

	deleteMagazine(response, magazineId) {
		if(Magazine.delete(magazineId)){
			response.writeHead(200,{'Content-Type':'application/json'});
			response.end();
		} else {
			response.writeHead(404,{'Content-Type':'application/json'});
			response.write("Not found");
			response.end();
		}
	}

	editMagazine(response, magazineId) {
		let body = [];
		request.on('data', (chunk) => {
		  body.push(chunk);
		}).on('end', () => {
		  let newMagazineData = Buffer.concat(body).toString();
		});
		let foundMagazine = Magazine.edit(magazineId, newMagazineData)
		if(foundMagazine){
			response.writeHead(200,{'Content-Type':'application/json'});
			response.write(JSON.stringify(foundMagazine));
			response.end();
		} else {
			response.writeHead(404,{'Content-Type':'application/json'});
			response.write("Not found");
			response.end();
		}
	}
}

module.exports = new MagazinesController()