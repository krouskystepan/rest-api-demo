import express from 'express'
import mongoose from 'mongoose'
import { router as userRoutes } from './routes/userRoutes.js'

const app = express()
app.use(express.json())

mongoose
  .connect('mongodb://localhost:27017/dev')
  .then(() => console.log('\x1b[32m%s\x1b[0m', '✅ MongoDB connected'))
  .catch((err) =>
    console.error('\x1b[31m%s\x1b[0m', '❌ MongoDB connection error')
  )

app.get('/', (req, res) => {
  res.send('Welcome to REST API DEMO 🚀')
})

app.use('/users', userRoutes)

app.listen(3000, () => {
  console.log(
    '\x1b[36m%s\x1b[0m',
    '🚀 Server is running on http://localhost:3000'
  )
})
