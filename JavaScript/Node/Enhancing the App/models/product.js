const fs = require('fs');
const { get } = require('https');
const path = require('path');

const p = path.join(
	path.dirname(require.main.filename),
	'data',
	'products.json'
);

const getProductsFromFile = (cb) => {
	fs.readFile(p, async (err, fileContent) => {
		if (err) {
			await cb([]);
		} else {
			await cb(JSON.parse(fileContent));
		};
	});
};

module.exports = class Product {
	constructor(title, imageUrl, price, description) {
		this.title = title;
		this.imageUrl = imageUrl;
		this.price = price;
		this.description = description;
	};

	save() {
		getProductsFromFile((products) => {
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), err => {
				console.log(err);
			});
		});
	};

	static fetchAll(cb) {
		getProductsFromFile(cb);
	};
};