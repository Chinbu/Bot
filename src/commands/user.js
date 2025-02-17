import { generateArolinksUrl, generateTelegramLinkUrl } from '../services/shortener.js';
import { Verification } from '../models/Verification.js';

export const setupUserCommands = (bot) => {
  bot.command('start', async (ctx) => {
    await ctx.reply('Welcome! Please complete the verification process to continue.');
  });

  bot.command('verify', async (ctx) => {
    const userId = ctx.from.id.toString();
    const verification = await Verification.findOne({
      userId,
      expiresAt: { $gt: new Date() }
    });

    if (verification) {
      return ctx.reply('You are already verified!');
    }

    try {
      const verificationUrl = await generateArolinksUrl(`https://t.me/${ctx.me.username}?start=verify_${userId}`);
      await ctx.reply(`Please complete your verification:\n${verificationUrl}`);
    } catch (error) {
      await ctx.reply('Verification failed. Please try again later.');
    }
  });
};