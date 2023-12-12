const express = require("express");
const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");

app.get("/", (req, res) => {
  const peoples = [{ name: "Rafael" }, { name: "Renessa" }, { name: "Maria" }];

  const title = "<h1>Full Cycle Rocks!</h1>";

  const list = `
    <ul>
      ${peoples
        .map((people) => `<li>${people.name}</li>`)
        .join("")
        .toString()}
    </ul>
  `;

  res.send(title + list);
});

app.listen(port, () => {
  console.log(`Running in port ${port}`);
  runQuery(
    `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key (id))`
  );
  runQuery(`INSERT INTO people(name) VALUES('Rafael')`);
});

function runQuery(query) {
  const connection = mysql.createConnection(config);

  connection.query(query);
  connection.end();
}
