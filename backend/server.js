const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db/connection");
const otpRoutes = require("./routes/otpRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/api", otpRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
