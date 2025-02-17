import { Channel } from '../models/Channel.js';

export const forceSubscribe = async (ctx, next) => {
  if (!ctx.from) return next();

  const channels = await Channel.find();
  
  for (const channel of channels) {
    try {
      const member = await ctx.api.getChatMember(channel.channelId, ctx.from.id);
      if (!['member', 'administrator', 'creator'].includes(member.status)) {
        await ctx.reply(`Please join @${channel.channelId} to continue.`);
        return;
      }
    } catch (error) {
      console.error(`Failed to check membership for channel ${channel.channelId}:`, error);
    }
  }

  return next();
};