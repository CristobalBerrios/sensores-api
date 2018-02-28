import mongoose from 'mongoose'
const Schema = mongoose.Schema

const EventSchema = Schema({
  date: {type: Date, default: Date.now},
  intensity: {type: Number, required: true},
  clusters: [{type: Schema.ObjectId, ref: 'Cluster', required: true}]  
})

export const eventModel = mongoose.model('Event', EventSchema)
