import app from './app'
import {config} from './config'
import mongoose from 'mongoose'

mongoose.connect(config.DB, (err, res) => {
	if (err) return console.log('Error al conectarse a mongodb ' + err)

	console.log('Conexion con mongodb exitosa')

	app.listen(config.PORT, () => {
		console.log('Aplicacion corriendo en el puerto ' + config.PORT)
	})
})
