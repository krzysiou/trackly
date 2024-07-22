import axios from 'axios';

const httpClient = axios.create({
  headers: {
    'User-Agent': `Trackly ${axios.VERSION}`,
  },
});

const getFetch = async <T>(url: string, token: string) => {
  try {
    const { data } = await httpClient.get<T>(url, {
      headers: { Authorization: token },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

const postFetch = async <T>(url: string, body: object, token: string) => {
  try {
    const { data } = await httpClient.post<T>(url, body, {
      headers: { Authorization: token },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export { httpClient, postFetch, getFetch };
