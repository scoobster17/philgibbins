import * as Compose from 'koa-compose';
import * as Mount from 'koa-mount';
import * as Router from 'koa-router';
import { Context } from 'koa';
import { v1 } from './v1';

const versions = ['v1'];

export default Compose([

  // mount v1 endpoints
  Mount('/v1', Compose(
    [ ...v1.map((router) => router.middleware()) ],
  )),

  // return the available versions of the api
  new Router().get('/', (ctx: Context) => {
    ctx.body = { versions };
  }).middleware(),
]);
