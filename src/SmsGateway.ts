import axios, { AxiosRequestConfig } from 'axios';

export abstract class SmsGateway {
    abstract send(mobileNo: number, variables: object[]): Promise<any>;
    protected smsRequest(config: any): Promise<any> {
        return axios.request(config);
    }
}