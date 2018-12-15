import * as Http from 'http';
import { Context } from 'koa';
import * as Koa from 'koa';
import * as Mount from 'koa-mount';
import * as Net from 'net';
import Router from './router'


/**
 *
 */
export class ApiServer {

  app: Koa;

  constructor() {
    this.app = new Koa();

    this.app.use(Mount('/api', (ctx: Context) => Router(ctx)));
  }

  /**
   *
   * @param port
   */
  async serve(port: number): Promise<Net.Server> {
    return await new Promise<Net.Server>((resolve, reject) => {
      const server = Http.createServer(this.app.callback())
        .listen(port, (err: any) => err ? reject(err) : resolve(server));
    });
  }
}
