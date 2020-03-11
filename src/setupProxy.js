import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app) {
  app.use(
    '/sap-values',
    createProxyMiddleware({
      target: 'https://sapvalues-api.herokuapp.com',
      changeOrigin: true,
      secure: false
    })
  );
}
