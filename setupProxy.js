const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://your-proxy-server-url.com',
      changeOrigin: true,
    })
  );
};
