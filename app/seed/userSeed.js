import seeder from 'mongoose-seed'
import bcrypt from 'bcrypt'
import {config} from '../config'

seeder.connect(config.DB, () => {
  seeder.loadModels(['app/models/userModel'])

  seeder.clearModels(['User'], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect()
    })
  })
})

let data = [
  {
    'model': 'User',
    'documents': [
      {
        "email": "admin@sismos.com",
        "password": bcrypt.hashSync("admin123", 10)
      }
    ]
  }
]