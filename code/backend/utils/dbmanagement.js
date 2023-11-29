/**
 * @file dbmanagement.js
 * @version 1.0.0
 */

// Librerie di MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('../config'); // Contiene variabili utili per il server

// Client per MongoDB
const clientMDB = new MongoClient(config.DATABASE_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Funzione che gestisce la connessione al database
async function connectToDatabase() {
  try {
    // Connettiamo il cliente al server
    await clientMDB.connect();
    console.log("Connesso con successo a MongoDB");
  } catch (error) {
    console.error("Connessione a MongoDB fallita:", error);

    // Riproviamo a connetterci dopo 5 secondi
    setTimeout(connectToDatabase, 5000);
  }
}


// Funzione che gestisce la disconnessione dal database 
async function disconnectFromDatabase() {
  try {
    await clientMDB.close();
    console.log("Disconnesso con successo da MongoDB");
  } catch (error) {
    console.error("Disconnessione da MongoDB fallita:", error);
  }
}

// In caso di disconnessione, proviamo a riconnetterci
clientMDB.on('disconnected', () => {
  console.log("Disconnesso da MongoDB");
  // Riproviamo a connetterci dopo 5 secondi
  setTimeout(connectToDatabase, 5000);
});


/** MODULE EXPORTS **/

module.exports = {
    clientMDB,
    connectToDatabase,
    disconnectFromDatabase
};