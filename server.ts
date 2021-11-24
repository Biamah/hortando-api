import './src/models'
import { defineRoutes } from "./src/routes"

const express = require("express")
const cors = require('cors')
const { connection } = require("./src/controllers/spreadsheet.ts")
const bodyparser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

defineRoutes(app)


app.listen(port, () => {
  console.log(`Server's running in http://localhost:${port}`)
})

