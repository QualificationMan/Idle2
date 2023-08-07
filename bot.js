const discord = require('discord.js');

const client = new discord.Client();
const time = ['2750', '3000', '4000']; 

//guilds 
const guild1 = ["1124370345042915399"]; // Cosmic conquers id

//bots 
const dev = ["518759221098053634"]; // idle miner bot
const bot1 = ["785286985023356959"]; // Rebirth rusher bot

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (!bot1.includes(message.author.id)) return;
  if (!guild1.includes(message.guild.id)) return;
  if (message.content.includes("958125966171967578")) {
    setTimeout(() => { 
      message.channel.send('/hunt'); 
    }, time[Math.floor(Math.random() * time.length)]);
  } 
  else if (message.content.includes("958125967061184593")) {
    setTimeout(() => { 
      message.channel.send('/fish');
    }, time[Math.floor(Math.random() * time.length)]);
  }
});

client.login("NDA3NjYyMjk4MTk5NDkwNTYy.GAwOao.AIUlasSELr1ktkokzVUVGYFxy_HmEKnInRMlho");
//token 
////////////////////////////