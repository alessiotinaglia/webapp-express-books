import mysql from "mysql2" 

const db_connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  
  password: "123456789",  
  database: "db_books",
});

db_connection.connect((err) => {
  if (err) {
    console.error('Errore nella connessione al DB:', err);
    return;
  }
  console.log('Connesso al database MySQL');
});

export default db_connection;
