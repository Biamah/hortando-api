const express = require('express');
const router = express.Router();

router.use(timeLog = (request, response, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (request, response)=>{
  response.send('Books home page');
});

router.get('/about', (request, response)=>{
  response.send('about books');
});

module.exports = router;