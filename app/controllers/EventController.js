import {eventModel} from '../models/eventModel'

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
      return res.status(200).send({newEvent})
    })
  }
}

export const eventController = new EventController()
