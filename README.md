# SocialBot
A robot for search pictures with hashtags in facebook and instagram

## To use
1. First, you need to install the packages od node:

$ npm install

2. After you need to set de env of facebook password and firebasekey:

Rename ./env/._env to ./env/.env and put the password and login of facebook;

Rename ./env/._firekey to ./env/firekey and put the credentials of your firebase application;

3. Run the start of project:
$ npm start


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

or

$ node robo.js
