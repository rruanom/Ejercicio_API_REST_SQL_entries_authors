const express = require('express');

const authorsController = require("../controllers/authors.controller");
const router = express.Router();

router.get('/', authorsController.getAuthors);
router.post('/', authorsController.createAuthor);
router.put('/', authorsController.updateAuthor);
router.delete('/', authorsController.deleteAuthor);

//GET http://localhost:3000/api/authors

module.exports = router;