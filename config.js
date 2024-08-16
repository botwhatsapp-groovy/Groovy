const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "LynnBotz" //GANTI AJA
global.ownerName = "LynnZxD" //JANGAN DIGANTI KARENA INI TERMASUK AUTHOR NYA!!!!!!!!!!!!!!!!!!!!!
global.ownerBot = "6285692195658" //GANTI NOMER LU
global.ownerNumber = ["6285692195658"] //GANTI NOMER LU

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages

// Auto Downloader Tiktok
global.TiktokAutoDownload = true

// Admin Create Panel
global.domain = "https://nasa.gov" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "LynnZxD" // Ganti Nama Store Atau nama Host Lu
global.locID = '1'
global.eggID = '15'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})