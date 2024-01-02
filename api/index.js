import express from "express";
import fileUpload from "express-fileupload";
import cors from 'cors';
import KameraRoute from './routes/KameraRoute.js';
import MerkRoute from './routes/MerkRoute.js';
import TransaksiRoute from './routes/TransaksiRoute.js';

const app = express();

app.listen();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(KameraRoute);
app.use(MerkRoute);
app.use(TransaksiRoute);


app.listen(5000,()=>console.log("Server Running"));

