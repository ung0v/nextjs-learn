// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';

type Data = {
  message: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(404).json({
      message: 'method not supported',
    });
  }

  return new Promise((resolve, reject) => {
    // don't send cookie to server
    req.headers.cookie = '';

    const loginInterceptor: ProxyResCallback = (proxyRes, req, res) => {
      // Read the API's response body from
      // the stream:
      let apiResponseBody = '';
      proxyRes.on('data', (chunk) => {
        apiResponseBody += chunk;
      });
      // Once we've read the entire API
      // response body, we're ready to
      // handle it:
      proxyRes.on('end', () => {
        try {
          // Extract the authToken from API's response:
          const { accessToken, expiredAt } = JSON.parse(apiResponseBody);
          console.log(accessToken);

          // Set the authToken as an HTTP-only cookie.
          // We'll also set the SameSite attribute to
          // 'lax' for some additional CSRF protection.
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== 'development',
          });
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          });
          // Our response to the client won't contain
          // the actual authToken. This way the auth token
          // never gets exposed to the client.
          (res as NextApiResponse).status(200).json({ message: 'login successfully' });
        } catch (err) {
          (res as NextApiResponse).status(500).json({ message: 'something went wrong' });
        }

        resolve(true);
      });
    };
    proxy.once('error', reject);
    proxy.once('proxyRes', loginInterceptor);
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    });
  });
}
