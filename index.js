const app = require("./bin/express");
const moment = require("moment");
const Parking = require("./module/parking/parkingSchema");

const port = process.env.PORT || "3000";

app.get("/", async (req, res) => {
  // const pk = await Parking.create({
  //   vehicle: "Fusca",
  //   vehiclePlate: "ABC-1234",
  //   parkingStartAt: moment(),
  //   pricePerHour: 12
  // });

  const allVehicle = await Parking.find();
  res.status(200).json(allVehicle);
});

app.listen(port, () => console.log(`Servern is On in port ${port}`));
