const express = require('express');

const authorsController = require("../controllers/authors.controller");
const router = express.Router();
const checkApiKey = require('../middlewares/auth_api_keys');
const { validateGetAuthorsByEmail , validateCreateAuthor, validateUpdateAuthor, validateDeleteAuthor } = require("../validators/authors.validator");

//router.get('/', checkApiKey, validateGetAuthors, authorsController.getAuthors);
router.get('/', checkApiKey, validateGetAuthorsByEmail, authorsController.getAuthors);
router.post('/', checkApiKey, validateCreateAuthor, authorsController.createAuthor);
router.put('/', checkApiKey, validateUpdateAuthor, authorsController.updateAuthor);
router.delete('/', checkApiKey, validateDeleteAuthor, authorsController.deleteAuthor);

//GET http://localhost:3000/api/authors

module.exports = router;