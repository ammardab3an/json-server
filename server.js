const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middleWares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middleWares);
server.use(router);

server.listen(port);