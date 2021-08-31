import { SmsGateway } from "./SmsGateway";

export class SmsSender {
   static sendSms(smsGateway: SmsGateway, mobile: number, variables: object[]): Promise<any> {
        return smsGateway.send(mobile, variables);
    }
}

export { TwoFactor } from './2factor/2factor';
export { Msg91 } from './msg91/msg91';