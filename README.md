# RPI Machines Map #


This is a webapp that will allow users to easily find machine shops on campus, and the contents of those shops. This project exists as a branch of [RPI Interactive Campus Map](documentation/CM_README.md).

RPI Machines Map has a map legend that allows users to view regular campus locations (non-shop locations), just machine shops, or both. The machine shops are also searchable by the machines at their sites, allowing users to know where to go on campus, based on their mechanical needs.

This project was originally commissioned by Sam Chiappone (Director of Manufacturing Innovation) and Scott Yerbury (Electromechanical Technician/ Machine Shops Manager). It is now being developed and maintained through the Rensselaer Center for Open Source (RCOS).


### Current Contributors:
* Justin Gaskins
* Gabriel Wild
### Version History:
* 7/29/2019 - Stable version of Machines Map on the forgemill branch. Map has basic preliminary functions including map legend, searchable machines, and machine shops in database.

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

### LICENSING
The service worker and manifest were modified from MIT licensed code found at PWABuilder.

Have fun making a big impact on campus!
