const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const studentRoute = require("./Routes/studentRoutes");

//configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ credentials: true }));

const port = process.env.PORT || 8000;
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`server running at ${port}`);
    });
  })
  .catch((err) => {
    console.log("Could not connect to database" + err);
  });

app.use("/api/student", studentRoute);

app.get("/", (req, res) => {
  res.send("Hey!");
});
