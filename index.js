const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user-route");
const moviesRoute = require("./routes/movie-route");
const listRoute = require("./routes/list-route");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err.message);
  });

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/lists", listRoute);

app.listen(process.env.PORT_NUMBER, () => {
  console.log("Backend server is running!", process.env.PORT_NUMBER);
});
