import express from 'express'
import auth from '../middlewares/auth'
import {userController} from '../controllers/UserController'
import {sensorController} from '../controllers/SensorController'
import {eventController} from '../controllers/EventController'

const route = express.Router()

//Login Routes
route.post('/signup', userController.signUp)
route.post('/signin', userController.signIn)

// Sensor Routes
route.use('/sensor', auth.isAuth)
route.get('/sensor', sensorController.getAll)
route.get('/sensor/:id', sensorController.getById)
route.post('/sensor', sensorController.save)
route.put('/sensor/:id', sensorController.update)
route.delete('/sensor/:id', sensorController.remove)

// Event Routes
route.use('/event', auth.isAuth)
route.get('/event', eventController.getAll)
route.post('/event', eventController.save)

export default route
