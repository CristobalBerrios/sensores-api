import mongoose from 'mongoose'
const Schema = mongoose.Schema

const SensorSchema = Schema({
  id: {type: String, required: true},
  name: {type: String, required: true},
  latitude: {type: String, required: true},
  length: {type: String, required: true},
  last_connection: {type: Date, required: false},
  last_alert: {type: Date, required: false}
})

export const sensorModel = mongoose.model('Sensor', SensorSchema)
