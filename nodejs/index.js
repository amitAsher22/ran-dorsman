
const express = require("express");
const fs = require("fs")
const app = express();

app.use(express.json());


const PORT = process.env.PORT || 3001;
const file = require("../nodejs/dataServer/Subscribers.json")




app.get("/", (req, res) => {
  res.send('Hello server ');
});

app.listen(PORT, () => {
  console.log(`Server run on ${PORT}`);
});





////////////////////////////////////////////////////////////////////////////////////////////////
app.put("/title", (req, res) => {
  req.body
  const dataFile = fs.readFile("../nodejs/dataServer/Subscribers.json", (err, data) => {
    let jsonFile = JSON.parse(data);
    jsonFile[0].titlePage = "עמית"
    

   

    fs.writeFile(
      "../nodejs/dataServer/Subscribers.json",
      JSON.stringify(jsonFile, null, 4),
      (err, data) => {
        if (err) {
          throw err;
        } else {
         res.send('helooooooo')
        }
      }
    );
  });

});


