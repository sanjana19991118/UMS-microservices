const express = require('express')
const router = express.Router()
const usersCltr = require('../app/controllers/usersCltr')
const detailsCltr = require('../app/controllers/detailsCltr')

router.get('/api/users',usersCltr.list)
router.post('/api/users',usersCltr.create)
// router.get('/api/users/:id',usersCltr.show)
// router.put('/api/users/:id',usersCltr.update)
// router.delete('/api/users',usersCltr.destroy)

router.get('/api/details',detailsCltr.list)
router.post('/api/details',detailsCltr.create)
// router.get('/api/details/:id',detailsCltr.show)
// router.put('/api/details/:id',detailsCltr.update)
// router.delete('/api/details',detailsCltr.destroy)

module.exports = router


