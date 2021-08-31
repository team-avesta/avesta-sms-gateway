import { SmsGateway } from '../SmsGateway';
import { Msg91Config } from './msg91Config';

export class Msg91 extends SmsGateway {
    constructor(private config: Msg91Config) {
        super();
    }

    send(mobileNo: number, variables: any[]): Promise<any> {
        const options = {
            url: this.config.url,
            method: 'POST',
            data: {
                mobiles: mobileNo,
                sender: this.config.senderId,
                flow_id: this.config.flowId
            }
        }
        if (variables.length > 0) {
            Object.assign(options, ...variables);
        }
        return this.smsRequest(options);
    }
}