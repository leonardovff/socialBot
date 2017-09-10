// Robo que executa a cada 1 hora os comandos do protractor
var exec = require('child_process').exec;

var app = {
    exec: (cmd, callback) => {
        var execution = exec(cmd, function(err, stdout, stderr) {
            if (err) {
                // should have err.code here?  
                console.log(err);
            } else if(typeof callback == 'function') {
                    callback();
            }
            console.log(stdout);
        })
        execution.on('exit', function (code) {
            console.log(code);
        });
    },
    protractor: (fileConf) => {
        app.exec(`./node_modules/protractor/bin/protractor ${fileConf}`, ()=>{

        });
    },
    start: () => { 
        app.protractor('conf.js');
        app.protractor('conf.instagram.js');
        setTimeout( () => {
            app.start();
        }, 1000 * 60 * 60);

    },
    config: (callback) => {
        app.exec('./node_modules/protractor/bin/webdriver-manager update', () => {
            callback();
        });
    }
}
app.config(() => {
    app.start();
})