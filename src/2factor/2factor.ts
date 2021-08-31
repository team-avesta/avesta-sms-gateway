import { SmsGateway } from '../SmsGateway';
import { TwoFactorConfig } from './2factorConfig';

export class TwoFactor extends SmsGateway {
    constructor(private config: TwoFactorConfig) {
        super();
    }

    send(mobileNo: number, variables: object[]): Promise<any> {
        const options = {
            method: 'POST',
            url: `http://2factor.in/API/V1/${this.config.apiKey}/ADDON_SERVICES/SEND/TSMS`,
            data: {
                From: this.config.senderId,
                TemplateName: this.config.template,
                To: mobileNo                
            }
        }
        if(variables.length > 0) {
            Object.assign(options.data,...variables);
        }
       return this.smsRequest(options);
    }
}