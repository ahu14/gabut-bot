import "dotenv/config";
import fetch from "node-fetch";
import bot from "./bot.js";


// to greet people
let helo = new RegExp('hello');

bot.onText(helo, (msg) => {
    bot.sendMessage(msg.chat.id, 'hello');
})


// to get dad jokes
let joke = new RegExp('/dadjoke');
let option = {
    headers: {
        'Accept': 'application/json'
    }
}

bot.onText(joke, (msg) => {
    fetch('https://icanhazdadjoke.com/', option)
    .then(res => res.json())
    .then(data => bot.sendMessage(msg.chat.id, data.joke))
    .catch(err => bot.sendMessage(msg.chat.id, err.msg));
})

export default bot;