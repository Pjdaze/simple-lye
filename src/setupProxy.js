const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    proxy('/sap-values', {
      target: 'https://sapvalues-api.herokuapp.com/',
      secure: false,
      changeOrigin: true
    })
  );
};
