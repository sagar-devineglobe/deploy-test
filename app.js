const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000;
const postRoutes = require("./routes/postRoutes");
dotenv.config();

app.use(express.json());

const morgan = require("morgan");
const { response } = require("express");
app.use(morgan("dev"));

app.use("/posts", postRoutes);

const server = app.listen(PORT, console.log(`Server is running in on ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  server.close(() => process.exit(1));
});
