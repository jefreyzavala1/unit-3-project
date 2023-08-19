require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item')

async function seedData() {
	await Category.deleteMany({});
	const categories = await Category.create([
		{ name: 'Jordans', sortOrder: 10 },
		{ name: 'Nike', sortOrder: 20 },
		{ name: 'Adidas', sortOrder: 30 },
		{ name: 'Puma', sortOrder: 40 },
		{ name: 'Vans', sortOrder: 50 },
		{ name: 'Converse', sortOrder: 60 },
		{name:'New Balance',sortOrder:70}
	]);
	await Item.deleteMany({});
	const items = await Item.create([
		{ name: 'Air Jordan 1 High OG', image: 'https://i.imgur.com/5NDoEle.jpg', category: categories[0], price: 190,size:9},
		{ name: 'Air Jordan 11 Retro Concord',image: 'https://i.imgur.com/xJJi4jV.jpg',category: categories[0],price: 220,size:9},
		{ name: 'Air Jordan 5 Retro Oreo', image: 'https://i.imgur.com/RUrSz3y.jpg', category: categories[0], price: 190,size:9},
		{ name: 'Nike Air Force 1 Low', image: 'https://i.imgur.com/MkUXoUt.jpg', category: categories[1], price: 110 ,size:9},
		{ name: 'Nike Air Max 90',image: 'https://i.imgur.com/CzASUlP.jpg',category: categories[1],price: 120,size:9},
		{ name: 'Nike Air Huarache',image: 'https://i.imgur.com/2HnecQj.jpg',category: categories[1],price: 125,size:9},
		{ name: 'Adidas Superstar', image: 'https://i.imgur.com/ZAJ4AFD.png', category: categories[2], price: 100,size:9 },
		{ name: 'Adidas Ultra Boost', image: 'https://i.imgur.com/aWGK1ND.jpg', category: categories[2], price: 150,size:9},
		{ name: 'Adidas NDM R1', image: 'https://i.imgur.com/7ZM0yHV.jpg', category: categories[2], price: 120,size:9 },
		{ name: 'Puma  Suede Classic', image: 'https://i.imgur.com/oXYxy2N.jpg', category: categories[3], price: 70,size:9},
		{ name: 'Puma Roma', image: 'https://i.imgur.com/01ToWY6.jpg', category: categories[3], price: 70,size:9 },
		{ name: 'Puma Clyde', image: 'https://i.imgur.com/AOmhZXL.jpg', category: categories[3], price: 75,size:9},
		{ name: 'Vans Old Skool', image: 'https://i.imgur.com/WEIK7Sk.jpg', category: categories[4], price: 75,size:9 },
		{ name: 'Vans Era', image: 'https://i.imgur.com/1K554Kh.jpg', category: categories[4], price: 60,size:9},
		{ name: 'Vans Authentic', image: 'https://i.imgur.com/6acJHxO.jpg', category: categories[4], price: 60,size:9},
		{ name: 'Converse Chuck Taylor', image: 'https://i.imgur.com/pTp0gfo.jpg', category: categories[5], price: 60,size:9 },
		{ name: 'Converse One Star', image: 'https://i.imgur.com/WLT9T9m.jpg', category: categories[5], price: 70,size:9 },
		{ name: 'New Balance 574', image: 'https://i.imgur.com/FEa6XKj.png', category: categories[6], price: 70,size:9},
		{ name: 'New Balance 997', image: 'https://i.imgur.com/3tBIcMg.jpg', category: categories[6], price: 80,size:9},
		
	]);

	console.log(items);

	process.exit();
	return items
};
seedData().then((items)=>console.log(items))

// const query = new URLSearchParams({
// 	query: 'string',
// 	pageNumber: '1',
// 	pageSize: '1'
//   }).toString();
  
//   const resp = await fetch(
// 	`https://api.stockx.com/v2/catalog/search?${query}`,
// 	{
// 	  method: 'GET',
// 	  headers: {
// 		'x-api-key': 'YOUR_API_KEY_HERE',
// 		Authorization: 'Bearer <YOUR_JWT_HERE>'
// 	  }
// 	}
//   );
  
//   const data = await resp.text();
//   console.log(data);