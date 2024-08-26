const express = require("express");
const bodyParser = require("body-parser");
const cors =require("cors")
const app = express();
const userRoutes = require("./src/routes/userRoute");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.listen(PORT, () => {
  console.log(`server is runing on http://localhost:${PORT}`);
});

app.use("/api/user", userRoutes);
