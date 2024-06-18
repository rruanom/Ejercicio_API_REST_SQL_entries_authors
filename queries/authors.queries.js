const db_queries_authors = {
    getAllAuthors: `
    SELECT 
        *
    FROM authors`,
    getAuthorByEmail : `
    select 
	    *
    from
	    authors
    where 
	    email = $1`,
    createAuthor: `
    insert into
	    authors (name, surname, email, image)
    values
	    ($1, $2, $3, $4)
	`,
    updateAuthor: `UPDATE 
        public.authors
	SET 
        name = $1, 
        surname= $2, 
	    email= $3, 
        image=$4 
	WHERE 
  	    email = $5;
    `,
    deleteAuthor: `
    DELETE FROM 
        authors
    WHERE
        email = $1` 
};

module.exports = db_queries_authors;