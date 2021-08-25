export interface SmsGateway {
    sendSms(mobileNo: number, otp:number): Promise<void>;
}