import express, { request, response } from "express";
import cors from "cors"
import {PORT,DB_URL} from "./config.js";
import  mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js'
import formRoute from './routes/formRoute.js'
const app = express();
app.use(express.json());
app.use(cors('http://localhost:5174'));
/*app.use(
  cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type'],
  })
);
*/
app.get('/',(request,response)=>{
 response.send("welcome to homePage")
})

app.use('/books',booksRoute);

app.use('/form',formRoute);

mongoose.connect(DB_URL).then(()=>{
  console.log('App Connected to DB');
  app.listen(PORT,()=>{
    console.log(`App is running to port:${PORT}`);
  })
})
.catch((e)=>{console.log(e);
})
