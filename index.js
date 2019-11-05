const express = require("express");
const app = require("./bin/express");
const Parking = require("./module/parking/schema");
const router = require("./module/parking/routes");
const port = process.env.PORT || "3333";

const swaggerDoc = require("./api/swagger/swaggerDoc");

app.use(express.json());
swaggerDoc(app);
app.use("/", router);

app.listen(port, () => console.log(`Servern is On in port ${port}`));
