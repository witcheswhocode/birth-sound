const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/:location/:birthday/:birthtime", (req, res) => {
    res.json({ message: req.params.location });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});