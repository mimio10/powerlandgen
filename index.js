

const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs')	
let parametregalackgen = JSON.parse(fs.readFileSync(__dirname+"/parametregalackgen.json"));	
let prefix = parametregalackgen['prefix'];    
let TOKEN = ("MTA1ODczNDIwMTIxMTQ2MTcxMg.Gz69ht.xCYYgxTcYxq2xziH7smxuWTEd8F65MWWfmKAog");    
let GUILD = ("1053883223253471302"); 
let cooldown = parametregalackgen['cooldown'] 
const Nombot = "Powerland" 
const generated = new Set();
const cooldowns = new Discord.Collection();
const chalk = require('chalk');
const moment = require('moment');


  bot.on('ready', msg => {
  console.log("");                                   
  console.log((chalk.cyan(`                                            #####                                      #####                #     #  #####  `)));
  console.log((chalk.cyan(`                                           #     #   ##   #        ##    ####  #    # #     # ###### #    # #     # #     # `)));
  console.log((chalk.cyan(`                                           #        #  #  #       #  #  #    # #   #  #       #      ##   # #     #       # `)));
  console.log((chalk.cyan(`                                           #  #### #    # #      #    # #      ####   #  #### #####  # #  # #     #  #####  `)));
  console.log((chalk.cyan(`                                           #     # ###### #      ###### #      #  #   #     # #      #  # #  #   #  #       `)));
  console.log((chalk.cyan(`                                           #     # #    # #      #    # #    # #   #  #     # #      #   ##   # #   #       `)));
  console.log((chalk.cyan(`                                            #####  #    # ###### #    #  ####  #    #  #####  ###### #    #    #    ####### `)));
  console.log("");                                  
  console.log((chalk.yellow(`                                                               Crée par GalackQSM#0895 !`)));  
  console.log((chalk.yellow(`                                                                © 2021 GalackQSM, Inc.`))); 
  console.log("");                                   
  console.log((chalk.red(`                                                         Discord: https://discord.gg/Skiddddd`)));   
  console.log((chalk.red(`                                                       Twitter: https://twitter.com/Skiddddd`)));   
  console.log((chalk.red(`                                                        Github: https://github.com/Skiddddd`)));   
  console.log((chalk.red(`                                                        Youtube: https://youtube.com/Skiddddd`)));   
  console.log("");                                  

  console.log(`Statistiques globales : \n\nLe bot a un total de ${bot.guilds.size} serveurs. \nPour un total de ${bot.users.size} membres.`)
  console.log("Connecté en tant que " + bot.user.id + " | Prefix : " + prefix+ " | Nombre de Serveurs "+ bot.guilds.size +" | Nombres de salons "+ bot.channels.size +" | Utilisateur totaux "+ bot.users.size +" | Nombre d'emojis totaux "+ bot.emojis.size +'');
  bot.user.setActivity("*surveillance - comptes");
});

