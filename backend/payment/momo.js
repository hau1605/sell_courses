import axios from 'axios';
import { createHmac } from 'crypto';
const createMoMoPayment = async (orderId, orderInfo, amount) => {
  const partnerCode = "MOMO";
  const accessKey = "F8BBA842ECF85";
  const secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
  const requestId = partnerCode + new Date().getTime();
  // const redirectUrl = "https://momo.vn/return";

  const redirectUrl = `http://localhost:3000/`;
  const ipnUrl = "http://52.74.237.230:8000/api/billings/validate";
  const requestType = "captureWallet";
  const extraData = "";

  const rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;

  const signature = createHmac('sha256', secretKey)
    .update(rawSignature)
    .digest('hex');

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

  return axios(options)
    .then(response => {
      const payUrl = response.data.payUrl;
      return payUrl;
    })
    .catch(error => {
      console.log(`Error: ${error.message}`);
    });
};

export {
	createMoMoPayment
}
