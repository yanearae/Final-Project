import express, { json } from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from '../routes/Authentication/authRoutes.js';
import userRoutes from '../routes/User/userRoutes.js';

config({path: './config/.env'});


const corsOption = {
  origin: ["http://localhost:3030"], 
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT","PATCH", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"] 
}

const app = express();
const port = process.env.PORT

try{
  mongoose.connect(process.env.DATABASE_URL);
} catch(error){
  
}

app.use(json());
app.use(cors(corsOption));

app.use("/users", userRoutes);

// app.use("/admin", userRoutes);

app.use("/auth", authRoutes);

app.get('/', (req, res) => {
  res.json("Servidor está funcionando");
});

// app.delete('/', (req, res) => {
//   res.json("Servidor está funcionando");
// });

// app.patch('/', (req, res) => {
//   res.json("Servidor está funcionando");
// });


app.listen(port, () => {
  console.log(`Bienvenido, servidor corriendo desde el puerto ${port}`)
})



// const server = createServer((req, res) => {
//     res.statusCode = 200;

//   // Esto determina el tipo de la respuesta

//   //respuesta con un JSON
//     res.setHeader('Content-Type', 'application/json');

//   //respuesta con un HTML
//   //res.setHeader('Content-Type', 'text/html');


//   //aqui respondemos con JSON
//     res.end(JSON.stringify({saludo: 'Iniciando conexion'}));

//   //aquui respondemos con HTML

//   //res.end(`<html><body><h1>Hola chicos desde mi HTML</h1></body></html>`);
// })

// server.listen(3030, () => {
//     console.log('Servidor corriendo en el puerto 3030');
//     console.log("ingresa a: http://localhost:3030");
// })