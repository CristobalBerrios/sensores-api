import {sensorModel} from '../models/sensorModel'

class SensorController {

  //Funcion para obtener todos los Sensores
  getAll (req, res) {
    sensorModel.find({}).exec((err, sensores) => {
      if (err) return res.status(500).send({message: 'error al buscar los sensores'})
      res.status(200).send(sensores)
    })
  }

  //Funcion para obtener un registro por ID
  getById (req, res) {
    const sensorId = req.params.id

    sensorModel.findById(sensorId, (err, sensor) => {
      if (err) return res.status(500).send({message: 'error al buscar el sensor'})
      if (!sensor) return res.status(404).send({message: 'el sensor no existe'})
      res.status(200).send(sensor)
    })
  }

  //Funcion para guardar un sensor
  save (req, res) {
    let sensor = new sensorModel(req.body)

    sensor.save((err, newSensor) => {
      if (err) return res.status(500).send({message: 'Error al guardar el sensor'})
      res.status(200).send({sensor: newSensor})
    })
  }

  //Funcion para editar un sensor
  update (req, res) {
    const sensorId = req.params.id
    const sensorUpdate = req.body
  
    sensorModel.findByIdAndUpdate(sensorId, sensorUpdate, (err, sensor) => {
      if (err) return res.status(500).send({message: 'error al editar el sensor'})
      if(!sensor) return res.status(404).send({message: 'sensor no encontrado al editar'})
      res.status(200).send({sensor: sensor})
    })
  }

  //Funcion para eliminar un sensor
  remove (req, res) {
    const sensorId = req.params.id

    sensorModel.findByIdAndRemove(sensorId, (err, sensor) => {
      if (err) return res.status(500).send({message: 'error al eliminar el sensor'})
      if(!sensor) return res.status(404).send({message: 'sensor no encontrado al eliminar'})
      res.status(200).send({message: 'sensor eliminado', id: sensor._id})
    })
  }
}

export const sensorController = new SensorController()
