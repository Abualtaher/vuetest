require("dotenv").config(); // must be first

const express = require("express");
const app = express();

app.use("/api/contacts", require("./routes/contactRoutes"));

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
