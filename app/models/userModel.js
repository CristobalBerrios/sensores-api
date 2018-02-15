import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = Schema({
  email: {type: String, required: true},
  password: {type: String, required: true}
})

export const userModel = mongoose.model('User', UserSchema)