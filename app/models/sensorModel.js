import mongoose from 'mongoose'
const Schema = mongoose.Schema

const SensorSchema = Schema({
  id: {type: String, required: true},
  name: {type: String, required: true},
  position: {
    lat: {type: Number, required: true},
    lng: {type: Number, required: true}
  },
  last_connection: {type: Date, required: false, default: Date.now},
  last_alert: {type: Date, required: false, default: Date.now}
})

export const sensorModel = mongoose.model('Sensor', SensorSchema)
