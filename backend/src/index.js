const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const routes = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(port, () => {
  connectToDB();
  console.log(`Server running on port ${port}`);
});

app.use((err, req, res, next) => {
  const { status = 400, message = "Something went wrong" } = err;
  console.log(message);
  res.status(status).send(message);
});
