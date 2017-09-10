var RoboPage = require('./facebook-po').RoboPage,
Env = require("./env/env").Env,
admin = require("firebase-admin"),
serviceAccount = require("./env/firekey.json");

describe('robo App', () => {
  let page,
  adminRef = admin;
  beforeAll(() => {
    adminRef.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://socialbot-249ca.firebaseio.com"
    });
  });
  beforeEach(() => {
    page = new RoboPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    page.login(Env.login, Env.password);
    page.search('geniodorock');
    page.loadAll(() => {
      page.getPictures((data) => {
        data.forEach(function(picture){
          page.save(picture, admin.database);
        })
        console.log("Quantidade fotos capturadas: ",data.length);
      });
    });
  });
});
