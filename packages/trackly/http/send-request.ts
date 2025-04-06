import type { Endpoint } from '../consts/endpoint';

import { httpClient } from './http-client';

type SendRequest = (endpoint: Endpoint, body: object) => Promise<void>;

type SendRequestProvider = (url: string, appId: string) => SendRequest;

const sendRequestProvider: SendRequestProvider =
  (url, appId) => async (endpoint, body) => {
    try {
      await httpClient.post(`${url}${endpoint}`, {
        ...body,
        applicationId: appId,
      });
    } catch (error) {
      console.error(error);
    }
  };

export { sendRequestProvider, type SendRequest };
