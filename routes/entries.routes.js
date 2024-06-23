const express = require('express');
// Rutas de productos
const entriesController = require("../controllers/entries.controller");
const router = express.Router();
const checkApiKey = require('../middlewares/auth_api_keys');
const { validateCreateEntries, validateGetEntries, validateDeleteEntry, validateUpdateEntry } = require("../validators/entries.validator");

router.get('/', checkApiKey, validateGetEntries, entriesController.getEntries);
router.post('/', checkApiKey, validateCreateEntries, entriesController.createEntry);
router.put('/', checkApiKey, validateUpdateEntry, entriesController.updateEntry);
router.delete('/', checkApiKey,validateDeleteEntry, entriesController.deleteEntry);

module.exports = router;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
/*{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}*/

// PUT http://localhost:3000/api/entries
/*{
    "title": "Se acabaron las mandarinas de TB",
    "content": "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    "date": "2024-6-17",
    "email": "guillermu@thebridgeschool.es",
    "category": "sucesos",
    "old_title": "Estamos de lunes de Back"
}  */