const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;
//middlewares
app.use(bodyParser.json());
app.use(cors());
//routes
const presupuestoRouter = require("./routes/presupuestoRouter");

app.use("/api/v1/presupuestos", presupuestoRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
