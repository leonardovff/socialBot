var browser = require('protractor').browser,
by = require('protractor').by,
element = require('protractor').element,
ExpectedConditions = require('protractor').ExpectedConditions;
//https://www.facebook.com/search/str/%2523geniodorock/photos-keyword?filters_rp_creation_time=%7B%22name%22%3A%22creation_time%22%2C%22args%22%3A%22%7B%5C%22start_month%5C%22%3A%5C%222017-09%5C%22%2C%5C%22end_month%5C%22%3A%5C%222017-09%5C%22%7D%22%7D
class RoboPage{
    navigateTo(url) {
        browser.waitForAngularEnabled(false);
        return browser.get(url);
    }

    login(login, password) {
        element(by.css('#email')).sendKeys(login);
        element(by.css('#pass')).sendKeys(password);
        element(by.css('#loginbutton')).click();
    }

    search(hash){
        let start_month = '2017-09',
        end_month = '2017-09';
        return this.navigateTo(`search/str/%2523${hash}/photos-keyword?filters_rp_creation_time=%7B%22name%22%3A%22creation_time%22%2C%22args%22%3A%22%7B%5C%22start_month%5C%22%3A%5C%22${start_month}%5C%22%2C%5C%22end_month%5C%22%3A%5C%22${end_month}%5C%22%7D%22%7D`);
        // return this.navigateTo(`search/str/%2523${hash}/photos-keyword`);
    }
    getPictures(callback){
        let pictures = element.all(by.css('#initial_browse_result img:not(._-yr)')),
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
            url: picture, social_type: "facebook", status: "wait", save_datetime: db.ServerValue.TIMESTAMP
        }), 5 * 1000).then(function(){
        })
    }
    loadAll(callback = null){
        let ref = this;
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function(){
            browser.wait(ExpectedConditions.visibilityOf(element(by.css('div.phm._64f'))), 4 * 1000).then(() => {
            callback();
            }).catch(() => {
            ref.loadAll();
            });
        });
    }
}
exports.RoboPage = RoboPage