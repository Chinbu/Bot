import { Verification } from '../models/Verification.js';
import { generateTelegramLinkUrl } from '../services/shortener.js';

export const verificationCheck = async (ctx, next) => {
  if (!ctx.from) return next();

  const userId = ctx.from.id.toString();
  const verification = await Verification.findOne({
    userId,
    expiresAt: { $gt: new Date() }
  });

  if (!verification) {
    await ctx.reply('Please verify first using /verify command.');
    return;
  }

  // Check if second verification is needed
  if (verification.step === 1 && 
      new Date(verification.verifiedAt).getTime() + (12 * 60 * 60 * 1000) < Date.now()) {
    try {
      const verificationUrl = await generateTelegramLinkUrl(
        `https://t.me/${ctx.me.username}?start=verify2_${userId}`
      );
      await ctx.reply(`Please complete your second verification:\n${verificationUrl}`);
      return;
    } catch (error) {
      console.error('Second verification generation failed:', error);
    }
  }

  return next();
};