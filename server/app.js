const express = require("express");
const cors = require("cors");

//Port Setup
const app = express();
const port = process.env.PORT || 5000;




//Data Parsing
app.use(express.json());
app.use(cors()) 


// HTTP request logger
app.use("/api", require("./routes/index"));

// Error Handler Middleware
// app.use(errorHandler);

app.listen(port, () =>
  console.log(`Sever running on port ${port}`)
);



