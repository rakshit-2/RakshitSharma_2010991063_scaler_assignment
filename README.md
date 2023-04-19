# Cab Service(Shortest path/time detection)

<p>
<img src="https://img.shields.io/badge/ReactJS-blue?logo=react"
<img src="https://img.shields.io/badge/Mobile App-React Native-61dafb?logo=android">
<img src="https://img.shields.io/badge/Backend-NodeJS-green?logo=node.js">
<img src="https://img.shields.io/badge/DataBase-MongoDB-lightgreen?logo=mongoDB">

</p>

**AWS Hosting:**

![aws-s3](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

**Visit The Website Now:**
[Visit Now](http://43.205.95.49/) 🚀

Welcome to my project! This is a Cab Booking App made with MERN stack. It lets users quickly and easily book cabs with multiple options and price variations. With this App, users can effortlessly reach their destination in the minimum time and price.

dijkstra algorithm (Python) calculates the shortest path using the source and destination fetched from the user. Once the shortest path has been calculated, the website will display the estimated time and distance of the trip to the user, as well as the price calculated according to the formula 10rs/min(cab GO). Python file for the Shortest path is called using Child-process(NodeJs library)

The user gets notified through the Nodemailer email service used on the website, as soon as the user books the cab detailed mail is sent to the user about the price, timestamp of booking, cab name, etc. The driver would also receive the optimized route through their navigation system, ensuring they take the most efficient path to the destination.

No cab should have an overlapping start and end time - as the user booked a cab he/she cannot book another cab till the duration of the booked trip is completed. Responsive design web design users can use the web application on mobile devices also with the best user experience.

Admins can view all the user's email id, the number of cabs they have booked who booked cabs from the website, Admins can also view the total number of cabs that have been booked by all users its id, what time, email of the user, etc.

#### while ReactJs and NodeJs are structured using an atomic design model

## 🚀 Features
- No Login Required just the EMAIL
- Mail of confirmed booking is recieved
- Multiple cabs to choose from
- User can choose rate on his/her own will
- Multiple locations available
- User friendly UI


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

## Screenshots of this project

### User visit Landing page
![ss1](https://user-images.githubusercontent.com/86184006/232975942-8135ec2d-3772-43d1-86ca-e6664aafdd1b.png)

### User visit Cab Booking
![ss2](https://user-images.githubusercontent.com/86184006/232976092-5e9d64ee-476d-41d8-a6a4-d540d58d410e.png)


### Responsive Web Design

![ss5](https://user-images.githubusercontent.com/86184006/232976182-c2cf7033-efe0-4006-acba-b133473b1979.png)
![ss7](https://user-images.githubusercontent.com/86184006/232976684-965ffa55-254e-42e1-b04a-b50a8c431d24.png)




## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments

[Create new Issues](https://github.com/rakshit-2/scaler_assignment.git) (preferred)

Email Me: rakshit4013@gmail.com (welcome, say hi)
