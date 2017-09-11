# SocialBot

A robot for search pictures with hashtags in facebook and instagram. Saving in firebase database. 

### Prerequisites

Node.js 6.0+ and Browser (can be Chrome headlees to user in server)

### Installing

Clone the project

```
$ git clone https://github.com/leonardovff/socialBot.git
```

After you need to set de env of facebook password and firebasekey:
```
Rename ./env/._env to ./env/.env and put the password and login of facebook;
or
Rename ./env/._firekey to ./env/firekey and put the credentials of your firebase application;
```

Install the node packages

```
$ npm install
```

Run the application

```
$ npm start
```

## Deployment

To run the robot

facebook with global package:
```
$ protractor conf.js
```

facebook with local package: 
```
$ ./node_modules/protractor/bin/protractor conf.js
```

instagram with global package:
```
$ protractor conf.instagram.js
```

instagram with local package: 
```
$ ./node_modules/protractor/bin/protractor conf.instagram.js
```

to execute all
```
$ bash robo.sh
```

or

```
$ node robo.js
```

## Built With

* [Protractor](http://protractortest.org) - The teste framework of interface used
* [Node.js](https://nodejs.org/en/) - Dependency language
* [Firebase](https://github.com/firebase/firebase-admin-node/) - Save pictures in firebase database


## Authors

* **Leonardo Victor** - *Initial work* - [LeonardoVFF](https://github.com/LeonardoVFF)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MPL-2.0 License - see the [LICENSE.md](LICENSE.md) file for details
