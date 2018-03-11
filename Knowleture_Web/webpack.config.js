const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'development') {
    module.exports = require('./Configs/webpack/env/webpack.dev.js');
} else {
    module.exports = require('./Configs/webpack/env/webpack.prod.js');
}