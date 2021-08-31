import { SmsGateway } from '../SmsGateway';
import { TwoFactorConfig } from './2factorConfig';

export class TwoFactor extends SmsGateway {
    url: string;
    senderId: string;
    template: string;
    
    constructor(config: TwoFactorConfig) {
        super();
        this.url = config.url;
        this.senderId = config.senderId;
        this.template = config.template; 
    }

    send(mobileNo: number, variables: object[]): Promise<any> {
        const options = {
            url: this.url,
            method: 'POST',
            data: {
                To: mobileNo,
                From: this.senderId,
                TemplateName: this.template
            }
        }
        if(variables.length > 0) {
            Object.assign(options.data,...variables);
        }
       return this.smsRequest(options);
    }
}