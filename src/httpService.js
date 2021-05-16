const Koa = require('koa');
const app = new Koa();

function httpServe(win) {
  app.use(async ctx => {
    ctx.body = 'Hello World';
    win.webContents.send("sendMain", {a: 33})
  });

  app.listen(3000);
}

export default httpServe;