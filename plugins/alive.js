const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    alive: 'media/AUD-20240901-WA0160.mp3'
        }

let des = `*👋 Hello ${pushname}* 

✫💫 𝐃𝐀𝐑𝐊 𝐙𝐄𝐑𝐎 𝐌𝐃 💫✫

*Hey there!*

 💫 *∂αяκ zєяο  ωнαтѕαρρ вσт ιѕ υρ αη∂ яυηηιηg!*
🖤 *яυηтιмє : 1 hour, 5 minutes, 47 seconds
🤍 *¢яєαтє∂ ву:* DARK ZERO HACKER TM

*𝐻𝑒𝓇𝑒'𝓈 𝓌𝒽𝒶𝓉 𝐼 𝒸𝒶𝓃 𝒹𝑜*
💿 *Download Songs & Videos*
📰 *Fetch Latest News*
🎭 *Entertain with Fun Commands*
🔧 *Manage Groups*

*𝒮𝓉𝒶𝓎 𝒸𝑜𝓃𝓃𝑒𝒸𝓉𝑒𝒹 𝒶𝓃𝒹 𝑒𝓃𝒿𝑜𝓎 𝓉𝒽𝑒 𝓈𝑒𝓇𝓋𝒾𝒸𝑒𝓈!*

💕𝙃𝙚𝙡𝙥𝙚𝙧𝙨💕 𝗠𝗔𝗡𝗨𝗟 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟
𝗛𝗔𝗡𝗦𝗔 𝗗𝗘𝗪𝗠𝗜𝗡𝗔
𝗡𝗜𝗥𝗢

_*© 𝗗𝗔𝗥𝗞 𝗭𝗘𝗥𝗢 𝘽𝙊𝙏 - MD*_

💻 *GitHub:* https://github.com/Navinofc44/DARK-ZERO-MD`

await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
    
return await conn.sendMessage(from,{image: {url: `https://telegra.ph/file/7e1f9a45d326abc34d161.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})



