# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
# Final Project
## Application Requirements
* Must use ReactJS in some way
* Must use a Node and Express Web Server
* Must be backed by a MySQL or MongoDB database with a Sequelize or Mongoose ORM
* Must have both GET and POST routes for retrieving and adding new data
* Must deploy this application using Heroku with data. Follow our guide on [deploying MERN applications to Heroku](../04-Important/MERNHerokuDeploy.md) to do so.
* Must utilize at least 2 libraries, packages, or technologies that we haven't discussed
* Must allow for or involve the authentication of users in some way
* Must have a polished front end/UI
* Must have a folder structure that meets the MVC paradigm
* Must meet good quality coding standards (indentation, scoping, naming)
* Must protect API keys in Node with environment variables
## Presentation Requirements
Use this [project presentation template](https://docs.google.com/presentation/d/1_u8TKy5zW5UlrVQVnyDEZ0unGI2tjQPDEpA0FNuBKAw/edit?usp=sharing) to address the following: 
* Elevator pitch: a one minute description of your application
* Concept: What is your user story? What was your motivation for development?
* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?
* Demo: Show your stuff!
* Directions for Future Development
* Links to to the deployed application and the GitHub repository
## Grading Metrics 
| Metric        | Weight | 
| ---           | ---    |
| Concept       | 10%    |
| Design        | 20%    |
| Functionality | 30%    |
| Collaboration | 30%    |
| Presentation  | 10%    |
## Submission on BCS
You are required to submit the following:
* The URL of the deployed application
* The URL of the GitHub repository