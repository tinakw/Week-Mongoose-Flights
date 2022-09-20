const express = require('express');
const Flight = require('../models/Flight');
const router = express.Router();

// INDUCES -- if you put your routes in this order, it will never fail you!

// Index -- View of ALL ITEMS

router.get('/', (req, res) => { // Route is technically /flights because in server.js it is put as the base route for this controller
  // in here goes a Flight.find({}) to find all of your flights and then a res.render to show the view associated with them! (Index.jsx view)
  Flight.find({}, (error, allFlights) => {
    res.render('flights/Index', {
      flights: allFlights
    })
  })
})

// New -- Form to CREATE a new Item

router.get('/new', (req, res) => { // technically /flights/new
  // In here goes a res.render to show the 'create a new flight' form (New.jsx view)
  // const newFlight = new Flight();
  // const dt = newFlight.departs;
  // console.log(dt)
  // const departsDate = dt.toISOString().slice(0,16);
  res.render('flights/New');
})


// Delete -- action to DELETE an item

// Update -- action to UPDATE an item

// Create -- action to CREATE a new item

//router.post('/flights', (req, res) => { // technically /flights
  // In here goes your Flight.create(), passing your req.body to it, and res.redirect-ing to your index page.
//});

// Edit -- Form to UPDATE an item

// Show -- View of ONE ITEM

router.post('/', (req, res)=>{
  Flight.create(req.body, (error, createdFlight) => {
    res.redirect('/flights')
  });
});

module.exports = router; 