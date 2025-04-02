const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });
const mattPatern =  /([!-/:-@[-`{-~m]\s*a\s*t\s*t|m\s*[!-)+-/:-@[-`{-~a]\s*t\s*t|m\s*a\s*[!-/:-@[-`{-~t]\s*t|m\s*a\s*t\s*[!-/:-@[-`{-~t]|[!-/:-@[-`{-~m]\s*a\s*t\s*h\s*e\s*w|m\s*[!-/:-@[-`{-~a]\s*t\s*h\s*e\s*w|\s*m\s*a\s*[!-/:-@[-`{-~t]\s*h\s*e\s*w|m\s*a\s*t\s*[!-/:-@[-`{-~h]\s*e\s*w|m\s*a\s*t\s*h\s*[!-/:-@[-`{-~e]\s*w|m\s*a\s*t\s*h\s*e\s*[!-/:-@[-`{-~w])/gi

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.MessageCreate, async message =>{
  if (mattPatern.test(message.content)){
    await message.reply("Please censor that word my PTSD is flaring up again :pray:");
    try{
      await message.delete();
    } catch (e) {
      console.error(`Error occured: ${e}`)
    }
  }
})

client.on(Events.MessageUpdate, () => {}, async message => {
  if (mattPatern.test(message.content)){
    await message.reply("Please censor that word my PTSD is flaring up again :pray:");
    try{
      await message.delete();
    } catch (e) {
      console.error(`Error occured: ${e}`)
    }
  }
})

client.login(token);
