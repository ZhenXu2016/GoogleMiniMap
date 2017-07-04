const path = require('path')
const express = require('express')
const app = express()

const PORT_NUMBER = 8080
const GOOGLE_API_KEY = AIzaSyBNtLj7PjM_YoBg6k7ioydVV9EwEc6m8oA

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/templates/GoogleMiniMap.html'));
})

app.listen(PORT_NUMBER, function() {
  console.log('Google Mini Map website listening on port ' + PORT_NUMBER + '!')
})
