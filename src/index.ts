import express from "express";
import { json } from "body-parser";

import db, { connectionString } from "./db";
import root from "./routes/root";
import employees from "./routes/employees";

const app = express();
const port = process.env.PORT || 3000;

app.use(json());

app.use(root);
app.use('/employees',employees);

db.connect(connectionString).then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
});