import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import apiRoutes from './routes/apiRoutes'

const app = express()

app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', apiRoutes)

export default app
