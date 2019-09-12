const express = require("express");

const navRoutes = require("./routes/navRoutes");

const app = express();

app.use(navRoutes);
app.listen(3000);
