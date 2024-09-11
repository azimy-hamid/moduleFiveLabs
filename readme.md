# Module Five Labs

## Description

Below I have added a table of content to explain each of the labs separately :)

## Table of Contents

- [Lab One](#LabOne)
- [Lab Two](#LabTwo)
- [Lab Three](#LabThree)
- [Lab Four](#LabFour)
- [Lab Five](#LabFive)
- [Lab Six](#LabSix)
- [Lab Seven](#LabSeven)
- [Lab Eight](#LabEight)

## LabOne

I have created 3 servers that run on port 3001, 3002, and 3003.

To run, run these commands:

1. npm install
2. node [serverOne.js OR serverTwo.js OR serverThree.js]

## LabTwo

I have created the interface and also the api to handle the math operations in the backend.

To run the backend server:

1. npm install
2. npm start (if you have nodemon installed globally)
3. node server.js (if you don't have nodemon installed globally)

To run the frontend:

4. open the index.html from the public folder manually or go live using live-server or after running the server you can go onto this endpoint (http://localhost:3000/)

NOTE: For the frontend to have all functionalities, the backend server must be running

## LabThree

Lab Three had asked for the interface for the lab two backend server, I didn't know lab 3 had this as the requirement so I ended up completing both labs in lab Two :)

## LabFour

All the requirements are met. And I have changed the friends.js file to a friends.json file which then allowed me to read and write the file from the frontend. Now creating and updating the friends list will also be reflected on the file instead of only changing the friends array in memory cache.

Also, in the second requirement for this lab, it asks to send these header (user-agent, content-type and accept) data in the response. Because a get request doesn't need a content-type header, it doesn't show when you go to this endpoint http://localhost:3000/friends/info. But if you use postman and send a content-type : application/json it'll show this info in response.

To run:

1. npm install
2. npm start (if you have nodemon installed globally on your device)
3. npm run startWithoutNodemon (if you don't have nodemon installed)

## LabFive

The requirement for this lab is to change lab 4 api to use controller, but this was already a requirement of the lab 4. So this lab is also completed allong side lab 5

## LabSix

All the requirements for the lab 6 is completed, I have written 4 test cases that test the 4 (add - sub - multiply - div) endpoints. However in the lab instrcutions (the module 5 slides), they have used commonJs, but I have used ES6 cause I wanted to also practice the ES6 sytax as I had only worked with CommonJs previously so it was quite a good experience.
Also, Since I was using ES6 and the supertest library noramlly uses CommonJs so I had configure it to use ES6, that way I have these (babel.config.js and also .babelrc) files for configuring jest and supertest. TO help me with the configuration, I used Chat GPT.

To run follow the bellow steps and commands:

1. Navigate to labSix folder
2. npm install (to install all the dependencies)
3. npm test (to view the test results )

NOTE: you don't need to run the server to run the tests, supertest takes care of that.

## LabSeven

## LabEight
