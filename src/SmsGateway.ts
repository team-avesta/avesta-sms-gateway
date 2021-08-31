import axios, { AxiosRequestConfig } from 'axios';

export abstract class SmsGateway {
    abstract send(mobileNo: number, variables: object[]): Promise<any>;
    smsRequest(config: any): Promise<any> {
        return axios.request(config);
    }
}