'use strict'

const dotenv = require('dotenv')
const Discord = require('discord.js')
const client = new Discord.Client()

dotenv.config()

client.on('ready', () => {
    console.log('What if I was online? 😳');
});

client.on('message', msg => {
    msg.react('😳')
})

client.login(process.env.TOKEN)