export interface SmsGateway {
    send(mobileNo: number, variables:any[]): Promise<void>;
}