import axios from 'axios';

export const generateArolinksUrl = async (url) => {
  try {
    const response = await axios.post('https://api.arolinks.com/v1/shorten', {
      url,
      api_token: process.env.AROLINKS_API_KEY
    });
    return response.data.shortUrl;
  } catch (error) {
    console.error('Arolinks API error:', error);
    throw new Error('Failed to generate Arolinks URL');
  }
};

export const generateTelegramLinkUrl = async (url) => {
  try {
    const response = await axios.post('https://api.telegramlink.in/v1/shorten', {
      url,
      api_token: process.env.TELEGRAMLINK_API_KEY
    });
    return response.data.shortUrl;
  } catch (error) {
    console.error('TelegramLink API error:', error);
    throw new Error('Failed to generate TelegramLink URL');
  }
};