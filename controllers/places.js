const router = require('express').Router()

router.get('/new', (req, res) => {
  console.log(req.body)
  res.render('places/new')
})
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


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

