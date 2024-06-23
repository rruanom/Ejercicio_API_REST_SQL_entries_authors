const author = require('../models/authors.model'); // Importar el modelo de la BBDD
const { validationResult } = require("express-validator");

const getAuthors = async (req, res) => {
    let authors;
    try {
        if (req.query.email || req.query.email == "") {
             const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
           authors = await authors.getAuthorsByEmail(req.query.email);
        } else {
            authors = await authors.getAllAuthors();
        }
        res.status(200).json(authors); // [] con los authors encontrados
    } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
    }
};

const createAuthor = async (req, res) => {
    const newEntry = req.body; // {name, surname, email, img}
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (
        "name" in newEntry &&
        "surname" in newEntry &&
        "email" in newEntry &&
        "image" in newEntry
    ) {
        try {
            const response = await author.createAuthor(newEntry);
            res.status(201).json({
                items_created: response,
                data: newEntry,
            });
        } catch (error) {
            res.status(500).json({ error: "Error en la BBDD" });
        }
    } else {
        res.status(400).json({ error: "Faltan campos en la entrada" });
    }
};

const updateAuthor = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const modifiedAuthor = req.body; // {name, surname, email, image, old_email}
    if (
        "name" in modifiedAuthor &&
        "surname" in modifiedAuthor &&
        "email" in modifiedAuthor &&
        "image" in modifiedAuthor &&
        "old_email" in modifiedAuthor
    ) {
        try {
            const response = await author.updateAuthor(modifiedAuthor);
            res.status(201).json({
                items_updated: response,
                data: modifiedAuthor, 
            });
            console.log(`se ha modificado la entry ${modifiedAuthor.email}`)
        } catch (error) {
            res.status(500).json({ error: "Error en la BBDD" });
        }
    } else {
        res.status(400).json({ error: "Faltan campos en la entrada" });
    }
};

const deleteAuthor = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let authors;
    try {
        authors = await author.deleteAuthor(req.query.email);
        res.status(200).json({"exito" : `Se ha borrado la entry: "${req.query.email}"`}); // [] con las entries encontradas
    } catch {
        res.status(500).json({ "error": "error en la BBDD" }); // [] con las entries encontradas
    }
}

module.exports = {
    getAuthors,
    createAuthor,
    deleteAuthor, //--> DELETE
    updateAuthor//--> PUT
}