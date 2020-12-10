const mongoose = require("mongoose");
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const patien = require("./routes/patient");
const auth = require("./routes/auth");
const doctor = require("./routes/doctor");

const app = express();
mongoose
  .connect(
    "mongodb+srv://lokesh:lokesh098@mycluster-4ouko.mongodb.net/ereports?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to mongoose.....");
  })
  .catch((err) => {
    console.log("could not connect to db..", err);
  });

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.post("/preg", patien);
app.post("/dreg", doctor);
app.post("/addreport", doctor);
app.post("/auth", auth);
app.post("/getallreports", patien);
app.post("/getreport", doctor);
app.post("/getdoctors", doctor);
app.put("/updaterating", doctor);
app.post("/addapp", doctor);
app.post("/getapp", doctor);
app.post("/getappbyp", patien);

const port = process.env.PORT || 3001;
console.log(port);

//require("./startup/prod")(app);
console.log(new Date().toUTCString());
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
