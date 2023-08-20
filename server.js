require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8001;
const mongoose = require('mongoose');
const path = require('path');

/* Add MongoDB here after connecting database in .env
const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection;

mongoose.connect(MONGODB_URI);
db.on('open', () => {
    console.log('Mongo is Connected');
});
*/
require('./config/database');

// Check if token and create req.user
app.use(require('./config/checkToken'));

/* Middleware */
app.use(express.json());
if (process.env.NODE_ENV !== 'development') {
	app.use(express.static('public'));
}

app.use((req, res, next) => {
	res.locals.data = {};
	next();
});


/* Controller Ends here */
//LISTENER

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));

// for react router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')));
});

app.listen(PORT, () => {
	console.log(`API Listening on port ${PORT}`);
});
