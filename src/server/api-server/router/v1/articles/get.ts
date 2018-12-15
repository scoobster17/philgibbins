import { Context } from 'koa';
import * as Router from 'koa-router';
import * as config from 'config';
import got = require('got');


export const get = new Router()
  .get('/articles', async (ctx: Context) => {
    // ctx.request.body;

    // if (!x) {
    //   ctx.throw(400, 'field x is required');
    // }
    // if (!authorized) {
    //   ctx.throw(401);
    // }

    const port = config.get<number>('ghost.port');
    const secret = config.get<string>('ghost.clientSecret');

    try {
      const { body: articles } = await got(`http://localhost:${port}/ghost/api/v0.1/posts/?client_id=ghost-frontend&client_secret=${secret}`);

      ctx.body = articles;
      ctx.status = 200;

    } catch (error) {
      // do something
    }
  });
