/**
 * Routes Configurations
*/

'use strict';

var path = require('path');

module.exports = function(app) {

  app.use('/users', require('../routes/user.route'));

  // // Bloqueio de rotas acesso
  // app.route('/:url(api|app)/*')
  // .get(function(req, res) {
  //   res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
  // });

  // Bloqueio de rotas acesso
  // app.route('/*')
  //   .get(function(req, res) {
  //     res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
  //   });
};
