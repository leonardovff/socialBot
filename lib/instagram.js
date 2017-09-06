const Instagram = function($token, url = 'https://api.instagram.com/v1') {

    this.req = require('request')

    this.tags = ({ tag, token = $token, callback }) => {
        this.req(`${url}/tags/${tag}/media/recent?access_token=${token}`, (err, res, body) => {
            callback({ err, res, body })
        })
        return this
    }
}

// require('dotenv').config()

// new Instagram().tags({
//     tag: 'wow',
//     token: process.env.tokenInstagram,
//     callback: ({ err, res, body }) => {
//         // console.log(res) // working only in sandbox
//     }
// })