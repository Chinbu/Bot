# Telegram Token Verification Bot

A Telegram bot that implements a two-step token verification system with force subscribe functionality and admin controls.

## Features

- ✅ Two-step token verification system
  - First verification using Arolinks (valid for 12 hours)
  - Second verification using TelegramLink (valid for next 12 hours)
- 🔒 Force subscribe to multiple channels
- 🎮 Admin controls for managing buttons and channels
- 📊 MongoDB integration for data persistence
- ⚡ Built with grammY framework

## Prerequisites

- Node.js 16 or higher
- MongoDB database
- Telegram Bot Token
- Arolinks API Key
- TelegramLink API Key

## Installation

1. Clone the repository
```bash
git clone [your-repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file from example
```bash
cp .env.example .env
```

4. Update `.env` with your credentials:
- BOT_TOKEN: Your Telegram bot token
- MONGODB_URI: Your MongoDB connection string
- ADMIN_ID: Your Telegram user ID
- AROLINKS_API_KEY: Your Arolinks API key
- TELEGRAMLINK_API_KEY: Your TelegramLink API key

## Usage

Start the bot:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## Admin Commands

- `/addbutton <button_name> <button_url>` - Add a button
- `/removebutton <button_name>` - Remove a button
- `/addchannel <channel_id>` - Add a force subscribe channel
- `/removechannel <channel_id>` - Remove a force subscribe channel
- `/listchannels` - View all force subscribe channels

## User Commands

- `/start` - Start the bot
- `/verify` - Begin verification process

## Project Structure

```
├── src/
│   ├── bot.js              # Main bot file
│   ├── commands/           # Bot commands
│   │   ├── admin.js       # Admin commands
│   │   ├── index.js       # Commands setup
│   │   └── user.js        # User commands
│   ├── config/            # Configuration files
│   │   └── database.js    # Database connection
│   ├── middlewares/       # Bot middlewares
│   │   ├── forceSubscribe.js
│   │   └── verificationCheck.js
│   ├── models/            # Database models
│   │   ├── Button.js
│   │   ├── Channel.js
│   │   └── Verification.js
│   └── services/          # External services
│       └── shortener.js   # URL shortener service
├── .env.example           # Environment variables example
└── package.json          # Project dependencies
```

## License

MIT