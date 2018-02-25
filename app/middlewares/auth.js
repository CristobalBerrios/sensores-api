import services from '../services'

export default {
  isAuth (req, res, next) {
    if (!req.headers.authorization) return res.status(401).send({message: 'No tiene autorizacion'})
    const token = req.headers.authorization
    services.decodeToken(token).then(response => {
      req.user = response
      next()
    }).catch(response => {
      res.status(response.status).send({message: response.message})
    })
  }
}