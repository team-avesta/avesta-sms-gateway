import { SmsGateway } from "./SmsGateway";

export class SmsSender {
    constructor(private smsGateway:SmsGateway) {}

    sendSms(mobile:number, variables: object[]):Promise<any> {
        return this.smsGateway.send(mobile, variables);
    }
}