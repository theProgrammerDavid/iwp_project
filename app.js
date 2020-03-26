
const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api', require('./routes/api.js'));
app.use(express.static('static'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
