const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8082', // Backend server URL
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};
