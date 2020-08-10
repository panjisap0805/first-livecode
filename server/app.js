const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routers/index')

const PORT = 3000

app.use(express.urlencoded({extended: true}))

app.use('/', router)

app.listen(PORT, () => {
    console.log(`app running di ${PORT}`)
})