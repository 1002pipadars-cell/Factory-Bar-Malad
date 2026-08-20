const express = require("express");
const app = express();

app.use(express.json());

const eventsList = [
  {
    id: "mon",
    name: "Monday",
    icon: "🎤",
    time: "8:00 PM onwards",
    nearestDate: "Mon, 24 Aug 2026",
    price: 250,
    redeemableAtOutlet: true,
    spotsRemaining: 50
  },
  {
    id: "tue",
    name: "Tuesday – Speakeasy Nights",
    icon: "🎤",
    time: "8:00 PM onwards",
    nearestDate: "Tue, 25 Aug 2026",
    price: 250,
    redeemableAtOutlet: true,
    spotsRemaining: 50
  },
  {
    id: "wed",
    name: "Wednesday – Hinglish Karaoke",
    icon: "🎤",
    time: "8:00 PM onwards",
    nearestDate: "Wed, 26 Aug 2026",
    price: 500,
    redeemableAtOutlet: true,
    spotsRemaining: 50
  },
  {
    id: "thu",
    name: "Thursday – English Karaoke Night",
    icon: "🎤",
    time: "8:00 PM onwards",
    nearestDate: "Thu, 27 Aug 2026",
    price: 250,
    redeemableAtOutlet: true,
    spotsRemaining: 50
  },
  {
    id: "fri",
    name: "Friday – Bollywood Karaoke Night",
    icon: "🎵",
    time: "8:00 PM onwards",
    nearestDate: "Fri, 28 Aug 2026",
    price: 500,
    redeemableAtOutlet: true,
    spotsRemaining: 50
  },
  {
    id: "sat",
    name: "Saturday – Bollywood Karaoke Night",
    icon: "🎵",
    time: "8:00 PM onwards",
    nearestDate: "Sat, 29 Aug 2026",
    price: 500,
    redeemableAtOutlet: true,
    spotsRemaining: 50
  }
];

app.get("/api/getEvents", (req, res) => {
  res.json({ events: eventsList });
});

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
