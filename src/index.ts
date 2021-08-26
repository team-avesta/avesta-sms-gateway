import { TwoFactor } from './2factor';
import { SupportedSmsGateway } from './SupportedSmsGateway';
import { SmsGatewayConfig } from './SmsGatewayConfig';

const sendSms = (gatewayName: SupportedSmsGateway, config: SmsGatewayConfig, mobileNo: number, variables: any[]): Promise<any> => {
    const gateway = getSmsGateway(gatewayName, config);
    return gateway.send(mobileNo, variables);
}

function getSmsGateway(gatewayName: SupportedSmsGateway, config: SmsGatewayConfig) {
    switch (gatewayName) {
        case '2FACTOR':
            return new TwoFactor(config);
        default:
            throw new Error("SMS gateway is not configured.");
    }
}

export {
    sendSms
};