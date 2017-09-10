var browser = require('protractor').browser,
by = require('protractor').by,
element = require('protractor').element,
ExpectedConditions = require('protractor').ExpectedConditions;
class RoboPage{
    navigateTo(url) {
        browser.waitForAngularEnabled(false);
        return browser.get(url);
    }
    getPictures(callback){
        let pictures = element.all(by.css('div._mck9w._gvoze._f2mse img')),
        arr = [],
        qtd = 0;
        pictures.count().then(lim => {
            pictures.each((picture)=>{
            picture.getAttribute("src").then(function (value) {
                qtd++;
                arr.push(value);
                if(qtd == lim){
                callback(arr);
                }
            });
            })
        });
    }
    save(picture, db){
        browser.wait(db().ref('pictures').push().set({
            url: picture, social_type: "instagram", status: "wait", save_datetime: db.ServerValue.TIMESTAMP
        }), 5 * 1000).then(function(){
        })
    }
    loadAll(callback = null){
        let ref = this;
        browser.wait(ExpectedConditions.presenceOf(element(by.css('div[role="dialog"]'))), 1000).catch(() =>{
            browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(() => {
                browser.wait(ExpectedConditions.stalenessOf(element(by.css('div._gee85'))), 0.3 * 1000).then(() => {
                    callback();
                }).catch(() => {
                    ref.loadAll(callback);
                });
            });
        });
    }
    activeScroolLoad(callback){
        let ref = this;
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function(){
            element(by.css('h2._nhglx + div>._cmdpi>div:last-child')).click();
            let condition = ExpectedConditions.presenceOf(element(by.css('div[role="dialog"]')));
            browser.wait(condition, 5 * 1000)
            .then(() => {
                element(by.css('div[role="dialog"]>button')).click();
                let condition = ExpectedConditions.stalenessOf(element(by.css('div[role="dialog"]')));
                browser.wait(condition, 5 * 1000)
                .then(() => {
                    callback();
                }).catch((error)=>{
                    console.log(error);
                });
            }).catch((error)=>{
                console.log(error);
            })
        });
    }
}
exports.RoboPage = RoboPage