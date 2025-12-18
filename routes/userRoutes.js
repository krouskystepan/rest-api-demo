import express from 'express'
import * as userController from '../controllers/userController.js'

export const router = express.Router()

// GET
// GET http://localhost:3000/api/users
router.get('/', userController.getUsers)

// GET by ID
// GET http://localhost:3000/api/users/1234
router.get('/:id', userController.getUserById)

// POST
// POST http://localhost:3000/api/users
// Body (JSON):
// {
//   "name": "Petr",
//   "age": 23,
//   "gender": "male"
// }
router.post('/', userController.createUser)

// DELETE
// DELETE http://localhost:3000/api/users/1234
router.delete('/:id', userController.deleteUser)
