const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzVw50uWxHknwDw5V7JQU1vJqYzFpDDoLEWBIYNvOgvsWrC7sfqS0aS4lTMDw5PwY6b6A/exec';

app.get('/api/getEvents', async (req, res) => {
  try {
    const response = await axios.get(`${GOOGLE_SCRIPT_URL}?action=getEvents`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events', details: error.message });
  }
});

app.post('/api/submitBooking', async (req, res) => {
  try {
    const response = await axios.post(GOOGLE_SCRIPT_URL, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit booking', details: error.message });
  }
});

module.exports = app;