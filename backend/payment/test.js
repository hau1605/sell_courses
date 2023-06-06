import axios from 'axios';
import { createHmac } from 'crypto';

const partnerCode = "MOMO";
const accessKey = "F8BBA842ECF85";
const secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
const requestId = partnerCode + new Date().getTime();
const orderId = requestId;
const orderInfo = "pay with MoMo";
const redirectUrl = "https://momo.vn/return";
const ipnUrl = "https://callback.url/notify";
const amount = "50000";
const requestType = "captureWallet";
const extraData = "";

const rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;
console.log("--------------------RAW SIGNATURE----------------");
console.log(rawSignature);

const signature = createHmac('sha256', secretKey)
  .update(rawSignature)
  .digest('hex');
console.log("--------------------SIGNATURE----------------");
console.log(signature);

const requestBody = {
  partnerCode,
  accessKey,
  requestId,
  amount,
  orderId,
  orderInfo,
  redirectUrl,
  ipnUrl,
  extraData,
  requestType,
  signature,
  lang: 'en'
};

const options = {
  url: 'https://test-payment.momo.vn/v2/gateway/api/create',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  data: requestBody
};

axios(options)
  .then(response => {
    console.log(`Status: ${response.status}`);
    console.log(`Headers: ${JSON.stringify(response.headers)}`);
    console.log('Body: ');
    console.log(response.data);
    console.log('payUrl: ');
    console.log(response.data.payUrl);
  })
  .catch(error => {
    console.log(`Error: ${error.message}`);
  });

console.log("Sending....");

