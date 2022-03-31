
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const cors = require('cors');

//parse JSON
app.use(express.json());

//handle CORS requests
app.use(cors());

//Connect to database
mongoose.connect(
    // process.env.DB_CONNECTION_BETA,
    // process.env.DB_CONNECTION_DEV,
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        var dbstate = mongoose.connection.readyState;
        if (dbstate == 0) {
            console.log('Database not connected');
        } else if (dbstate == 1) {
            console.log('Database connected');
        } else if (dbstate == 2) {
            console.log('Database connecting');
        } else {
            console.log('Database disconnecting');
        }
    }
);
//Set Routes
const messageRoutes = require('./routes/message/messageRouter');

//Use Routes
app.use('/api/message', messageRoutes);

//listen on 5500 and give "homepage"
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.get('/wake', (req, res) => {
    res.send('The API has been awoken')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});