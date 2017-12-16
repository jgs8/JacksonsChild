const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;
const ddiff = require('return-deep-diff');
const chalk = require('chalk');
client.on('ready', () => {
  console.log(chalk.bgGreen.black('I\'m Online\nI\'m Online'));
});

client.on('disconnect', () =>{
  console.log(`You have been disconnected at ${new Date()}`);
});

client.on('reconnecting', () => {
  console.log(`Reconnecting at ${new Date()}`);
});

// client.on('',''=>{});

// Guild Events
// client.on('guildDelete', guild => {
/*  console.log(`I have left ${guild.name} at ${new Date()}`);
});

client.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage(`I have joined ${guild.name}`);
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Please welcome ${member.user.username} to the server!`);
});

client.on('guildMemberRemove', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Please say goodbye to ${member.user.username} we will miss you!`);
});

client.on('guildMemberSpeaking', (member, speaking) => {
  let guild = member.guild;
  if (member.speaking) {
    guild.defaultChannel.sendMessage(`${member.user.username} is speaking!`);
  }
});

client.on('guildMemberUpdate',(oMember, nMember) => {
  console.log(ddiff(oMember, nMember));
});

client.on('guildUpdate',(oGuild, nGuild) => {
  console.log(ddiff(oGuild, nGuild));
});

client.on('guildBanAdd',(guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} was just banned!`);
});

client.on('guildBanRemove',(guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} was just unbanned!`);
});

// Client Events
client.on('channelCreate', channel => {
  console.log(`A ${channel.type} channel by the name of ${channel.name} was created ${channel.createdAt} with the ID of ${channel.id}`);
  if (channel.type === 'text') return channel.sendMessage('You were successful in creating this channel.');
});

client.on('channelDelete', channel => {
  console.log(`A ${channel.type} by the name of ${channel.name} was successfully deleted.`);
  channel.guild.defaultChannel.sendMessage('Channel Deleted');
});

client.on('channelUpdate', (oChannel, nChannel) => {
  console.log(ddiff(oChannel, nChannel));
});

client.on('channelPinsUpdate', (channel, time) => {
  channel.guild.defaultChannel.sendMessage(`The pins for ${channel.name} have been updated at ${time}`);
});

client.on('messageDelete', msg => {
  msg.guild.defaultChannel.sendMessage(`A message with the contents ${msg.cleanContent} was deleted from ${msg.channel}`);
});

client.on('messageDeleteBulk', messages => {
  console.log(`${messages.size} was deleted`);
});*/

// Spammy as hell
// client.on('typingStart', (channel, user) => {
//   console.log(`${user.username} has started typing in ${channel.name}`)
// });
//
// client.on('typingStop', (channel, user) => {
//   console.log(`${user.username} has stopped typing in ${channel.name}`)
// });

var prefix = "~"
client.on('message', msg => {
  let args = message.content.split(' ').slice(1);
  var result = args.join(' ');


  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "purge")) {
    let messagecount = parseInt(result);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
  } else

  if (message.content.startsWith(prefix + 'join')) {
		let voiceChan = message.member.voiceChannel;
		if (!voiceChan || voiceChan.type !== 'voice') {
			message.channel.sendMessage('No').catch(error => message.channel.sendMessage(error));
		} else if (message.guild.voiceConnection) {
			message.channel.sendMessage('I\'m already in a voice channel');
		} else {
			message.channel.sendMessage('Joining...').then(() => {
				voiceChan.join().then(() => {
					message.channel.sendMessage('Joined successfully.').catch(error => message.channel.sendMessage(error));
				}).catch(error => message.channel.sendMessage(error));
			}).catch(error => message.channel.sendMessage(error));
		}
	} else

	if (message.content.startsWith(prefix + 'leave')) {
		let voiceChan = message.member.voiceChannel;
		if (!voiceChan) {
			message.channel.sendMessage('I am not in a voice channel');
		} else {
			message.channel.sendMessage('Leaving...').then(() => {
				voiceChan.leave();
			}).catch(error => message.channel.sendMessage(error));
		}
	}

  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
  } else

  if (message.content.startsWith(prefix + 'send')) {
    client.channels.get('245491978601627648').sendMessage('Hello to the second channel!');
  } else

  if (message.content.startsWith(prefix + 'setgame')) {
    if (!result) {
      result = null;
    }
    client.user.setGame(result);
  } else

  if (message.content.startsWith(prefix + 'setstatus')) {
    if (!result) {
      result = 'online';
    }
    client.user.setStatus(result);
  } else

  if (message.content.startsWith(prefix + 'foo')) {
    message.channel.sendMessage('bar');
  } else

  if (message.content === (prefix + 'goodnight')) {
    message.channel.sendMessage('@everyone Good Night Everyone!')
  } else 

  if (message.content === (prefix + 'wakeup')) {
    message.channel.sendMessage('@everyone Wake the f up, and start talking in general!');
  } else 

  if (message.content === (prefix + 'mod')) {
    message.reply('has called for a moderator, will 1 please respond? @MOD');
  } else 

  if (message.content === (prefix + 'admin')) {
    message.reply('has called for an admin, will one please respond? @Admin');
  }









});

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.BOT_TOKEN);
