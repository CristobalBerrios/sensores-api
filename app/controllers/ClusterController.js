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
      return res.status(200).send(newCluster)
    })
  }

  update (req, res) {
    const clusterId = req.params.id
    const clusterUpdate = req.body
  
    clusterModel.findByIdAndUpdate(clusterId, clusterUpdate, (err, cluster) => {
      if (err) return res.status(500).send({message: 'error al editar el cluster'})
      if(!cluster) return res.status(404).send({message: 'cluster no encontrado al editar'})
      res.status(200).send({cluster: cluster})
    })
  }

  remove (req, res) {
    const clusterId = req.params.id

    clusterModel.findByIdAndRemove(clusterId, (err, cluster) => {
      if (err) return res.status(500).send({message: 'error al eliminar el cluster'})
      if(!cluster) return res.status(404).send({message: 'cluster no encontrado al eliminar'})
      res.status(200).send({message: 'cluster eliminado', id: cluster._id})
    })
  }
}

export const clusterController = new ClusterController()