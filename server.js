const express = require('express')
const app = new express()
const path = require('path');
const PORT = 3000


app.use('/scripts', express.static(path.join(__dirname, 'scripts')))


app.listen(PORT, ()=>console.log(`Server is runing in port ${PORT} 🚀`))