# League-Stats


## Table of Content

1. [General Info](https://github.com/MatchewXD/League-Stats/edit/main/README.md#general-info)
2. [Demo](https://github.com/MatchewXD/League-Stats/edit/main/README.md#%EF%B8%8F-demo)
3. [Technologies](https://github.com/MatchewXD/League-Stats/edit/main/README.md#-technologies)
4. [Installation](https://github.com/MatchewXD/League-Stats/edit/main/README.md#-installation-and-setup)
5. [System Architecture](https://github.com/MatchewXD/League-Stats/edit/main/README.md#-installation-and-setup)
6. [Contributors](https://github.com/MatchewXD/League-Stats/edit/main/README.md#-contributors)

## General Info
A website were the user can build a load out and see how the stats effect the champions

## ⚜️ Demo



---
## 🧪 Technologies

- Axios : 0.27.2
- Express : 4.18.0
- FontAwesome : 5.6.3
- Nodemon : 2.0.15
- pg : 8.7.3
- React : 17.0.2
- React-dom : 18.1.0
- React-fontawesome : 1.7.1
- Typescript : 4.6.4

## 🚀 Installation and Setup
```
$ git https://github.com/MatchewXD/League-Stats.git
```
From the root directory, run
```
$ npm install
$ npm run server
$ npm start
```
The database is on my personal computer so you won't get any of the images or stat data unless you download the datadragon file from league of legends ([Latest Verson](https://developer.riotgames.com/docs/lol#data-dragon)). First you will need Postgres installed then make a new database for storing the data. After that run:
```
$ node convertchamps.js
$ node convertitems.js
$ psql -d [your database name] -f schema.sql
```
Restart the server and start the client👍

## 🤝 Contributors

- [Matthew Seagren](https://www.linkedin.com/in/matthew-seagren/)
