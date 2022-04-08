const express = require("express");
require("dotenv").config();
const connect = require("./db/connect");
const cors = require("cors");
const adminAuthRoute = require("./routes/admin/adminAuthRoute");
const userAuthRoute = require("./routes/users/userAuthRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use(adminAuthRoute);
app.use(userAuthRoute);

const PORT = process.env.PORT || 4000;

connect().then(() => {
	app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
});
