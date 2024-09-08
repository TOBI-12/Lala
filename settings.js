const fs = require('fs')
const chalk = require('chalk')

global.botName = "kanjut" //nama bot
global.ownerName = "peli" //nama owner
global.botNumber = "628xxx" //nomor bot
global.devNumber = ["628xxx"] //nomor lu

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})