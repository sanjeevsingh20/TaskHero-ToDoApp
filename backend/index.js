const connectmongo = require("./database");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(
  cors({
    origin: "*",
  })
);
connectmongo();
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
