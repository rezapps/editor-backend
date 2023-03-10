require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 1337;
const {app} = require("./app");

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running on port: ${port}`)
        })
    })
    .catch((error) => {
        console.log(error);
    });
