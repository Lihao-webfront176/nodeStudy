const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const formidable = require('koa-formidable');//处理请求体数据

router.post('upload', async (ctx, next) => {
	ctx.body = 'good';
})
.get('/', async (ctx) => {
	ctx.body = 'hello ';
})

app.use(async (ctx, next) => {
	ctx.body = 'hello world!';
	ctx.response.set('Access-Control-Allow-Origin', '#');
	ctx.response.set('Access-Control-Allow-Origin', 'PUT,POST,GET,DELETE,OPTIONS');
	await next();
})
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8888, function () {
	console.log('listen 8888');
})