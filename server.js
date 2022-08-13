const jsonServer = require('json-server');
const server = jsonServer.create();
const db = require('./db/index.js');
const router = jsonServer.router(db); // <== Will be created later
const middleWares = jsonServer.defaults();
const port = process.env.PORT || 5500; // <== You can change the port

server.use(middleWares);

server.use((req, res, next) => {
    res.set('Cache-Control', 'public, max-age=315360000');
    next();
});

server.use(router);

server.listen(port);