import axios from 'axios';
import { sendSms } from '../index'
import { TwoFactorConfig } from '../2factorConfig';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('2Factor tests', () => {

  mockedAxios.post.mockResolvedValue(Promise.resolve({ success: true }));

  const twoFactoConfig = {
    url: 'https://www.google.com',
    senderId: 'MYSMSID',
    template: 'my-template',
  };

  async function assert2FactorSuccess(config: TwoFactorConfig, mobileNo: number, dynamicVar: any[]) {
    const result = await sendSms('2FACTOR', config, mobileNo, dynamicVar);
    expect(result.success).toBe(true);
  }

  it('should send message successfully', async () => {
    const dynamicVar = [
      {
        VAR1: 123456,
        VAR2: '987465',
      },
    ]
    assert2FactorSuccess(twoFactoConfig, 9925653371, dynamicVar);
  });

  it('should send message with no dynamic variables', async () => {
    const dynamicVar = [] as object[];
    assert2FactorSuccess(twoFactoConfig, 9925653371, dynamicVar);
  });
})
