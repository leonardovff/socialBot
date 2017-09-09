const Instagram = function ($token, url = 'https://api.instagram.com/v1') {

    this.req = require('request')

    let admin = require("firebase-admin")

    let serviceAccount = require("./firekey.json")

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://socialbot-249ca.firebaseio.com"
    });

    let picturesRef = admin.database().ref('/pictures')

    this.tags = ({ name, token = $token, callback }) => {
        this.req(`${url}/tags/${name}/media/recent?access_token=${token}`, (err, res, body) => {
            callback({ err, res, body })
        })
        return this
    }

    this.saveTag = ({ tags }) => {
        tags.map(tag => {
            return {
                social_type: 'instagram',
                create_time: Math.round(new Date().getTime() / 1000),
                url: tag.images.standard_resolution.url,
                id: tag.id,
                status: 'aguardando'
            }
        }).forEach(tag => {
            this.checkTagIdAndSave(tag)
        })
        return this
    }

    this.checkTagIdAndSave = tag => {
        picturesRef.orderByChild('id').equalTo(tag.id).limitToFirst(1).on('value', tags => {
            if (!tags.val())
                picturesRef.push(tag)
        })
    }
}

require('dotenv').config()
// const Insta = new Instagram(process.env.tokenInstagram)
// Insta.tags({
//     name: 'wow',
//     callback: ({ err, res, body }) => {
//         let tags = JSON.parse(res.body).data
//         Insta.saveTag({ tags })
//     }
// })