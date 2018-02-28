import {sensorModel} from '../models/sensorModel'

class HistoricalController {
  
  save (req, res) {
    let sensors = req.body
    let error = false
    try {
      sensors.forEach((sensor) => {
        sensorModel.findByIdAndUpdate(sensor._id,{ $set: {last_connection: Date.now()}}, {new: true}, (err, mySensor) => {
          if (err) error = true
        })
      })
      if (error) throw 'error al actulizar sensor, error: ' + err
      return res.status(200).send({message: 'Sensores actualizados correctamente'})
    } catch (err) {
      return res.status(500).send({message: err})
    }

  }
}

export const historicalController = new HistoricalController() 