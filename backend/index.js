const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();

// * Connecting To Port
const port = 4001;
app.use(cors());

// * Automatically parse incoming JSON to an object so we access it in our request handlers
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.post("/api/random", async (req, res) => {
  try {
    // let number = Math.floor(Math.random() * 10000);

    let number = Math.round((Math.random() - 0.5) * 10000);

    console.log(number);
    res.status(200).json({ status: true, data: number });
  } catch (error) {
    console.log(error);
  }
}); // * listening To Port
app.listen(port, () => {
  console.log(`This is the ${port} active port! Wait for DB Connection...`);
});
