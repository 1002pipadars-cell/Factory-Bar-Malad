const express = require("express");
const app = express();

app.use(express.json());

// Sample events endpoint
app.get("/api/getEvents", (req, res) => {
  res.json({
    events: [
      {
        id: "1",
        name: "Karaoke Night",
        time: "8:00 PM onwards",
        price: 0,
        redeemableAtOutlet: "FREE ENTRY",
        full: false
      },
      {
        id: "2",
        name: "Weekend DJ Party",
        time: "9:00 PM onwards",
        price: 500,
        redeemableAtOutlet: "FULL COVER CHARGE",
        full: false
      }
    ]
  });
});

// Sample submission endpoint
app.post("/api/submitBooking", (req, res) => {
  const { customerName, phone } = req.body;
  if (!customerName || !phone) {
    return res.status(400).json({ success: false, message: "Please fill required fields." });
  }

  return res.json({
    success: true,
    bookingId: "FBM-" + Math.floor(100000 + Math.random() * 900000)
  });
});

module.exports = app;