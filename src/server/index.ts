import * as config from 'config';
import { ApiServer } from './api-server';
import { RenderingServer } from './rendering-server';
import * as Winston from 'winston';
import Signals = NodeJS.Signals;


Winston.configure({
  level: process.env.LOG_LEVEL || 'info',
  transports: [new Winston.transports.Console()],
});

/**
 *
 */
async function waitForQuitSignal(): Promise<Signals> {
  return new Promise<Signals>((resolve) => {
    process.on('SIGINT', resolve);
    process.on('SIGTERM', resolve);
    process.on('SIGILL', resolve);
  });
}

/**
 *
 */
const start = async () => {
  const isProduction = (process.env.NODE_ENV === 'production');

  Winston.info('initializing API Server');
  const staticApiServer = new ApiServer();
  const apiServerPort = config.get<number>('apiServer.http.port');
  const apiServer = await staticApiServer.serve(apiServerPort);
  Winston.info(`API Server listening on port: ${ apiServerPort }`);

  Winston.info('initializing Rendering Server');
  const staticRenderingServer = new RenderingServer(isProduction);
  const renderingServerPort = config.get<number>('renderingServer.http.port');
  const renderingServer = await staticRenderingServer.serve(renderingServerPort);
  Winston.info(`Rendering Server listening on port: ${ renderingServerPort }`);

  const signal = await waitForQuitSignal();
  Winston.info(`got ${ signal }`);

  await apiServer.close();
  Winston.info('APIServer terminated');

  await renderingServer.close();
  Winston.info('RenderingServer terminated');
};

start().catch((err) => {
  Winston.error('server error', err);
  process.exit(1);
});
