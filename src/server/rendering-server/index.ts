import * as Http from 'http';
import * as Koa from 'koa';
import * as Render from 'koa-ejs';
import * as Serve from 'koa-static';
import * as Net from 'net';
import * as Path from 'path';
import { ejs } from './middleware';


/**
 *
 */
export class RenderingServer {

  app: Koa;

  /**
   *
   * @param isProduction
   */
  constructor(isProduction: boolean) {
    this.app = new Koa();

    // add 'render' method from ejs to rendering app ctx
    Render(this.app, {
      debug: false,
      layout: false,
      viewExt: 'ejs',
      root: Path.join(__dirname, __dirname.includes('src') ? '..' : '', '../../dist/views'),
      cache: isProduction,
    });

    // serve front end app assets e.g. css, js, fonts, images
    this.app.use(Serve('public'));

    // All other routes should render the front end app.
    this.app.use(ejs('index', isProduction));
  }

  /**
   *
   * @param port
   */
  async serve(port: number): Promise<Net.Server> {
    return await new Promise<Net.Server>((resolve) => {
      const server = Http.createServer(this.app.callback())
        .listen(port, () => resolve(server));
    });
  }
}
