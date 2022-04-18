const express = require("express");
require("dotenv").config();
const connect = require("./db/connect");
const cors = require("cors");
const adminAuthRoute = require("./routes/admin/adminAuthRoute");
const userAuthRoute = require("./routes/users/userAuthRoute");
const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");
const productVariantRoute = require("./routes/productVariantRoute");
const attributeRoute = require("./routes/attributeRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use(adminAuthRoute);
app.use(userAuthRoute);
app.use(categoryRoute);
app.use(productRoute);
app.use(productVariantRoute);
app.use(attributeRoute);

const PORT = process.env.PORT || 4000;

connect().then(() => {
	app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
});
