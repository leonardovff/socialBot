const Instagram = function ($token, url = 'https://api.instagram.com/v1') {

    this.req = require('request')

    let admin = require("firebase-admin");

    let serviceAccount = require("./firekey.json");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://socialbot-249ca.firebaseio.com"
    });


    this.tags = ({ tag, token = $token, callback }) => {
        this.req(`${url}/tags/${tag}/media/recent?access_token=${token}`, (err, res, body) => {
            callback({ err, res, body })
        })
        return this
    }

    this.saveTag = ({ tags }) => {
        tags.forEach(t => {
            admin.database().ref('/tags').push(t)
        })

        return this
    }
}

require('dotenv').config()
const Insta = new Instagram(process.env.tokenInstagram)
Insta.tags({
    tag: 'wow',
    callback: ({ err, res, body }) => {
        let tags = JSON.parse(res.body).data
        Insta.saveTag({ tags })
    }
})