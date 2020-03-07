const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/sap-values',
    createProxyMiddleware({
      target: 'https://sapvalues-api.herokuapp.com',
      changeOrigin: true
    })
  );
};
