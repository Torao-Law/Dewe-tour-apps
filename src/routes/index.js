const express = require('express')
const router = express.Router()
const { addUsers, getUsers, getUser, updateUser, deleteUser } = require('../controllers/user')

router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.post('/user', addUsers)
router.patch('/user/:id', updateUser)
router.delete("/user/:id", deleteUser)

module.exports = router