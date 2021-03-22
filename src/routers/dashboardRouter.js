const router = require('express').Router()


// Import Controller
const { dashboard } = require('../controllers/dashboardController')

router.get('/', dashboard)

module.exports = router