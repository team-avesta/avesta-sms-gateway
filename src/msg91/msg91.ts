import { SmsGateway } from '../SmsGateway';
import { Msg91Config } from './msg91Config';

export class Msg91 extends SmsGateway {
    constructor(private config: Msg91Config) {
        super();
    }

    send(mobileNo: number, variables: any[]): Promise<any> {
        const options = {
            method: 'POST',
            url: 'https://api.msg91.com/api/v5/flow/',
            data: {
                sender: this.config.senderId,
                flow_id: this.config.flowId,
                mobiles: mobileNo
            },
            headers: {
                'authkey': this.config.authKey,
                'content-type': 'application/JSON'
            }
        }
        if (variables.length > 0) {
            Object.assign(options, ...variables);
        }
        return this.smsRequest(options);
    }
}