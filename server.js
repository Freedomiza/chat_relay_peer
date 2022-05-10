const express = require("express");
const Gun = require("gun");

const app = express();
const port = process.env.PORT || 3000;
app.use(Gun.serve);

const server = app.listen(port, () => {
  console.log("Listening at: http://localhost:" + port);
});

Gun({ web: server });
