import express from "express";
import cors from "cors";
import { writeNumbers } from "./fizzbuzz.js";

const app = express();
const port = 3000;


//enable cors for all origins
app.use(cors())


app.get('/numbers', async function (req, res, next) {
  console.log(req.query, 'fetch request sent');
  res.send(await writeNumbers());

})

// app.get('/numbers', async(req, res) => {
   
//   });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log('CORS-enabled web server listening on port 3000')
  });