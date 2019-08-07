# RPI Interactive Campus Map #


This is a webapp that will allow users to easily find spots on campus and in the surrounding area, and map a route to their destination. Users can also post relevant photos and comments on locations' info pages.

This project was started as a term project for the ITWS-2110 (Web Systems Development) class at Rensselaer Polytechnic Institute, under the supervision of Professor Thilanka Munasinghe. It is now being developed and maintained through the Rensselaer Center for Open Source (RCOS).

We are currently in the middle of a large refactor, but heavy construction will be over soon!

### Current Contributors:
* Justin Gaskins

### Founders:
* Justin Gaskins
* Christopher Pence
* Sebastien Boulas

### Version History:
* 5/27/2019 - v0.3.0 All basic map functionality is now restored! You can show a location on the map from the info page, search for locations, or go to the information page from the location on the map.
* 3/26/2019 - v0.2.0 Began refactor and translation from XAMPP to MEAN Stack!
* 1/25/2019 - v0.1.0 Initial stages of functionality are complete! More locations and authorization will be added for the release of v1.0.

### Getting Started
This project uses the MEAN stack (MongoDB, Express.JS, AngularJS 1.7, Node.js). You will need a working installation of [Node.js](https://nodejs.org/en/) (LTS version recommended), and a [MongoDB Atlas Cloud account](https://www.mongodb.com/cloud/atlas) (free is fine).

Once you have that taken care of, there are a few more steps before you can begin work.
1. Install the nodemon package by running `npm install -g nodemon` in your node configured shell.
2. Clone the repository by either running `git clone https://github.com/gaskij/rpicampusmap.git` in a terminal shell with Git installed, or using your preferred Git UI. Change to the newly downloaded folder using `cd rpicampusmap`
3. Run `npm install` to download the required Node packages.
4. Open the ".envTEMPLATE" file in your preferred text editor. Change the <username> and <password> fields to match your Mongo Atlas account information. Don't worry, this file will only be saved on your local machine, so nobody will see it! Save the file as ".env"
5. Run `git status` to make sure you are up to date with the current branch. If so, you can begin!

### Running the Server
To start the server, run `npm start` to have the server auto-restart if you make any changes, or `node server.js` if you would rather manually restart in case of changes.

### Contributing to RPI Machines Map
RPI Machines Map is a separate project that branches from RPI Campus Map. While it has many of the same features, it has additional features that allow users to easily find machine shops on campus, and the contents of those shops. To contribute to this project, use `git checkout forgemill` to access the stable project branch, and `git checkout forgemill-dev` to access the developer's branch, where we are working to build and improve the Machine Map. Also, check out the README in those branches for more information.

### Project Guidelines
* We use JavaScript ES6 syntax for defining variables (const, let)
  * You can use Arrow functions or more conventional ES5 functions.
* Try to use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) instead of string concatenation when possible.
* Please do not attempt to commit directly to master! Commit instead to the branch for the feature currently being worked on.
  * You can switch branches with the command `git checkout [branch]`

Have fun making a big impact on campus!
