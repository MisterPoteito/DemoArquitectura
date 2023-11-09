const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4004;
//middlewares
app.use(bodyParser.json());
app.use(cors());
//routes
const serviciosRouter = require("./routes/serviciosRouter");

app.use("/api/v1/servicios", serviciosRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
