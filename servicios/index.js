const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4003;
//middlewares
app.use(bodyParser.json());
app.use(cors());
//routes
const authRouter = require("./routes/authRouter");

app.use("/api/v1/usuario", authRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
