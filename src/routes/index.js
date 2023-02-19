const express = require('express')
const router = express.Router()
const { getTodos, getTodo, addTodo, updateTodo } = require('../controllers')

router.get('/todos', getTodos)
router.get('/todo/:id', getTodo)
router.post('/todo', addTodo)
router.patch('/todo/:id', updateTodo)

module.exports = router