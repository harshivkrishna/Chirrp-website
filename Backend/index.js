const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Demo coupon code mapping (title to code)
const couponMap = {
  'Cranium Disney Family Edition at Amazon': 'DEMO30AMZ',
  'Popular Marvel Movies Titles on Amazon': 'DEMO30MARVEL',
  'GoDaddy yearly hosting offer': 'DEMO30GODADDY',
  'InterSport May Orders': 'DEMO30SPORT',
};

// WhatsApp client setup
const client = new Client({
  authStrategy: new LocalAuth({ clientId: '9715630166' }) // Ensures session is tied to this number
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
  console.log('Scan the QR code above with WhatsApp (number: 9715630166)');
});

client.on('ready', () => {
  console.log('WhatsApp client is ready!');
});

client.on('message', async (msg) => {
  // Check if the message matches the expected pattern
  const availRegex = /avail the coupon: (.+?) with code: (.+?) \((.+?)\)/i;
  const match = msg.body.match(availRegex);
  if (match) {
    const couponTitle = match[1].trim();
    // Find the coupon code from the map
    const couponCode = couponMap[couponTitle] || 'DEMO-COUPON';
    // Send the coupon code as a reply
    await msg.reply(`Here is your coupon code for "${couponTitle}": ${couponCode}`);
    console.log(`Sent coupon code for: ${couponTitle}`);
  }
});

client.initialize(); 