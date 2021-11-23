const express = require("express");
const cors = require('cors');
const { connection } = require("./src/controllers/spreadsheet.ts");
const bodyparser = require('body-parser')
// const db = require('./src/db.ts');

const app = express();



app.use(cors());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))


app.get("/", (request, response)=>{
  response.status(500).json({ok: 'true'});
});

app.post('/connection_spreadsheet', connection)

// app.get('/planta', (request, response) => {
//   db.query('select * from planta', (error, results) => {
//     if(error) throw error;
//     response.json(results);
//   })
// })







app.listen("3000", () => {
  console.log("listening on 3000");
})

