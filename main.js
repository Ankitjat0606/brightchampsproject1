const express = require('express')
const app = express()
const port = 3000
app.get('/main', (req, res) => {
  res.sendFile(__dirname+'/views/main_page.html')
})
app.use('/', require('./routers/booking'));
app.use('/', require('./routers/leadcreate'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
