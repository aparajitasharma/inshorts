import express, { Route} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';

dotenv.config()
const app = express();


app.use(cors());
app.use('/', Route)

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}

const PORT = process.env.PORT || 8000;

const username = process.env.USER_IN;
const password = process.env.PASS_IN

const URL = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@cluster0.q44hwjd.mongodb.net/inshorts_clone?retryWrites=true&w=majority`

Connection(URL);

app.listen(PORT,()=>console.log(`server is running on the port ${PORT}`));

DefaultData();