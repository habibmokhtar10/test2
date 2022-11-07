const { defineConfig } = require("cypress");

const mysql = require("mysql");
// the connection strings for different databases could
// come from the Cypress configuration or from environment variables
const connections = {
  stagingA: {
    host: "localhost",
    user: "root",
    password: "",
    database: "cypress_test",
  },
  stagingB: {
    host: "staging-b.my.co",
    user: "test",
    password: "***",
    database: "users",
  },
};

// querying the database from Node
function queryDB(connectionInfo, query) {
  const connection = mysql.createConnection(connectionInfo);

  connection.connect();

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        return reject(error);
      }

      connection.end();

      return resolve(results);
    });
  });
}

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        // destructure the argument into the individual fields
        queryDatabase({ dbName, query }) {
          const connectionInfo = connections[dbName];

          if (!connectionInfo) {
            throw new Error(`Do not have DB connection under name ${dbName}`);
          }

          return queryDB(connectionInfo, query);
        },
      });
    },
  },
});
