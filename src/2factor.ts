import httpRequest from 'axios';
import { SmsGateway } from './SmsGateway';
import { TwoFactorConfig } from './2factorConfig';

export class TwoFactor implements SmsGateway {
    url: string;
    senderId: string;
    template: string;
    
    constructor(config: TwoFactorConfig) {
        this.url = config.url;
        this.senderId = config.senderId;
        this.template = config.template;
    }

    send(mobileNo: number, variables: any[]): Promise<any> {
        const options = {
            To: mobileNo,
            From: this.senderId,
            TemplateName: this.template
        }
        if(variables.length > 0) {
            Object.assign(options,...variables);
        }
        return httpRequest.post(this.url, options);
    }
}