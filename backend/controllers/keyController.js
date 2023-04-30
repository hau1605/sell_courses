import * as keyModel from '../models/keyModel.js';
import crypto from 'crypto';

async function generateKey() {
  const key = generateRandomKey();
  const keyDoc = new keyModel({ key });
  await keyDoc.save();
  return key;
}

async function validateKey(key) {
  const keyDoc = await keyModel.findOne({ key });
  if (!keyDoc) {
    return false;
  }
  if (keyDoc.remaining_use < 1) {
    return false;
  }
  keyDoc.remaining_use--;
  await keyDoc.save();
  return true;
}

function generateRandomKey() {
  // Generate a 16 character long random key using a cryptographic library
  return crypto.randomBytes(8).toString('hex');
}

export { generateKey, validateKey };
