import {config} from '../config'
import moment from 'moment'
import jwt from 'jwt-simple'

export default {
  createToken (user) {
    const payload = {
      sub: user._id,
      iat: moment().unix(),
      exp: moment().add(7, 'days').unix()
    }

    return jwt.encode(payload, config.SECRET)
  },
  decodeToken (token) {
    const decoded = new Promise((resolve, reject) => {
      try {
        const payload = jwt.decode(token, config.SECRET)

        if(payload <= moment().unix()) {
          reject({
            status: 401,
            message: 'El token ha expirado'
          })
        }
        
        resolve(payload.sub)
      } catch (err) {
        reject({
          status: 500,
          message: 'Token Invalido'
        })
      }
    })

    return decoded
  }
}