const express = require("express");

const app = express();

app.get("/", (request, response)=>{
  response.json({ola: 'hello word'});
});

app.listen("3000", () => {
  console.log("listening on 3000");
})

