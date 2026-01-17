require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const HoldingsModel = require("./model/HoldingsModel");
const PositionModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();


app.use(cors());
app.use(bodyParser.json());

/*app.get("/addHoldings", async (req, res) => {
  try {
    let tempHoldings = [
      { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
      { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
      { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
      { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%" },
      { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" }
    ];

    // minimal change: wait for saves
    for (const item of tempHoldings) {
      let newHolding = new HoldingsModel({
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day
      });

      await newHolding.save();
    }

    res.send("Done!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// minimal change: connect DB first
mongoose.connect(uri)
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log("App started");
    });
  })
  .catch(err => console.error(err));

  */

  /*
app.get("/addPositions", async (req, res) => {   //  fixed params
  try {
    let tempPositions = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
      },
      {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
        isLoss: true,
      },
    ];

    for (const item of tempPositions) {   
      let newPosition = new PositionModel({
        product: item.product,
        name: item.name,
        qty: item.qty,
        avg: item.avg,        
        price: item.price,    
        net: item.net,
        day: item.day,
        isLoss: item.isLoss,
      });

      await newPosition.save();
    }

    res.send("Done!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});
*/

//  ROUTES FIRST
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionModel.find({});
  res.json(allPositions);
});


app.post("/newOrder", async (req, res) => {
  try {
    console.log("Incoming body:", req.body); // DEBUG

    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: Number(req.body.qty),
      price: Number(req.body.price),
      mode: req.body.mode,
    });

    await newOrder.save();   // MUST await
    res.status(201).send("Order saved!");
  } catch (err) {
    console.error("Order save error:", err);
    res.status(500).send("Failed to save order");
  }
});



//  DB connect → then server start
mongoose.connect(uri)
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log("App started on port", PORT);
    });
  })
  .catch(err => console.error(err));