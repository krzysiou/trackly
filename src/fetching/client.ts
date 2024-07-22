import axios from 'axios';

const httpClient = axios.create();

const getFetch = async <T>(
  url: string,
  token: string,
  setError?: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const { data } = await httpClient.get<T>(url, {
      headers: { Authorization: token },
    });

    return data;
  } catch (error) {
    if (setError) setError(error.response?.data?.message);
    else console.error(error);
  }
};

const postFetch = async <T>(
  url: string,
  body: object,
  token: string,
  setError?: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const { data } = await httpClient.post<T>(url, body, {
      headers: { Authorization: token },
    });

    return data;
  } catch (error) {
    if (setError) setError(error.response?.data?.message);
    else console.error(error);
  }
};

export { httpClient, postFetch, getFetch };
