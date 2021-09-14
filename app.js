const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/:code", function (request, response) {
  const { code } = request.params;

  if (code >= 200 && code < 600) {
    response.status(code).json({
      code,
      message: `Your request returned a ${code} HTTP status code`,
    });
  } else {
    response.status(200).json({
      code,
      message: `${code} is not a valid HTTP status code`,
    });
  }
});

app.listen(5000, function () {
  console.log("Visit http://localhost:5000");
});
