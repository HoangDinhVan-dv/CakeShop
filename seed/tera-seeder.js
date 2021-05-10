var Tera = require('../models/tera');

var mongoose = require('mongoose');
mongoose.Promise =global.Promise;
mongoose.connect('mongodb+srv://dinhvan:kQOxD6rPs6Tqinv3a@cluster0.rd0ho.mongodb.net/Eatcake?retryWrites=true&w=majority');

var teras = [
new Tera({
	imagePath: 'http://pinkperception.com/wp-content/uploads/2013/08/Easy-Tiramisu-Recipe-.jpeg',
	title: 'Chocolate E-Sweet Te-ra-mi-su',
	description: "Cake with no sugar - Healthy to eat and Beautiful for made a Gift!!",
	Type: 'Sugar - No Sugar',
	price: '4'
}),
new Tera({
	imagePath: 'https://allinone.md/files/styles/main_image/public/product/tiramisu.png',
	title: ' Cup-Cake Te-ra-mi-su',
	description: "Cake with no sugar - Healthy to eat and Beautiful for made a Gift!!",
	Type: 'Sugar - No Sugar',
	price: '3'
}),
new Tera({
	imagePath: 'https://singapore.intercontinental.com/festive/wp-content/uploads/2018/02/Tiramisu.png',
	title: 'Te-ra-mi-su Big E-Sweet',
	description: "Cake with no sugar - Healthy to eat and Beautiful for made a Gift!!",
	Type: 'Sugar - No Sugar',
	price: '10'
}),


new Tera({
	imagePath: 'https://i.pinimg.com/564x/09/b7/59/09b7599caeecedb14ba0a5209c447d40.jpg',
	title: 'Combo Triple Te-ra-mi-su cup cake',
	description: "Cake with no sugar - Healthy to eat and Beautiful for made a Gift!!",
	Type: 'Sugar - No Sugar',
	price: '5.5'
}),
new Tera({
	imagePath: 'https://i.pinimg.com/564x/14/9f/d4/149fd425cf4bae82c69a9e62ed0527f8.jpg',
	title: 'Matcha Te-ra-mi-su E-sweet',
	description: "Cake with no sugar - Healthy to eat and Beautiful for made a Gift!!",
	Type: 'Sugar - No Sugar',
	price: '2'
}),

new Tera({
	imagePath: 'https://i.pinimg.com/564x/5e/5f/fd/5e5ffdaa801982414f790a7e15489ec5.jpg',
	title: 'Cheese Blueberry Te-ra-mi-su ',
	description: "Cake with no sugar - Healthy to eat and Beautiful for made a Gift!!",
	Type: 'Sugar - No Sugar',
	price: '3'
})
];
var done = 0;
teras.map(tera => {
	tera.save((err, result) => {
		console.log("Done! " + (result?._id ?? "undefined"));
		done++;
		if(done == teras.length){
			process.exit(1);
		}
	})
})