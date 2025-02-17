import { Channel } from '../models/Channel.js';
import { Button } from '../models/Button.js';

export const setupAdminCommands = (bot) => {
  // Add button command
  bot.command('addbutton', async (ctx) => {
    if (!ctx.from.id.toString() === process.env.ADMIN_ID) return;

    const args = ctx.match.split(' ');
    if (args.length < 2) {
      return ctx.reply('Usage: /addbutton <button_name> <button_url>');
    }

    const [name, url] = args;
    try {
      await Button.create({
        name,
        url,
        addedBy: ctx.from.id
      });
      await ctx.reply('Button added successfully!');
    } catch (error) {
      await ctx.reply('Failed to add button.');
    }
  });

  // Add channel command
  bot.command('addchannel', async (ctx) => {
    if (!ctx.from.id.toString() === process.env.ADMIN_ID) return;

    const channelId = ctx.match;
    if (!channelId) {
      return ctx.reply('Usage: /addchannel <channel_id>');
    }

    try {
      await Channel.create({
        channelId,
        addedBy: ctx.from.id
      });
      await ctx.reply('Channel added successfully!');
    } catch (error) {
      await ctx.reply('Failed to add channel.');
    }
  });

  // Remove button command
  bot.command('removebutton', async (ctx) => {
    if (!ctx.from.id.toString() === process.env.ADMIN_ID) return;

    const name = ctx.match;
    if (!name) {
      return ctx.reply('Usage: /removebutton <button_name>');
    }

    try {
      await Button.deleteOne({ name });
      await ctx.reply('Button removed successfully!');
    } catch (error) {
      await ctx.reply('Failed to remove button.');
    }
  });

  // Remove channel command
  bot.command('removechannel', async (ctx) => {
    if (!ctx.from.id.toString() === process.env.ADMIN_ID) return;

    const channelId = ctx.match;
    if (!channelId) {
      return ctx.reply('Usage: /removechannel <channel_id>');
    }

    try {
      await Channel.deleteOne({ channelId });
      await ctx.reply('Channel removed successfully!');
    } catch (error) {
      await ctx.reply('Failed to remove channel.');
    }
  });

  // List channels command
  bot.command('listchannels', async (ctx) => {
    if (!ctx.from.id.toString() === process.env.ADMIN_ID) return;

    try {
      const channels = await Channel.find();
      const channelList = channels.map(c => `- ${c.channelId}`).join('\n');
      await ctx.reply(`Force Subscribe Channels:\n${channelList}`);
    } catch (error) {
      await ctx.reply('Failed to list channels.');
    }
  });
};