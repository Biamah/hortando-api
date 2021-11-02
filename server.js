const express = require("express");
const cors = require('cors');
const db = require('./src/db.js');

const app = express();

const corsOption = {
  origin: 'http://localhost:3001',
  optionSucessStatus: 200
}

app.use(cors(corsOption));


app.get("/", (request, response)=>{
  response.status(500).json({ok: 'true'});
});

app.get('/planta', (request, response) => {
  db.query('select * from planta', (error, results) => {
    if(error) throw error;
    response.json(results);
  })
})







app.listen("3000", () => {
  console.log("listening on 3000");
})

