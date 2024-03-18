import "dotenv/config";
import {fetchMsg, sendMsg} from "./function.js";

// to greet people
let hello = new RegExp('/hello');
sendMsg(hello, 'hello');


// to get dad jokes
let dadjoke = new RegExp('/dadJoke');
let option = {
    headers: {
        'Accept': 'application/json'
    }
}

fetchMsg(dadjoke, option, 'https://icanhazdadjoke.com/', ['joke']);


// to get indonesia dad jokes
let indodadjoke = new RegExp('/idDadJoke');
fetchMsg(indodadjoke, {}, 'https://candaan-api.vercel.app/api/text/random', ['data']);


// to get indonesia dad jokes
let chucknorrisjoke = new RegExp('/chuckNorrisJoke');
fetchMsg(chucknorrisjoke, {}, 'https://api.chucknorris.io/jokes/random', ['value']);


// to get random joke
let randomJoke = new RegExp('/randomJoke');
fetchMsg(randomJoke, {}, 'https://official-joke-api.appspot.com/random_joke', ['setup', 'punchline']);


// help messsage
let help = new RegExp('/help');
sendMsg(help, `
/randomJoke -> display random joke
/chuckNorrisJoke -> display chuck norris joke
/idDadJoke -> display Indonesian dad jokes in text
/dadJoke -> display dad jokes
/hello -> to greet the bot
`)