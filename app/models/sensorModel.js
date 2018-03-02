import mongoose from 'mongoose'
import moment from 'moment'
const Schema = mongoose.Schema

const SensorSchema = Schema({
  id: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  position: {
    lat: {type: Number, required: true},
    lng: {type: Number, required: true}
  },
  last_connection: {type: Date, required: false},
  last_event: {type: Date, required: false},
  cluster: {type: Schema.ObjectId, ref: 'Cluster', required: true}
},
{
  toJSON: {virtuals: true}
}
)

SensorSchema.virtual('isOnline').get(function () {
  if (this.last_connection == null || this.last_connection == '') return false
  let last_connection = moment(this.last_connection)
  let now = moment()

  if ((now - last_connection) > 90000) return false
  return true
})

export const sensorModel = mongoose.model('Sensor', SensorSchema)
