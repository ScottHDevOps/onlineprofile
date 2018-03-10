import * as Express from 'express';
//import * as httpServer from 'http';


const app = new Express();
//const http = 

const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = 'Sup!';
    
});

app.use(router.routes());

app.listen(3000, function () {
    console.log('listening on *:3000');
});

console.log('Server running on port 3000');
