require("dotenv").config(); // must be first

const express = require("express");
const errorHandler = require("./middelware/errorHandler");
const connectDB = require("./connection/dbConnection");

connectDB();
const app = express();

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
