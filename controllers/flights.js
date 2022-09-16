const express = require('express');
const router = express.Router();
const Flight = require('./models/Flight');

// INDUCES -- if you put your routes in this order, it will never fail you!

// Index -- View of ALL ITEMS

router.get('/', (req, res) => { // Route is technically /flights because in server.js it is put as the base route for this controller
  // in here goes a Flight.find({}) to find all of your flights and then a res.render to show the view associated with them! (Index.jsx view)
})

// New -- Form to CREATE a new Item

router.get('/new', (req, res) => { // technically /flights/new
  // In here goes a res.render to show the 'create a new flight' form (New.jsx view)
})

// Delete -- action to DELETE an item

// Update -- action to UPDATE an item

// Create -- action to CREATE a new item

router.post('/', (req, res) => { // technically /flights
  // In here goes your Flight.create(), passing your req.body to it, and res.redirect-ing to your index page.
})

// Edit -- Form to UPDATE an item

// Show -- View of ONE ITEM