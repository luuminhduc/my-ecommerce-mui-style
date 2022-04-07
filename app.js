const express = require("express");
require("dotenv").config();
const connect = require("./db/connect");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

connect().then(() => {
	app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
});
