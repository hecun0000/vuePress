  
const qrTerm = require('qrcode-terminal')
const chinaTime = require('china-time');
const { 
  Contact,
  log,
  Wechaty, 
}           = require('wechaty')

const bot = new Wechaty()

bot.on('scan',    onScan)
bot.on('login',   onLogin)
bot.on('logout',  onLogout)
bot.on('error',   onError)

bot.start()
.catch(console.error)

process.on('message', (obj)=> {
  console.log('使用微信发送消息给禾苗')
  main(obj)
})


function onScan (qrcode, status) {
  qrTerm.generate(qrcode, { small: true })  // show qrcode on console
}

function onLogin (user) {
  console.log(`${user} login`)
  // main({author: '禾苗', msg: '测试哦'})
}

function onLogout (user) {
  console.log(`${user} logout`)
}

function onError (e) {
  console.error(e)
}

/**
 * Main Contact Bot
 */
async function main({author, msg}) {
  let logMsg;
  console.log('发送消息')
  let contact = await bot.Contact.find({name:'禾苗'})
  console.log(contact)
  let str = `${chinaTime('YYYY-MM-DD HH:mm:ss')}
部署人：${author} 
部署信息：${msg}`
  console.log(str)
  try {
    logMsg = str
    await contact.say(str)
  } catch (e) {
    logMsg = e.message
  }

  console.log(logMsg)
  
}