bot.on("message", async message => {	
    prefix = parametregalackgen['prefix'];	
    cooldown = parametregalackgen['cooldown']	
    if (message.author.bot) return;	
    var command = message.content	
    .toLowerCase()	
    .slice(prefix.length)	
    .split(" ")[0];	

    if (command === "gen") {	
        if (generated.has(message.author.id)) {	
                 const embed = new Discord.RichEmbed()
                .setTitle("Merci de patientez")
                .setURL("https://media.discordapp.net/attachments/962854733792575518/1040053706399416340/autocollants-homer-fuck2.JPG")
                .setDescription(":no_entry: owner te bloque cela "+message.author+"")
                .setFooter(`develloper par owner`)
                .setTimestamp()
                .setColor("#0947e3");
                message.channel.send(embed);
        } else {	

            let messageArray = message.content.split(" ");	
            let args = messageArray.slice(1);	
                 const errorgen = new Discord.RichEmbed()
                .setTitle("Service introuvable")
                .setURL("https://media.discordapp.net/attachments/962854733792575518/1040053706399416340/autocollants-homer-fuck2.JPG")
                .setDescription(":no_entry: Veuillez préciser le service que vous souhaitez!")
                .setFooter(`develloper par owner`)
                .setTimestamp()
                .setColor("#0947e3");
                if (!args[0]) return message.channel.send(errorgen);

            let data;	
            try{	
                data = fs.readFileSync(__dirname + "/comptes/" + args[0].toLowerCase() + ".json")	

            } catch{	
                const error = new Discord.RichEmbed()
                .setTitle("Service introuvable")
                .setURL("https://media.discordapp.net/attachments/962854733792575518/1040053706399416340/autocollants-homer-fuck2.JPG")
                .setDescription(":no_entry: Le service `"+args[0]+"` n'existe pas")
                .setFooter(`develloper par owner`)
                .setTimestamp()
                .setColor("#0947e3");
                return message.channel.send(error);

            } 	
            let account = JSON.parse(data)
                const compte = new Discord.RichEmbed()
                .setTitle("Aucun compte disponible")
                .setURL("https://media.discordapp.net/attachments/962854733792575518/1040053706399416340/autocollants-homer-fuck2.JPG")
                .setDescription(":no_entry: Il n'y a aucun compte disponible pour `"+args[0]+"`")
                .setFooter(`develloper par owner`)
                .setTimestamp()
                .setColor("#e30935");
                if (account.length <= 0) return message.channel.send(compte);


                const embed = {	
                    title: "Votre compte " + args[0] + " c'est généré avec succès!",	
                    description: ":ballot_box_with_check: J'ai envoyer votre compte en message privé!",	
                    color: 3092790, 
					"image": {
                    "url": "https://bilalmania.com/images/cards//2022/07/gif-BONNE-ANNEE-2023-1.gif"
                    },
                    footer: {	
                        text: `© 2023 ${Nombot}`	
                    },	
                };	

                await message.channel.send({ embed });	
                await generated.add(message.author.id);	
                await message.author.send({embed: {	
                    "title": "tu a recu ton compte   " + args[0] + "  par owner#6762",	
                    "color":25500,  
                    "image": {
                    "url": "https://www.gif-maniac.com/gifs/41/40977.gif"
                    },
                    "footer": {   
                        "text": `© 2023 ${Nombot}`    
                    },  
                    "fields": [	
                      {	
                        "name": "Pseudo/Email",	
                        "value": "`"+account[0].email+"`"	
                      },	
                      { 
                        "name": "Mot de passe", 
                        "value": "`"+account[0].mdp+"`" 
                      },
                      { 
                        "name": "Copier-coller", 
                        "value": "`"+account[0].email+":"+account[0].mdp+"`" 
                      },
                    ]	
                  }	
                })	
                account.splice(0,1)	
                console.log(account)	
                fs.writeFileSync(__dirname + "/comptes/" + args[0] + ".json", JSON.stringify(account));	
                setTimeout(() => {	
                    generated.delete(message.author.id);	
                },  cooldown);	
        }	
    }	
if(message.channel.type==="dm"||message.channel.type==="group") {
    //alors je fait rien
    return false;
}
    if (command === "check") {	
        let messageArray = message.content.split(" ");	
        let args = messageArray.slice(1);	
        let data;	
                const errorcheck = new Discord.RichEmbed()
                .setTitle("Merci de choisir un service")
                .setURL("https://media.discordapp.net/attachments/962854733792575518/1040053706399416340/autocollants-homer-fuck2.JPG")
                .setDescription(":no_entry: Veuillez préciser le service que vous souhaitez!")
                .setFooter(`develloper par owner`)
                .setTimestamp()
                .setColor("#0972e3");
                if (!args[0]) return message.channel.send(errorcheck);
	
        try{	
            data = JSON.parse(fs.readFileSync(__dirname + "/comptes/" + args[0] + ".json"))	
                const embed = new Discord.RichEmbed()
                .setTitle("Voici le stock de "+args[0]+"")
                .setURL("https://media.discordapp.net/attachments/962854733792575518/1040053706399416340/autocollants-homer-fuck2.JPG")
                .setDescription("Il y a `"+data.length+" comptes` dans `"+args[0]+"`")
                .setFooter(`develloper par owner`)
                .setTimestamp()
                .setColor("#0972e3");
                message.channel.send(embed);

        } catch {	
                const error = new Discord.RichEmbed()
                .setTitle("Service introuvable")
                .setURL("https://media.discordapp.net/attachments/962854733792575518/1040053706399416340/autocollants-homer-fuck2.JPG")
                .setDescription(":no_entry: Le service `"+args[0]+"` n'existe pas")
                .setFooter(`develloper par owner`)
                .setTimestamp()
                .setColor("#2f3136");
                return message.channel.send(error);
        } 	
    }	

    if (command === "change"){	
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Désolé, vous ne pouvez pas le faire, vous n'êtes pas un administrateur!");	
        let messageArray = message.content.split(" ");	
        let args = messageArray.slice(1);	
        try{	
            parametregalackgen[args[0].toLowerCase()] = args[1].toLowerCase()	
            fs.writeFileSync(__dirname+"/parametregalackgen.json", JSON.stringify(parametregalackgen));	
                const change = new Discord.RichEmbed()
                .setTitle(""+args[0]+" changer avec succès")
                .setURL("https://media.discordapp.net/attachments/962854733792575518/1040053706399416340/autocollants-homer-fuck2.JPG")
                .setDescription(":ballot_box_with_check: `"+args[0]+"` changé en `"+args[1]+"`")
                .setFooter(`develloper par owner`)
                .setTimestamp()
                .setColor("#0972e3");
                message.channel.send(change);

        } catch{	
            message.reply("Une erreur s'est produite")	
        }	
    }	

    if(command === "stock"){	
        let stock = []	

        fs.readdir(__dirname + "/comptes/", function (err, files) {	
            if (err) {	
                return console.log('Impossible de scanner le répertoire: ' + err);	
            } 	

            files.forEach(function (file) {	
                if (!file.includes(".json")) return	
                if (file.includes('package-lock') || file.includes('package.json') || file.includes('parametregalackgen.json')) return	
                stock.push(file) 	
            });	
            console.log(stock)	

            stock.forEach(async function (data) {	
                let acc = await fs.readFileSync(__dirname + "/comptes/" + data)	
                const embed = new Discord.RichEmbed()
                .setTitle(`comptes dans base de donnée`)
                .setURL("https://media.discordapp.net/attachments/962854733792575518/1040053706399416340/autocollants-homer-fuck2.JPG")
                .setDescription("`"+data.replace(".json","")+"` a `"+JSON.parse(acc).length+" comptes`\n")
                .addField('Développeur de la source', `\`owner\``, true) //NE PAS TOUCHER CETTE LIGNE
                .setFooter(`develloper par owner`)
                .setTimestamp()
                .setColor("#0972e3");
                message.channel.send(embed);

            })	

        });	
    }	

    if(command === "add") {	
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Désolé, vous ne pouvez pas le faire, vous n'êtes pas un administrateur!");	
        let messageArray = message.content.split(" ");	
        let args = messageArray.slice(1);	
        var acc = args[1].split(":");	

        fs.readFile(__dirname + "/comptes/" + args[0].toLowerCase() + ".json",function(err, data) { 	
        if(err){	
            let newnewData = 	
            [{	
                "email":acc[0],	
                "mdp":acc[1]	
            }]	
            try {	
                fs.writeFileSync(__dirname + "/comptes/" + args[0].toLowerCase()+".json", JSON.stringify(newnewData))	
                      const embed = new Discord.RichEmbed()
                     .setTitle(`Le service ${args[0]} viens d'être crée avec succès`)
                     .setURL("https://media.discordapp.net/attachments/962854733792575518/1040053706399416340/autocollants-homer-fuck2.JPG")
                     .setDescription(`:ballot_box_with_check: Service ${args[0]} créé et compte ajouté`)
                     .setFooter(`develloper par owner`)
                     .setTimestamp()
                     .setColor("#0972e3");
                   message.channel.send(embed);

            } catch {	
                message.channel.send('**Erreur** Impossible de créer un service et d\'ajouter ce compte!')	

            }	
        }	

        else {	
            let newData = {"email":acc[0],"mdp":acc[1]}	
            data = JSON.parse(data)	
            try{	
                data.push(newData)	
                fs.writeFileSync(__dirname + "/comptes/" + args[0].toLowerCase()+".json", JSON.stringify(data))	
                      const embed = new Discord.RichEmbed()
                     .setTitle(`Compte ajouté avec succès`)
                     .setURL("https://media.discordapp.net/attachments/962854733792575518/1040053706399416340/autocollants-homer-fuck2.JPG")
                     .setDescription(`:ballot_box_with_check: Compte ajouté avec succès`)
                     .setFooter(`develloper par owner`)
                     .setTimestamp()
                     .setColor("#0972e3");
                   message.channel.send(embed);

            } catch {	
                message.channel.send('**Erreur** Impossible d\'ajouter ce compte!')	
            }	
        }	
    }); 	
}	
if(command === "botinfo") {	
    const d = moment.duration(message.client.uptime);
    const days = (d.days() == 1) ? `${d.days()} jour` : `${d.days()} jours`;
    const hours = (d.hours() == 1) ? `${d.hours()} heure` : `${d.hours()} heures`;

    const botinfo = new Discord.RichEmbed()
      .setTitle(`Informations sur ${Nombot}`)
      .setThumbnail(message.guild.iconURL)
      .setDescription(`${Nombot} est un bot Discord pour générer des compte en tout genre.`)
      .addField('Pseudo', message.client.user.username, true)
      .addField('Discriminateur', `\`#${message.client.user.discriminator}\``, true)
      .addField('ID', `\`${message.client.user.id}\``, true)
      .addField('Surnom', (message.guild.me.nickname) ? message.guild.me.nickname : '`Aucun`', true)
      .addField('Prefix', `\`${prefix}\``, true)
      .addField('Membres totals', `\`${message.client.users.size - 1}\``, true)
      .addField('Serveurs', `\`${message.client.guilds.size}\``, true)
      .addField('Disponibilité', `\`${days}\` et \`${hours}\``, true)
      .addField('Version actuelle', `\`2.0.1\``, true)
      .addField('Développeur de la source', `\`owner\``, true) //NE PAS TOUCHER CETTE LIGNE
      .setFooter(`develloper par owner`)
      .setTimestamp()
      .setColor("#0972e3");
    message.channel.send(botinfo);
}
if(command === "help") {	
    if (!message.member.hasPermission("ADMINISTRATOR")) {	
      const embed = new Discord.RichEmbed()
      .setTitle(`Commandes de ${Nombot}`)
      .setURL("https://media.discordapp.net/attachments/962854733792575518/1040053706399416340/autocollants-homer-fuck2.JPG")
      .setThumbnail(message.guild.iconURL)
      .setDescription(`Voici les commandes de ${Nombot}`)
      .addField(`${prefix}gen [nom de service]`, '`générer un compte de ce service`')
      .addField(`${prefix}check [nom de service]`, '`vérifier le nombre de comptes sur ce serveur`')
      .addField(`${prefix}stock`, '`vérifier les services et les comptes`')
      .addField(`${prefix}botinfo`, '`Avoir les Informations sur le bot`')
      .setFooter(`develloper par owner`)
      .setTimestamp()
      .setColor("#0972e3");
    message.channel.send(embed);
} else {	
      const embed = new Discord.RichEmbed()
      .setTitle(`Commandes depowerland`)
      .setURL("https://media.discordapp.net/attachments/962854733792575518/1040053706399416340/autocollants-homer-fuck2.JPG")
      .setThumbnail(message.guild.iconURL)
      .setDescription(`Voici les commandes de powerland`)
      .addField(`${prefix}gen [nom de service]`, '`générer un compte de ce service`')
      .addField(`${prefix}check [nom de service]`, '`vérifier le nombre de comptes sur ce serveur`')
      .addField(`${prefix}stock`, '`vérifier les services et les comptes`')
      .addField(`${prefix}add [nom de service] [email:mdp]`, '`ajoutez ce compte au service, n\'oubliez pas d\'utiliser la syntaxe email:mdp`')
      .addField(`${prefix}change [cooldown, prefix] [choix]`, '`changer le préfix ou le temps de recharge (option) en une valeur, pour le temps de recharge rappelez-vous que la valeur doit être en ms`')
      .addField(`${prefix}botinfo`, '`Avoir les Informations sur le bot`')
      .setFooter(`develloper par owner`)
      .setTimestamp()
      .setColor("#0972e3");
    message.channel.send(embed);
}   
        }  

    });     
 
bot.login(process.env.TOKEN);	
