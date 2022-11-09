const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

// pass: CYLymhlZcfkWdNUD



const uri = "mongodb+srv://click-with-jack:CYLymhlZcfkWdNUD@cluster0.f7pydfc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        const servicesCollection = client.db('click-with-jack').collection('services')
        app.post('/services', async (req, res) => {
            const service = req.body;

            const result = await servicesCollection.insertOne(service);
            res.send(result)
        })
    }
    finally {

    }
}
run().catch((err) => console.error(err));


app.get('/', (req, res) => { res.send('Hello world from click with jack server') });


app.listen(port, () => {
    console.log(`Server site is running on ${port}`)
})