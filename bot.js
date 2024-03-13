import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(process.env.API_TOKEN, {polling: true});

export default bot;