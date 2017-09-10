// Robo que executa a cada 1 hora os comandos do protractor
var exec = require('child_process').exec;

var app = {
    exec: (fileConf) => {
        var execution = exec(`protractor ${fileConf}`, function(err, stdout, stderr) {
            if (err) {
                // should have err.code here?  
                console.log(err);
            }
            console.log(stdout);
        })
        execution.on('exit', function (code) {
            console.log(code);
        });
    },
    start: () => { 
        app.exec('conf.js');
        app.exec('conf.instagram.js');
        setTimeout( () => {
            app.start();
        }, 1000 * 60 * 60);

    }
}
app.start();