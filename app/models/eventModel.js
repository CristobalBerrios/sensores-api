import mongoose from 'mongoose'
const Schema = mongoose.Schema

const EventSchema = Schema({
  date: {type: Date, default: Date.now},
  intensity: {type: Number, required: true},
  sensors: [{type: Schema.ObjectId, ref: 'Sensor', required: true}]  
})

export const eventModel = mongoose.model('Event', EventSchema)
