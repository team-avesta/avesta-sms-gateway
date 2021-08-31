import { SmsGateway } from "./SmsGateway";

export class SmsSender {
    constructor(private smsGateway: SmsGateway) { }

    sendSms(mobile: number, variables: object[]): Promise<any> {
        return this.smsGateway.send(mobile, variables);
    }
}

export { TwoFactor } from './2factor/2factor';
export { Msg91 } from './msg91/msg91';