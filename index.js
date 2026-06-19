require("dotenv").config();

const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("clientReady", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const rulesEmbed = new EmbedBuilder().setTitle("ˋˏ ✦ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗥𝗨𝗟𝗘𝗦 ✦ ˎˊ")
    .setDescription(`
🪐 Please read all rules carefully before engaging. Breaking any rule may result in a warning, mute, or ban.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🪐 𝗥𝗨𝗟𝗘 𝟬𝟭 ﹒ 𝗥𝗘𝗦𝗣𝗘𝗖𝗧 𝗘𝗩𝗘𝗥𝗬𝗢𝗡𝗘 Treat every member with kindness and respect. Harassment, bullying, hate speech, or discrimination of any kind will not be tolerated — no exceptions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🪐 𝗥𝗨𝗟𝗘 𝟬𝟮 ﹒ 𝗡𝗢 𝗧𝗢𝗫𝗜𝗖𝗜𝗧𝗬 No drama, trolling, provocating, or intentionally starting arguments. Keep the energy positive and welcoming for everyone in this community.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🪐 𝗥𝗨𝗟𝗘 𝟬𝟯 ﹒ 𝗞𝗘𝗘𝗣 𝗜𝗧 𝗜𝗡 𝗧𝗛𝗘 𝗥𝗜𝗚𝗛𝗧 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 Post content in its relevant channel only. Memes go in #memes, art goes in #art-showcase, help goes in #get-help — keep it organized.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🪐 𝗥𝗨𝗟𝗘 𝟬𝟰 ﹒ 𝗡𝗢 𝗦𝗣𝗔𝗠 No spamming messages, emojis, stickers, or repeated content. No chain messages, copypastas, or flooding any channel with repeated text.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🪐 𝗥𝗨𝗟𝗘 𝟬𝟱 ﹒ 𝗡𝗢 𝗡𝗦𝗙𝗪 𝗖𝗢𝗡𝗧𝗘𝗡𝗧 Explicit, graphic, or NSFW content is strictly forbidden in all channels unless you are in a designated age-gated channel with proper access.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🪐 𝗥𝗨𝗟𝗘 𝟬𝟲 ﹒ 𝗡𝗢 𝗦𝗘𝗟𝗙 𝗣𝗥𝗢𝗠𝗢𝗧𝗜𝗢𝗡 Do not advertise, self-promote, or share server invites without permission from staff. This includes DM advertising — it will result in an instant ban.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🪐 𝗥𝗨𝗟𝗘 𝟬𝟳 ﹒ 𝗡𝗢 𝗣𝗢𝗟𝗜𝗧𝗜𝗖𝗦 𝗢𝗥 𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡 Discussions around politics, religion, or other sensitive divisive topics are not allowed. This server is a safe and neutral space for everyone.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🪐 𝗥𝗨𝗟𝗘 𝟬𝟴 ﹒ 𝗣𝗥𝗢𝗧𝗘𝗖𝗧 𝗬𝗢𝗨𝗥 𝗣𝗥𝗜𝗩𝗔𝗖𝗬 Do not share personal information — yours or anyone else's. No doxxing, leaking private conversations, or sharing someone's details without their full consent. 
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🪐 𝗥𝗨𝗟𝗘 𝟬𝟵 ﹒ 𝗟𝗜𝗦𝗧𝗘𝗡 𝗧𝗢 𝗦𝗧𝗔𝗙𝗙 All staff decisions are final. If you disagree with a moderation action, open a ticket or DM a staff member calmly — do not argue publicly or cause a scene in the channels.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🪐 𝗥𝗨𝗟𝗘 𝟭𝟬 ﹒ 𝗨𝗦𝗘 𝗖𝗢𝗠𝗠𝗢𝗡 𝗦𝗘𝗡𝗦𝗘 If something feels wrong — it probably is. Use good judgment. Rules cannot cover every situation, so always act with respect and maturity. We reserve the right to moderate any behaviour that harms the community.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌌 𝗕𝗬 𝗦𝗧𝗔𝗬𝗜𝗡𝗚 𝗜𝗡 𝗧𝗛𝗜𝗦 𝗦𝗘𝗥𝗩𝗘𝗥 𝗬𝗢𝗨 𝗔𝗚𝗥𝗘𝗘 𝗧𝗢 𝗔𝗟𝗟 𝗢𝗙 𝗧𝗛𝗘 𝗔𝗕𝗢𝗩𝗘 𝗥𝗨𝗟𝗘𝗦. 🌌

                                                ˋˏ ✦ 𝗧𝗛𝗔𝗡𝗞 𝗬𝗢𝗨 𝗙𝗢𝗥 𝗕𝗘𝗜𝗡𝗚 𝗛𝗘𝗥𝗘 ✦ ˎˊ
`)
.setImage("https://cdn.discordapp.com/attachments/1515696780111773697/1517226447612154037/329c6f11137b80cf16a868d579cb3ddc.jpg?ex=6a362b7d&is=6a34d9fd&hm=2fc0c2676e83af1ca5861234610f36ec428ac50ab635270eaf4af20fce000613&")

  if (message.content === "rules") {
    message.channel.send({
      embeds: [rulesEmbed],
    });


  }
});

client.login(process.env.TOKEN);
