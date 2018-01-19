

const express = require("express");
var formidable = require('express-formidable');
const app = express();
var fs = require('fs');




/*app.get("/", function (req, res) {
   // res.send("Yay! Node Girls!");
});

app.get("/node", function (req, res) {
    res.send("Yay! Node!");
});

app.get("/girls", function (req, res) {
    res.send("Yay! Girls!");
});
*/

app.use(express.static("public"));

app.use(formidable());

app.post('/create-post', function (req, res) {
    console.log(req.fields);
    var ts = new Date();
    var data = {};
    data[ts] = req.fields.blogpost;

    //writing into the hardware
    // fs.writeFile('./data/posts.json', JSON.stringify(data), function(error) {
    //     console.log('Error occured!');
    // });

    // Reading from the hardware
    // fs.readFile('./data/posts.json', function(error, file) {

    // })

    // fs.readFile(__dirname + '/data/posts.json', function (error, file) {
    //     var parsedFile = JSON.parse(file);
    //     console.log(file.toString());
        
    // });

    fs.appendFile('./data/posts.json', JSON.stringify(data), showMessage);

    function showMessage(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('Blog has been updated!');
        }
    }


});

app.listen(3000, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});
    
    


