import { SmsGateway } from './SmsGateway';
import httpRequest from 'axios';

export class TwoFactor implements SmsGateway {
    url: string;
    templateName: string;
    senderId: string;
    constructor() {
        this.url = process.env.TWOFACTOR_URL || '';
        this.templateName = process.env.TWOFACTOR_TEMPLATE_NAME || '';
        this.senderId = process.env.SMS_SENDER_ID || '';
    }

    sendSms(mobileNo: number, otp: number): Promise<any> {
        return httpRequest.post(this.url, {
            To: mobileNo,
            From: this.senderId,
            TemplateName: this.templateName,
            VAR1: otp
        });
    }
}