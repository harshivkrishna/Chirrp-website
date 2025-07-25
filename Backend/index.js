const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

// WhatsApp Cloud API credentials (replace with your actual values)
const WHATSAPP_TOKEN = 'YOUR_WHATSAPP_CLOUD_API_TOKEN';
const PHONE_NUMBER_ID = 'YOUR_PHONE_NUMBER_ID';
const VERIFY_TOKEN = 'YOUR_WEBHOOK_VERIFY_TOKEN';

// Demo coupon code mapping (title to code)
const couponMap = {
  'Cranium Disney Family Edition at Amazon': 'DEMO30AMZ',
  'Popular Marvel Movies Titles on Amazon': 'DEMO30MARVEL',
  'GoDaddy yearly hosting offer': 'DEMO30GODADDY',
  'InterSport May Orders': 'DEMO30SPORT',
};

const app = express();
app.use(bodyParser.json());

// Webhook verification endpoint (GET)
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  if (mode && token && mode === 'subscribe' && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Webhook to receive messages (POST)
app.post('/webhook', async (req, res) => {
  const body = req.body;
  if (body.object) {
    if (
      body.entry &&
      body.entry[0].changes &&
      body.entry[0].changes[0].value.messages &&
      body.entry[0].changes[0].value.messages[0]
    ) {
      const message = body.entry[0].changes[0].value.messages[0];
      const from = message.from; // WhatsApp user phone number
      const msgBody = message.text && message.text.body ? message.text.body : '';

      // Parse coupon request from message
      // Example: "Hi, I want to avail the coupon: Cranium Disney Family Edition at Amazon ($30 OFF)."
      const couponRegex = /avail the coupon: (.+?) \(/i;
      const match = msgBody.match(couponRegex);
      if (match) {
        const couponTitle = match[1].trim();
        const couponCode = couponMap[couponTitle] || 'DEMO-COUPON';
        const reply = `Here is your coupon code for \"${couponTitle}\": ${couponCode}`;
        // Send reply via WhatsApp Cloud API
        await axios.post(
          `https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`,
          {
            messaging_product: 'whatsapp',
            to: from,
            text: { body: reply },
          },
          {
            headers: {
              Authorization: `Bearer ${WHATSAPP_TOKEN}`,
              'Content-Type': 'application/json',
            },
          }
        );
      }
    }
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`WhatsApp Cloud API backend listening on port ${PORT}`);
}); 