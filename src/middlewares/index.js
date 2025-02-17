import { forceSubscribe } from './forceSubscribe.js';
import { verificationCheck } from './verificationCheck.js';

export const setupMiddlewares = (bot) => {
  bot.use(forceSubscribe);
  bot.use(verificationCheck);
};