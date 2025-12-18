import { User } from '../models/userModel.js'

export const getUsers = async (req, res) => {
  try {
    const users = await User.find()

    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' })
    }

    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.json(user)
  } catch (error) {
    res.status(400).json({ message: 'Invalid user ID' })
  }
}

export const createUser = async (req, res) => {
  try {
    const { name, age, gender } = req.body

    const user = await User.create({
      name,
      age,
      gender
    })

    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {
  try {
    const users = await User.find()

    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' })
    }

    const { name, age, gender } = req.body

    const user = await User.create({
      name,
      age,
      gender
    })

    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(204).end()
  } catch (error) {
    res.status(400).json({ message: 'Invalid user ID' })
  }
}
