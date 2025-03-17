import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import clientRoutes from './routes/client.js'
//Setup app
const app = express();
const port = 3000;
//setup hbs
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, 'views'))
//routes
app.use('/', clientRoutes)

app.listen(port, ()=>{
    console.log(`App is running at https://127.0.0.1:${port}`)
})




