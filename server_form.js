// Start Express web app based on Express
const web = require('./src/form');
return new web('goethe.pl', '0.0.0.0',80, "./");
// const web = require('./server/express');
// return new web('FaaS Form / app.faas.ovh ', 'localhost',3001, "./public");

