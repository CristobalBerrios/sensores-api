import seeder from 'mongoose-seed'
import {config} from '../config'

seeder.connect(config.DB, () => {
  seeder.loadModels(['app/models/clusterModel'])

  seeder.clearModels(['Cluster'], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect()
    })
  })
})

let data = [
  {
    'model': 'Cluster',
    'documents': [
      {
        "name": "Cluster #1",
      }
    ]
  }
]