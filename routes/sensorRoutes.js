import express from 'express'
import {sensorController} from '../controllers/SensorController'
const route = express.Router()

route.get('/sensor', sensorController.getAll)
route.get('/sensor/:id', sensorController.getById)
route.post('/sensor', sensorController.save)
route.put('/sensor/:id', sensorController.update)
route.delete('sensor/:id', sensorController.remove)

export default route