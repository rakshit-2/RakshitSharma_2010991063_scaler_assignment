# Cab Service(Shortest path/time detection)

## Description
Welcome to my project! This is a Cab Booking App made with MERN stack. It allows users to quickly and easily book cabs with multiple options and price variations. With this App, users can effortlessly reach their destination with the minimum time and price.

dijkstra algorith(Python) is used to calculate the shortest path using the source and destination from teh user. Once the shortest path has been calculated, the website would display the estimated time and distance of the trip to the user, as well as the fare.

Python file for the Shortest path is called using Child-process(nodejs library)

The user gets notified through the nodemailer email service used in the website, as soon as the user books the cab the detailed mail is sent to the user about the price, cab type, cab name etc. The driver would also receive the optimized route through their navigation system, ensuring they take the most efficient path to the destination.

No cab should has an overlapping start and end time as the user booked a can he cannot book another cab till the duration of the booked trip is completed

Responsive design web design users can use the  web application on mobile devices also with best user experience.


## clone or download
```terminal
$ git clone https://github.com/rakshit-2/scaler_assignment.git
$ cd client(ReactJs),cd server(NodeJs)
$ yarn # or npm i
```

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm start        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```


## Server-side usage(PORT: 5000)

### Prepare your secret

run the script at the first level:

(You need to add a mongoose Connection String in .env to connect to MongoDB)

```terminal
// in the root level
$ cd server
$ echo "MONGODB_URL=MONGODB_URL PORT=5000 GMAIL=GMAIL PASS=Gmail_passwod" >> src/.env
```

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm run devStart // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```


# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
@emotion/react: ^11.10.6 | nodemailer: ^6.9.1
@emotion/styled: ^11.10.6|body-parser: ^1.20.2
@fortawesome/fontawesome-free: ^6.4.0 | cors: ^2.8.5
react: ^18.2.0 | dotenv: ^16.0.3
react-dom: ^18.2.0 | express: ^4.18.2
react-router-hash-link: ^2.4.3 | chalk: ^4.1.2
react-router-dom: ^4.2.2 | mongoose: ^7.0.3
axios: ^1.3.5 | 
@mui/material ^5.12.1 |

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments

[Create new Issues](https://github.com/rakshit-2/scaler_assignment.git) (preferred)

Email Me: rakshit4013@gmail.com (welcome, say hi)