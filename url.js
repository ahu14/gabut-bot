import "dotenv/config";
import {fetchMsg, sendImg, sendMsg} from "./function.js";


// to greet people
let helo = new RegExp('hello');
sendMsg(helo, 'hello');


// to get dad jokes
let dadjoke = new RegExp('/dadjoke');
let option = {
    headers: {
        'Accept': 'application/json'
    }
}

fetchMsg(dadjoke, option, 'https://icanhazdadjoke.com/', ['joke']);


// to get indonesia dad jokes
let indodadjoke = new RegExp('/iddadjoke');
fetchMsg(indodadjoke, {}, 'https://candaan-api.vercel.app/api/text/random', ['data']);


// to get image meme
let indoDadImage = new RegExp('/iddadimage');
sendImg(indoDadImage, {}, 'https://candaan-api.vercel.app/api/image/random', 'data', 'url');


// to get indonesia dad jokes
let chucknorrisjoke = new RegExp('/chucknorrisjoke');
fetchMsg(chucknorrisjoke, {}, 'https://api.chucknorris.io/jokes/random', ['value']);


// to get random joke
let randomJoke = new RegExp('/randomJoke');
fetchMsg(randomJoke, {}, 'https://official-joke-api.appspot.com/random_joke', ['setup', 'punchline']);