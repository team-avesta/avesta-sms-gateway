import { SmsGateway } from '../SmsGateway';
import { Msg91Config } from './msg91Config';

export class Msg91 extends SmsGateway {
    url: string;
    authKey: string;
    senderId: string;
    flowId: string;

    constructor(config: Msg91Config) {
        super();
        this.url = config.url;
        this.authKey = config.authKey;
        this.senderId = config.senderId;
        this.flowId = config.flowId;
    }

    send(mobileNo: number, variables: any[]): Promise<any> {
        const options = {
            url: this.url,
            method: 'POST',
            data: {
                mobiles: mobileNo,
                sender: this.senderId,
                flow_id: this.flowId
            }
        }
        if (variables.length > 0) {
            Object.assign(options, ...variables);
        }
        return this.smsRequest(options);
    }
}

export default {
    Msg91
}