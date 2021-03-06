const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
MONGODB_URI = "mongodb+srv://keldan:acorn73!@cluster0.a0kxk.mongodb.net/budget-tracker?retryWrites=true&w=majority"

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
