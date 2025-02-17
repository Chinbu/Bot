import { setupAdminCommands } from './admin.js';
import { setupUserCommands } from './user.js';

export const setupCommands = (bot) => {
  setupAdminCommands(bot);
  setupUserCommands(bot);
};