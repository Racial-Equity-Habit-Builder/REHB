# REHaB
![logo](public/assets/graphics/REHaB_Icon.png)


Group midterm  project for Code Fellows Advancerd Javascript

## Live deployment
Check out our app out in the wild [here](https://rehab-cf.herokuapp.com/)! 

<hr>

## Table of Contents
- [Overview](#Overview)
- [Project Scope](#Project-Scope)
- [Functional and non-functional requirements](#Functional-requirements)
- [Getting Started](#Getting-Started)
- [Technologies used in this project](#Technologies-used-in-this-project)
- [Change Log](#Change-Log)
- [Domain Modeling](#Domain-Modeling)
- [Problem Domain](#Problem-Domain)
- [User Stories](#User-Stories)
- [Contributing](#Contributing)
- [Authors](#Authors)
- [Acknowledgements](#Acknowledgements)
- [License](#LICENSE)

<hr>

## Overview
The Racial Equity Habit Builder (REHaB) is an app that allows you to get a text (or email) that prompts you to do one thing each day to further your understanding of power, privilege, supremacy, oppression, and equity.


### What pain point does this web application solve?
It makes it easy to increase your awareness of social injustice.
It helps you get into the habit of doing one thing every day to increase your awareness.
It provides you with a variety of resources so you don’t have to find them yourself.


[Return to the top](#Table-of-Contents)

<hr>

## Project Scope

### What will your product do

- Allow for user profile creation and sign-in
- etc...

### What will the product not do

- etc...

### Minimum Viable Product

- The User can sign up with a user profile (if we can’t use text, then we’ll use email for communication).
- Confirm Sign up with user
- At a certain time each day, the User is sent an action to do utilizing Twillio
- The User can send back a notice that they have completed their action.
- The number of days in a row that the User completes an action is tracked and sent to them after they send a notice that they completed an action.
- Special response at 21 streak
- The content the User has been sent is tracked so they aren’t sent the same content again in a short amount of time.
- The User can unsubscribe.
- New content can be added to the application.
- Basic Roles. User and Admin


[Return to the top](#Table-of-Contents)

<hr>

## Functional requirements

See [Domain Modeling](#Domain-Modeling) section below

## Non-Functional Requirements

### Security

- etc...

### Usability

- etc...

[Return to the top](#Table-of-Contents)

<hr>

## Getting Started
This project is licensed under the free MIT license. As such, if you are interested in getting a version of this project locally for testing or added development, here are the steps needed to get started:
1. Prerequisites:
    - Knowledge of HTML, CSS and JavaScript
    - Experience working with node.js servers
    - Understanding of server-side templating
    - Working knowledge of REST APIs
    - A text editor ([VSCode](https://code.visualstudio.com/download) is recommended)
    - A web browser (We recommend using Google Chrome)
    - A desire to build cools stuff!
2. Clone repo from GitHub [here](https://github.com/Racial-Equity-Habit-Builder/REHB).
    - On the GitHub repo page, click the `clone or download` button and copy the provided url.
    - In your command-line, or CLI, run this command: `git clone <url goes here>`
3. Inside of the repo on your local machine, install the necessary dependencies and libraries:
    - In your CLI, run the command `npm init` which will initialize the project with `node.js`. If you don't have npm package manager installed, you can download node.js [here](https://nodejs.org/en/download/) which includes npm.
    - Follow the prompts to fill out the `package.json` file that `node.js` will pull from to run the server.
        - <ins>**Important!**</ins> Ensure that your `package.json` has `server.js` listed under the `start` parameter!
    - Install these libraries from npm that are used on this project with the `npm install` command on your CLI (more info below):
        - base-64
        - bcrypt
        - cf-supergoose
        - dotenv
        - ejs
        - express
        - jest
        - jsdoc
        - jsonwebtoken
        - mongoose

4. You should now have a full copy of this project on your local machine. If you would like to contribute to this project in any way, checkout the [Contributing](#Contributing) section below! 

[Return to the top](#Table-of-Contents)

<hr>

## Technologies used in this project

- [HTML](https://html.spec.whatwg.org/multipage/) - A standard markup language used for web site structure.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - A simple language used to add styling to web documents.
- [JavaScript](http://es6-features.org/#Constants) - A dynamically typed programming language used heavily in front-end development.
- [jQuery](https://jquery.com/) - A fast, small JavaScript library that makes tasks like DOM manipulation and event handling much easer. 
- [Dotenv](https://www.npmjs.com/package/dotenv) - An npm package used to create and load environmental variables from a hidden .env file.
- [Express](https://expressjs.com/) - A node.js web application framework.
- [EJS](https://ejs.co/) - A server-side templating language to generate HTML markup with plain JavaScript.
- [Mongoose](https://www.npmjs.com/package/mongoose) -  Mongoose is an npm package that connects to MongoDB using object modeling, designed to work in an asynchronous environment. 
- [MongoDB](https://www.mongodb.com/) - MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need. 
- [Base64](https://www.npmjs.com/package/base-64) Base64 is a robust base64 encoder/decoder 
- [BCrypt](https://www.npmjs.com/package/bcrypt) A library to help you hash passwords 
- [CF-Supergoose](https://www.npmjs.com/package/bcrypt) Combines SuperTest and Mongoose Memory Server to reduce (hopefully) the pain of testing a Mongoose API. Props to John Cokos and JB Tellez for supergoose.
- [Jest](https://jestjs.io/) Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [JSDoc](https://jsdoc.app/) JSDoc 3 is an API documentation generator for JavaScript, similar to Javadoc or phpDocumentor. You add documentation comments directly to your source code, right alongside the code itself. The JSDoc tool will scan your source code and generate an HTML documentation website for you.
[JSONWebToken](https://jwt.io/introduction/) JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. 




### APIs
- Custom Racial Equity: Explain....
### Custom Fonts
- [Google Fonts](https://fonts.google.com/)
  - Oswald (Regular)
  - Montserrat (Regular)
### Links 
[Debbie Irving's 21 Day Racial Equity Habit Building Challenge](https://debbyirving.com/21-day-challenge/)

[Return to the top](#Table-of-Contents)

<hr>

## Change Log

See the attached [CHANGELOG.md](INSERT HERE) file.

[Return to the top](#Table-of-Contents)

<hr>

## Domain Modeling: 

### Database Model

This diagram is a visual representation of the data structure for this project.

![img](docs/REHaB-UML.pdf)


[Return to the top](#Table-of-Contents)

<hr>


## Problem Domain:  

*As a user I would like to be able to be served daily information to track a habit I am trying to build. I want this to be simple and easy to use as well as to track 'how well I am doing' through a streak*

These are the features we wanted at the start of this project. 

1. The User can sign up with a user profile (if we can’t use text, then we’ll use email for communication).
2. Confirm Sign up with user
3. At a certain time each day, the User is sent an action to do utilizing Twillio
4. The User can send back a notice that they have completed their action.
5. The number of days in a row that the User completes an action is tracked and sent to them after they send a notice that they completed an action.
6. Special response at 21 streak
7. The content the User has been sent is tracked so they aren’t sent the same content again in a short amount of time.
8. The User can unsubscribe.
9. New content can be added to the application.
10. Basic Roles. user and admin


[Return to the top](#Table-of-Contents)

<hr>

## User Stories:

1. ### User Profiles
- WRITE THESE!



### Other Stretch Goals:

Possible future implementation of:

- The User can set preferences regarding the content they want to get. (Time, Category, Duration)
- Weighted Choices
- Re-Roll Option
- OAuth Through Facebook
- The User can get their history in a Google Sheet.
- The User can save a reflection/note about the action they completed.
- The User can text “help” to get a list of available commands.


[Return to the top](#Table-of-Contents)

<hr>

## Contributing

If you would like to contribute to this project, open up an issue on the project's [GitHub](https://github.com/Racial-Equity-Habit-Builder/REHB).
- Use the `bug` flag for any problems using the application.
- Use the `enhancement` flag if you have a recommendation on something to improve
- Use the `question` flag if you simply have questions about the development of this project.

[Return to the top](#Table-of-Contents)

<hr>

## Authors

* Dave Wolf - Full-stack Javascript Developer [GitHub](https://github.com/d-d-wolfe)
* David Palagashvili - Full-stack Javascript Developer [GitHub](https://github.com/Davidoffili)
* Paul Depew - Full-stack Javascript Developer [GitHub](https://github.com/PaulDepew)
* Marlene Rinkler - Full-stack Javascript Developer [GitHub](https://github.com/https://github.com/marlene-rinker)
* Garhett Morgan - Full-stack Javascript Developer [GitHub](https://github.com/GarhettM)
*  Ashley Biermann - Full-stack Javascript Developer [GitHub](https://github.com/ashleybiermann)

[Return to the top](#Table-of-Contents)

<hr>

## Acknowledgements

This section goes out to Brooke Riggio, Jacob Knaack and Alistair, our biggest supporters.

[Return to the top](#Table-of-Contents)

<hr>

## License

See the attached [LICENSE](LICENSE) file for details.

[Return to the top](#Table-of-Contents)

<hr>