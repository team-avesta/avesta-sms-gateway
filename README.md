## avesta-sms-gateway

avesta-sms-gateway is a module for send sms using different sms gateways.
Currently we are supporting [2factor](https://2factor.in/ "2factor") and [Msg91](https://msg91.com "Msg91").

<h3>Usage Example in typescript</h3>

```javascript
import { SmsSender, TwoFactor } from '@avesta-oss/avesta-sms-gateway';
 
 const twoFactor = new TwoFactor({
   apiKey:<YOUR_2FACTOR_API_KEY>,
   senderId: <YOUR_SENDER_ID>,
   template:<YOUT_TEMPLATE_NAME>
 });
 
 smsSender.sendSms(twoFactor, 99XXXXXXXX,[{VAR1:123456}]);
```
<h3>Usage Example in javascript</h3>

```javascript
const smsGateway = require('@avesta-oss/avesta-sms-gateway');

const twoFactor = new smsGateway.TwoFactor({
   apiKey:<YOUR_2FACTOR_API_KEY>,
   senderId: <YOUR_SENDER_ID>,
   template:<YOUT_TEMPLATE_NAME>
});

 smsGateway.smsSender.sendSms(twoFactor, 99XXXXXXXX,[{VAR1:123456}]);
```
