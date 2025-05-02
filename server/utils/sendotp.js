const twilio = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

exports.sendOTP = (phone) => {
  return twilio.verify.services(process.env.TWILIO_SERVICE_SID)
    .verifications
    .create({ to: phone, channel: 'sms' });
};

exports.checkOTP = (phone, code) => {
  return twilio.verify.services(process.env.TWILIO_SERVICE_SID)
    .verificationChecks
    .create({ to: phone, code });
};
