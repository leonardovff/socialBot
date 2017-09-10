var RoboPage = require('./instagram-po').RoboPage,
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
    page.navigateTo('/explore/tags/geniodorock/');
    page.activeScroolLoad(()=>{
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
});
