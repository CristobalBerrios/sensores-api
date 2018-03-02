import {eventModel} from '../models/eventModel'
import {sensorModel} from '../models/sensorModel'

class EventController {
  
  getAll (req, res) {
    eventModel.find({}).sort('-date').exec((err, events) => {
      if (err) return res.status(500).send({message: 'Error al buscar los eventos'})
      return res.status(200).send(events)
    })
  }

  save (req, res) {
    let event = new eventModel(req.body)

    event.save((err, newEvent) => {
      if (err) return res.status(500).send({message: 'Error al guardar el evento'})
      let fecha = newEvent.date
      let sensors = newEvent.sensors
      sensors.forEach(id => {
        sensorModel.findByIdAndUpdate(id,{ $set: {last_event: fecha}}, {new: true},() => {})
      })
      return res.status(200).send({newEvent})
    })
  }
}

export const eventController = new EventController()
