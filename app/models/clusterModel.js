import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ClusterSchema = Schema({
  name: {type: String, required: true, unique: true}  
})

export const clusterModel = mongoose.model('Cluster', ClusterSchema)
