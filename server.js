var express = require('express');
var app = express();
var moment = require('moment');





app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/:id', (req, res) => { 
            datatime = req.params.id;
            
        var valid_string = moment(datatime, "MMMM DD, YYYY", true).isValid();
           if (valid_string) {
                nature = req.params.id;  
                unix = moment(datatime, "MMMM DD, YYYY").unix();               
           } else {
               unix = Number(req.params.id);
               nature = moment.unix(unix).format("MMMM DD, YYYY"); 
           }

   res.json({ "unix": unix, " natural": nature})
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Listening on Port: ' + process.env.PORT || 8000);
});