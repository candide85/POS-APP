// material icon theme to make vscode folder look good
// html to jsx
//colors to change console log colors
import {routerItems} from './routes/itemRoutes'
import express from 'express'
import env from 'dotenv'
import {connect} from './databaseConn/config'
// import bodyParser from 'body-parser'
import cors from 'cors'


const app = express()

// environnement variable config
env.config()

// mongodb config
connect()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// Routes
app.use('/api/items', routerItems)


const PORTS = process.env.PORT || 8080

app.listen(PORTS, () => {
    console.log(`Server running on port ${PORTS}`)
})
