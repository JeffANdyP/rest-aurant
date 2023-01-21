const router = require('express').Router()


router.get('/', (req,res) =>{  
    let places = [{
        name: 'Mix Pizza',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/pizza_1280.jpg'
      }, {
        name: 'Salad',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'salad, Fitness',
        pic: '/images/Fresh-fruits.jpg'
      }]
          
    res.render('places/index', {places})
} )


module.exports = router

