import express from 'express';
import Connection from './database/db.js';

import Routes from './routes/route.js';


const app =express();


app.use('/',Routes);


const PORT=8000;

Connection();


app.listen(PORT,()=>console.log("server is running on port 8000"))