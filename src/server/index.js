import express from 'express';
import handleRender from './handleRender';

const port = 3000;
const server = express();

server.use(express.static('/built'));
server.get('*', handleRender);

server.listen(port, () => {
    console.info(`Express listening on port ${port}`);
});
