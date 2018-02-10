import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import sensorRoutes from './routes/sensorRoutes'

const app = express()

app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', sensorRoutes)

export default app
