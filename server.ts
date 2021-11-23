import { defineRoutes } from "./src/routes"

const express = require("express")
const cors = require('cors')
const { connection } = require("./src/controllers/spreadsheet.ts")
const bodyparser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

defineRoutes(app)


app.listen("3000", () => {
  console.log("listening on 3000")
})

