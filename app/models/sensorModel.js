import mongoose from 'mongoose'
const Schema = mongoose.Schema

const SensorSchema = Schema({
  id: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  position: {
    lat: {type: Number, required: true},
    lng: {type: Number, required: true}
  },
  last_connection: {type: Date, required: false},
  cluster: {type: Schema.ObjectId, ref: 'Cluster', required: true}
})

export const sensorModel = mongoose.model('Sensor', SensorSchema)
