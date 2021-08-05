import * as config from 'config';
import { RenderingServer } from './rendering-server';
import * as Winston from 'winston';
import Signals = NodeJS.Signals;
import { Server } from '@philgibbins/server/dist';
import * as fs from 'fs';
import * as path from 'path';


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
 * @param fileName
 */
const readFile = async (fileName: string) => {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(path.resolve(process.cwd(), fileName), (err: NodeJS.ErrnoException | null, data: Buffer): void => {
      if (err) {
        return reject(err);
      }

      return resolve(data.toString());
    });
  });
};

/**
 *
 */
const start = async () => {
  const isProduction = (process.env.NODE_ENV === 'production');
  const certificateFilePath = config.get<string>('servers.http2.auth.certificate');
  const keyFilePath = config.get<string>('servers.http2.auth.key');
  // TODO: passphrase

  Winston.info('initializing API Server');
  // const staticApiServer = new ApiServer();
  const staticApiServer = new Server({
    http2: {
      port: config.get<number>('servers.http2.port'),
      auth: {
        certificate: await readFile(certificateFilePath),
        key: await readFile(keyFilePath),
      },
    },
  });
  const apiServerPort = config.get<number>('apiServer.http.port');
  await staticApiServer.start();
  Winston.info(`API Server listening on port: ${ apiServerPort }`);

  Winston.info('initializing Rendering Server');
  const staticRenderingServer = new RenderingServer(isProduction);
  const renderingServerPort = config.get<number>('renderingServer.http.port');
  const renderingServer = await staticRenderingServer.serve(renderingServerPort);
  Winston.info(`Rendering Server listening on port: ${ renderingServerPort }`);

  const signal = await waitForQuitSignal();
  Winston.info(`got ${ signal }`);

  await staticApiServer.stop();
  Winston.info('APIServer terminated');

  await renderingServer.close();
  Winston.info('RenderingServer terminated');
};

start().catch((err) => {
  Winston.error('server error', err);
  process.exit(1);
});
