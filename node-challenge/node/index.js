const express = require("express");

const Configuration = require("./configuration");

const config = new Configuration();
const Repository = require("./repository");
const repository = new Repository();

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const selectAllPeoples = `SELECT * FROM people;`;

  const peoples = await repository.query(selectAllPeoples);

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

app.listen(port, async () => {
  console.log(`Running in port ${port}`);

  const createTableIfNotExistsSql = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key (id))`;
  await repository.query(createTableIfNotExistsSql);

  const datetime = new Date().getTime();

  const insertNamesInPeopleTable = `INSERT INTO people(name) VALUES('Rafael ${datetime}'), ('Renessa ${datetime}'), ('Maria ${datetime}')`;
  await repository.query(insertNamesInPeopleTable);
});
