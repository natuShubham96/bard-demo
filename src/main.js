const {Bot} = require("bard-builder");
const setup_flow = require("./flow.js");
const Gateway = require("./gateway.js");

const main = function() {
    /* declare the chatbot instance */
    const bot = new Bot({name: "my-faq-bot"});

    setup_flow(bot);
    
    bot.start();

    const gateway = new Gateway(8888, bot);
    gateway.pullProcess();

    /* here we declare the dialogs */
    /* here we start the chatbot */
    /* here we setup and start the message gateway */
}

main();