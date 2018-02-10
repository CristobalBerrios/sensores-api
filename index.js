import app from './app'
import mongoose from 'mongoose'
const port = process.env.PORT || 3001

mongoose.connect('mongodb://localhost:27017/sismos', (err, res) => {
	if (err) return console.log('Error al conectarse a mongodb')

	console.log('Conexion con mongodb exitosa')

	app.listen(port, () => {
		console.log('Aplicacion corriendo en el puerto ' + port)
	})
})
