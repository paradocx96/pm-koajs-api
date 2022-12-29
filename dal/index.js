const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
});

client.connect(err => {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
    console.log('Successfully connected to Mongo DB');
});

module.exports = client;