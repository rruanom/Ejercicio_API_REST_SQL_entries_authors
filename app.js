const express = require("express");// importa el paquete express para poder usarlo y lo guarda en una variable
const app = express();//inicializa el servidor
const port = 3000;

//Importar middlewares

const error404= require("./middlewares/error404");
const morgan = require("./middlewares/morgan")

// Logger
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

//Rutas
// Rutas
const entriesRoutes = require("./routes/entries.routes")
const authorsRoutes = require("./routes/authors.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor


/* app.get("/", (req, res) => {
  res.send("Hello World!");
}); */

// Rutas
//API
app.use('/api/entries',entriesRoutes);
app.use('/api/authors',authorsRoutes);

app.use(error404);// middleware gestion de 404

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});