import "dotenv/config";
import fetch from "node-fetch";
import bot from "./bot.js";

function sendMsg(regex, msg2){
    bot.onText(regex, (msg) => {
        bot.sendMessage(msg.chat.id, msg2)
    })
}

function fetchMsg(regex, options, link, arg){
    bot.onText(regex, (msg) => {
        fetch(link, options)
        .then(res => res.json())
        .then(dt => {
            for (let i in arg){
                bot.sendMessage(msg.chat.id, dt[arg[i]])
            }
        })
        .catch(err => bot.sendMessage(msg.chat.id, err.msg))
    })
}

export {sendMsg, fetchMsg};