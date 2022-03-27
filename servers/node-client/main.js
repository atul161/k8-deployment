const express = require('express')
const Process = require("process");
const app = express()
const axios = require('axios');

async function bootstrap() {
    console.log("Inside client")
    const url = process.env.URL
    console.log("Client url is", url)
    while (true){
        try{
            await axios.get(url).then(resp => {
                console.log(resp.data);
            });
        }catch (e) {
           //
        }
        console.log("sleeped for one minute")
        await sleep(1000 * 10)
    }
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
bootstrap()
