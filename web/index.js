// @ts-check

const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "password",
  database: process.env.MYSQL_DATABASE || "test",
});

app.get("/", (request, response) => {
  connection.query("SELECT * FROM Student", (err, rows) => {
    if (err) {
      response.json({
        success: false,
        err,
      });
    }

    response.json({
      success: true,
      rows,
    });
  });
});

app.listen(5000, () => console.log("listining on port 5000"));
