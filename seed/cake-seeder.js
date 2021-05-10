var Cake = require('../models/cake');

var mongoose = require('mongoose');
mongoose.Promise =global.Promise;
mongoose.connect('mongodb+srv://dinhvan:kQOxD6rPs6Tqinv3a@cluster0.rd0ho.mongodb.net/Eatcake?retryWrites=true&w=majority');

var cakes = [
new Cake({
	imagePath: 'https://assets.bonappetit.com/photos/5cdae0a56fdbe67b560904a7/1:1/w_2560%2Cc_limit/yonuts-1.jpg',
	title: 'Donut red Cake',
	description: "Cake with no sugar - Healthy to eat and Beautiful for made a Gift!!",
	Type: 'Sugar - No Sugar',
	price: '3'
}),
new Cake({
	imagePath: 'https://images-na.ssl-images-amazon.com/images/I/713Y610pw%2BL._AC_SL1500_.jpg',
	title: ' Donut Huge Cake',
	description: "Cake with no sugar - Healthy to eat and Beautiful for made a Gift!!",
	Type: 'Sugar - No Sugar',
	price: '10'
}),
new Cake({
	imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61JthrM4uiL._AC_SL1500_.jpg',
	title: 'Cup Cake',
	description: "Cake with no sugar - Healthy to eat and Beautiful for made a Gift!!",
	Type: 'Sugar - No Sugar',
	price: '2'
}),


new Cake({
	imagePath: 'https://img.taste.com.au/sD2HCuOi/w720-h480-cfill-q80/taste/2016/11/donut-cake-70028-1.jpeg',
	title: 'Donut Big Size',
	description: "Cake with no sugar - Healthy to eat and Beautiful for made a Gift!!",
	Type: 'Sugar - No Sugar',
	price: '5'
}),
new Cake({
	imagePath: 'https://thecakeblog.com/wp-content/uploads/2012/10/apple_donuts1.jpg',
	title: 'Donut Double Sugar',
	description: "Cake with no sugar - Healthy to eat and Beautiful for made a Gift!!",
	Type: 'Sugar - No Sugar',
	price: '3'
})
];

var done = 0;
cakes.map(cake => {
	cake.save((err, result) => {
		console.log("Done! " + (result?._id ?? "undefined"));
		done++;
		if(done == cakes.length){
			process.exit(1);
		}
	})
})