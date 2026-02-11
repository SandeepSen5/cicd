const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Traditional Deployment Working 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
