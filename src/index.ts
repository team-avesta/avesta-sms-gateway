import { TwoFactor } from "./2factor";

const sendOTPSms = (mobileNo: number, otp: number): Promise<any> => {
    const gateway = getSmsGateway();
    return gateway.sendSms(mobileNo, otp);
};

function getSmsGateway() {
    const activeGateway = process.env.ACTIVE_SMS_GATEWAY;
    switch (activeGateway) {
        case '2FACTOR':
            return new TwoFactor();
        default:
            throw new Error("SMS gateway is not configured.");
    }
}

export {
	sendOTPSms
};