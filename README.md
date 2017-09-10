# SocialBot
A robot for search pictures with hashtags in facebook and instagram

## need install the global module package ou local
$ npm install -g protractor

or for local

$ npm install protractor --save

## need to update webdrive:

$ webdrive-manager update

or 

$ ./node_modules/protractor/bin/webdrive-manager update

## to run the robot - facebook
### with global package:
$ protractor conf.js

### with local package: 
$ ./node_modules/protractor/bin/protractor conf.js


## to run the robot - instagram
### with global package:
$ protractor conf.instagram.js

### with local package: 
$ ./node_modules/protractor/bin/protractor conf.instagram.js


### to execute all
$ bash robo.sh