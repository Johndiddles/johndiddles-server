const express = require("express");
const cors = require("cors");
const serverV1 = require("./serverV1");
const serverV1Routes = require("./src/routes/serverV1Routes");

const app = express();

const PORT = process.env.PORT || 5775;

app.use(cors());

app.use(express.json());

app.use("/api/v1", serverV1Routes);

app.listen(PORT, () => console.log(`Serving you on port: ${PORT}`));
