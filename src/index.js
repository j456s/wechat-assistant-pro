const { Wechaty } = require('wechaty');
const { PuppetPadlocal } = require('wechaty-puppet-padlocal');
const WechatyWebPanelPlugin = require('wechaty-web-panel');

const name = 'wechat-assistant-pro';
let bot = '';
// 1、如果没有token请使用以下代码
bot = new Wechaty({
    name, // generate xxxx.memory-card.json and save login data for the next login
    puppet: 'wechaty-puppet-wechat',
});

// 2、如果有token请使用一下配置
// const puppet = new PuppetPadlocal({
//     token: '**************',
// });
// bot = new Wechaty({
//     name,
//     puppet,
// });

bot
    .use(
        WechatyWebPanelPlugin({
            apiKey: '7604a38b45ea2b74eb21096be337b472609517cf',
            apiSecret: 'f0d793727d2e2c956836df02b96f9abb8b039020',
        })
    )
    .start()
    .catch((e) => console.error(e));

