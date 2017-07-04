const path = require('path')
const express = require('express')
const app = express()

const PORT_NUMBER = 8080

app.get('/', function(req, res) {
  res.sendFile(path.join(_dirname + '/templates/GoogleMiniMap.html'));
})

app.listen(PORT_NUMBER, function() {
  consolo.log('Google Mini Map website listening on port ' + PORT_NUMBER + '!')
})
