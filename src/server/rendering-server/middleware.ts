import { Context } from 'koa';


/**
 * Middleware used to render the Front End App using EJS
 * @param template
 * @param isProduction
 */
export function ejs(template: 'index', isProduction: boolean) {
  return async (ctx: Context, next: Function) => {

    // favicon redirect
    if (ctx.path === '/favicon.ico') {
      return ctx.redirect('/assets/images/icons/favicon.ico');
    }

    // we are using react hash router so the only pages that should ever
    // be served are index (/) and oauth which is handled already
    if (ctx.path !== '/') {
      return next();
    }

    // all requests should be GET requests to view the app
    if (ctx.method !== 'GET') {
      ctx.throw(405);
    }

    // render the app using EJS and the specified template, passing variables to the template
    await ctx.render(
      template,
      {
        isProduction,
      },
    );
  };

}
