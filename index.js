const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => { res.send('Hello world from click with jack server') });


app.listen(port, () => {
    console.log(`Server site is running on ${port}`)
})