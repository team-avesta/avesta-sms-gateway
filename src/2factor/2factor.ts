import { SmsGateway } from '../SmsGateway';
import { TwoFactorConfig } from './2factorConfig';

export class TwoFactor extends SmsGateway {
    constructor(private config: TwoFactorConfig) {
        super();
    }

    send(mobileNo: number, variables: object[]): Promise<any> {
        const options = {
            url: this.config.url,
            method: 'POST',
            data: {
                To: mobileNo,
                From: this.config.senderId,
                TemplateName: this.config.template
            }
        }
        if(variables.length > 0) {
            Object.assign(options.data,...variables);
        }
       return this.smsRequest(options);
    }
}