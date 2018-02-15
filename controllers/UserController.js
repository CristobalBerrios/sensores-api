import {userModel} from '../models/userModel'
import bcrypt from 'bcrypt'
import services from '../services'

class UserController {

  //Funcion para registar un Usuario
  signUp (req, res) {
    const password = bcrypt.hashSync(req.body.password, 10)
    const user = new userModel({
      email: req.body.email,
      password: password
    })

    user.save((err, newUser) => {
      if (err) return res.status(500).send({message: 'Error al crear el usuario'})

      return res.status(200).send({token: services.createToken(newUser)})
    })
  }

  signIn (req, res) {
    userModel.findOne({email: req.body.email}, (err, user) => {
      if (err) return res.status(500).send({message: err})
      if (!user) return res.status(404).send({message: 'Usuario no registrado'})

      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).send({message: 'la clave es invalida'})
      }

      return res.status(200).send({token: services.createToken(user), email: user.email})
      
    })
  }

}

export const userController = new UserController()
