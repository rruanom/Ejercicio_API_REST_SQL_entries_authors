const queries = require('../queries/authors.queries'); // Queries SQL
const pool = require('../config/db_pgsql');


// GET
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllAuthors)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//GET

const getAuthorByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAuthorByEmail, [email])
        result = data.rows

    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//Post

const createAuthor = async (author) => {
    const { name, surname, email, img } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor, [name, surname, email, img])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const updateAuthor = async (author) => {
    const { name, surname, email, image, old_email } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir la conexión
        const data = await client.query(queries.updateAuthor, [
            name,
            surname,
            email,
            image,
            old_email
        ]);
        result = data.rowCount;
    } catch (err) {
        console.error('Error al actualizar el autor:', err);
        throw err;
    } finally {
        if (client) client.release();
    }
    return result;
}

const deleteAuthor = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteAuthor,[email])
        result = data
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// Pruebas
/* getAuthorByEmail('alejandru@thebridgeschool.es')
    .then(data=>console.log(data))  */



/*let newEntry = {
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
}

createEntry(newEntry)
    .then(data => console.log(data)) 
    
/*let updateEntry = {
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    date: '2024-6-17',
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
    old_title: "El titulo antiguo a cambiar"
}   */

    

/* let updatedAuthor = {
    name: "Stephu",
    surname: "Perumon",
    email: "steph@lacomidadeperumola.com",
    image: "ejemploImagen",
    old_email: "jabier@thebridgeschool.es"
}   
updateAuthor(updatedAuthor)
    .then(data=> console.log(data)) */

//deleteAuthor("muchelle@thebridgeschool.es").then(data => console.log(data));

const authors= {
    getAllAuthors,
    getAuthorByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor
}

module.exports = authors;