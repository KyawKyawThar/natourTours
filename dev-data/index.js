const express = require('express');

const app = express();

port = 8000;

app.listen(port, () => {
  console.log(`App is listen in ${port}`);
});
