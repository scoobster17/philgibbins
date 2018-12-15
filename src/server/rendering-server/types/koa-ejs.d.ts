import * as Application from 'koa';

export = render;

declare function render(app: Application, config: render.Config): void;

declare namespace render {
  interface Config {
    root: string;
    layout: boolean;
    viewExt: string;
    cache: boolean;
    debug: boolean;
  }
}
