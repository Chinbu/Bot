import { Bot, session } from 'grammy';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import { setupCommands } from './commands/index.js';
import { setupMiddlewares } from './middlewares/index.js';

// Load environment variables
dotenv.config();

// Initialize bot with token
const bot = new Bot(process.env.BOT_TOKEN);

// Set up session middleware
bot.use(session({
  initial: () => ({
    verificationStep: 0,
    lastVerification: null
  })
}));

// Connect to database
await connectDB();

// Set up middlewares
setupMiddlewares(bot);

// Set up commands
setupCommands(bot);

// Start bot
bot.start({
  onStart: (botInfo) => {
    console.log(`Bot @${botInfo.username} started!`);
  },
});