const express = require('express');
const path = require('path');

app.use((req, res, next ) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname + `/views/${name}`));
    };
    next();
});




const app = express();



app.listen(9000, () => {
    console.log('Server is running on port: 9000');
});