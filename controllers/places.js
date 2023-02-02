const router = require('express').Router()
const places= require('../models/places.js')
// const express = require('express')
// const app = express()

// get the new places index.jsx
router.get('/new', (req, res) => {
  res.render('places/new')
})

// get the show view (show.jsx)
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN (id)) {
    res.render('error404')
  }
  else if (!places[id] ) {
    res.render('error404')
  }
  else{
    res.render('places/show', { place: places[id], id })
  }
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})


// POST A NEW PLACE
router.post('/', (req, res) => {
  console.log(!req.body.pic.body)
  if (!req.body.pic) {
    // defaultimage if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.city) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// router.get('/', (req,res) =>{  
//     let places = [{
//         name: 'Mix Pizza',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'Thai, Pan-Asian',
//         pic: '/images/pizza_1280.jpg'
//       }, {
//         name: 'Salad',
//         city: 'Phoenix',
//         state: 'AZ',
//         cuisines: 'salad, Fitness',
//         pic: '/images/Fresh-fruits.jpg'
//       }]
          
//     res.render('places/index', {places})
// } )


module.exports=router