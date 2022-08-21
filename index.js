const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const todoRoute = require("./routes/todo");
const cors = require("cors");
const PORT = process.env.PORT || 5000
app.use(cors());
app.use(express.json());

//route midlewere
app.use("/todo", todoRoute);

app.listen(PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db Succefully connected ");
  } catch (error) {
    console.log(error);
  }
  console.log(`server started on port http://localhost:${PORT}`);
});
