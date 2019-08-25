const express = require("express");
const app = require("./bin/express");
const Parking = require("./module/parking/schema");
const router = require("./module/parking/routes");
const port = process.env.PORT || "3000";

app.use(express.json());

app.use("/", router);

app.listen(port, () => console.log(`Servern is On in port ${port}`));
