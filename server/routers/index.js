const express = require('express')
const router = express.Router()

const Controller = require('../controllers/controller')

router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.post('/foods', Controller.addFood)
router.get('/foods', Controller.showFood)
router.delete('/foods/:id', Controller.delete)

module.exports = router