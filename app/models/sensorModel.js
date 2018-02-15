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
},
{
  toObject: {virtuals: true, getters: true},
  toJSON: {virtuals: true, getters: true} 
})

SensorSchema.virtual('date_last_connection').get(function() {
  let fecha = new Date(this.last_connection)
  return fecha.getDate
})

export const sensorModel = mongoose.model('Sensor', SensorSchema)
