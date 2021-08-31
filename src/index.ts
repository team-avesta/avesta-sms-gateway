import { SmsGateway } from "./SmsGateway";
import { TwoFactor } from './2factor/2factor';
import { Msg91 } from './msg91/msg91';

export class SmsSender {
    constructor(private smsGateway:SmsGateway) {}

    sendSms(mobile:number, variables: object[]):Promise<any> {
        return this.smsGateway.send(mobile, variables);
    }
}

export default {
    SmsSender,
    TwoFactor,
    Msg91
}