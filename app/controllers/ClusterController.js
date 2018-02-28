import {clusterModel} from '../models/clusterModel'

class ClusterController {
  
  getAll (req, res) {
    clusterModel.find({}).exec((err, clusters) => {
      if (err) return res.status(500).send({message: 'Error al buscar los cluster'})
      return res.status(200).send(clusters)
    })
  }

  save (req, res) {
    let cluster = new clusterModel(req.body)

    cluster.save((err, newCluster) => {
      if (err) return res.status(500).send({message: 'Error al guardar el cluster'})
      return res.status(200).send({newCluster})
    })
  }
}

export const clusterController = new ClusterController()