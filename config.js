global.util = require('util')
global.fs = require('fs')
global.fetch = require('node-fetch')
global.chalk = require('chalk')
global.os = require('os')
global.moment = require('moment-timezone')
global.axios = require('axios')
global.cheerio = require('cheerio')
global.scrape = require('./lib/scrape')
global.xfr = require('xfarr-api')
global.yzu = require('yuzzu-api')
global.dhn = require('dhn-api')
global.hxz = require('hxz-api')
global.bochil = require('@bochilteam/scraper')
global.baileys = require('@adiwajshing/baileys')

global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Moderator
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium users

global.devx = 'false'

global.owner = ["919072501166"]
global.APIs = { // API Prefix
//======= name: 'https://website' ========//
  nrtm: 'https://nurutomo.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://api.neoxr.eu.org',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.me' 
}
global.APIKeys = { // APIKey Here
//======= 'https://website': 'apikey' =======//
  'https://api.lolhuman.xyz': '7ecba1cc37eca2e93d6a983b',
  'https://hardianto.xyx': 'hardianto',
  'https://api.neoxr.eu.org': 'b31d16f5-1d03-4227-a85f-ff6d2d9e1e49',
  'https://api.xteam.xyz': 'benniismaelapikey',
  'https://api.zeks.me': 'apivinz'
}




 
global.ucpn = ''
global.linkgc = 'https://chat.whatsapp.com/E3gNcm7G9nGBIvs7OcUmVx'
global.linkig = 'https://www.instagram.com/wrong__play  '
global.linkyt = 'https://www.youtube.com/channel/UCLegt7MKqNBxJjIkE_QNPdA'
global.linkfb = 'https://fb.watch/aYv0jAffAO'
global.git = 'https://github.com/BOT99V'
global.web1 = 'https://neeraj-x0.github.io/'
global.url = 'https://chat.whatsapp.com/E3gNcm7G9nGBIvs7OcUmVx'

//HEROKU  VARS
global.thumburl = process.env.IMAGE || 'https://i.imgur.com/n6lx5LO.jpeg'
global.packname = process.env.PACKNAME ||'ADHI'
global.author = process.env.AUTHOR ||'ɴᴇᴇʀᴀᴊ-x0'
global.name = 'Millie MULTI-DEVICE'
global.session = process.env.SESSION_ID|| 'WEFITGNCNG0='
global.wm = process.env.WATERMARK|| 'ADHI SER'
global.owner_name = process.env.OWNER_NAME || 'ADHI SER'
global.logsmsg = convertToBool(process.env.LOGS)|| false

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}





global.deslink = ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'wrong__play'
global.wait = '_Please Wait_'
global.eror = '_Something went wrong please try again later_'
global.dtu = 'BOT HELP GROUP'
 



global.version = '2.0.1(ʙᴇᴛᴀ)'

global.multiplier = 69 // The higher, The harder levelup
global.nolink = 'No URL Found'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})


