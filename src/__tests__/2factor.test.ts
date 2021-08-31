import axios from 'axios';
import { SmsSender } from '../index'
import { TwoFactor } from '../2factor/2factor';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('2Factor tests', () => {

  mockedAxios.request.mockResolvedValue(Promise.resolve({ success: true }));

  const twoFactoConfig = {
    url: 'https://www.google.com',
    senderId: 'MYSMSID',
    template: 'my-template',
  };

  const twoFactor = new TwoFactor(twoFactoConfig);
  const smsSender = new SmsSender(twoFactor);

  async function assert2FactorSuccess(mobileNo: number, dynamicVar: object[]) {
    const result = await smsSender.sendSms(mobileNo, dynamicVar);
    expect(result.success).toBe(true);
  }

  it('should send message successfully', async () => {
    const dynamicVar = [
      {
        VAR1: 123456,
        VAR2: '987465',
      },
    ]
    await assert2FactorSuccess(9925653371, dynamicVar);
  });

  it('should send message with no dynamic variables', async () => {
    const dynamicVar = [] as object[];
    await assert2FactorSuccess(9925653371, dynamicVar);
  });
})
