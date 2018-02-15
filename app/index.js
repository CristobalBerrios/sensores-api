import app from './app'
import {config} from './config'
import mongoose from 'mongoose'

console.log('la base de datos esta en:' + config.DB)

mongoose.connect(config.DB +'sismos', (err, res) => {
	if (err) return console.log('Error al conectarse a mongodb' + config.DB)

	console.log('Conexion con mongodb exitosa')

	app.listen(config.PORT, () => {
		console.log('Aplicacion corriendo en el puerto ' + config.PORT)
	})
})
