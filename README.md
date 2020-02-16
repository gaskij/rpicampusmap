# RPI Interactive Campus Map #


This is a webapp that will allow users to easily find spots on campus and in the surrounding area, and map a route to their destination. Users can also post relevant photos and comments on locations' info pages.

This project was started as a term project for the ITWS-2110 (Web Systems Development) class at Rensselaer Polytechnic Institute, under the supervision of Professor Thilanka Munasinghe. It is now being developed and maintained through the Rensselaer Center for Open Source (RCOS).

We are currently in the middle of a large refactor, but heavy construction will be over soon!

### Current Contributors:
* Justin Gaskins
* Gabriel Wild
* Jon-Pierre Antoine
* Darrian Gardea
* Aidan Duane		
* Cody Messina
* Kristina Adams

### Founders:
* Justin Gaskins
* Christopher Pence
* Sebastien Boulas

### Getting Started
This project uses the MEAN stack (MongoDB, Express.JS, AngularJS 1.7, Node.js). You will need a working installation of [Node.js](https://nodejs.org/en/) (LTS version recommended), and a [MongoDB Atlas Cloud account](https://www.mongodb.com/cloud/atlas) (free is fine).

Once you have that taken care of, there are a few more steps to take before you can begin work.
1. Install the nodemon package by running `npm install -g nodemon` in your node configured shell.
2. Clone the repository by either running `git clone https://github.com/gaskij/rpicampusmap.git` in a terminal shell with Git installed, or using your preferred Git UI. Change to the newly downloaded folder using `cd rpicampusmap`
3. Run `npm install` to download the required Node packages.
4. Make a copy of the ".envTEMPLATE" file and open it in your preferred text editor. Change the <username> and <password> fields to match your Mongo Atlas account information. Don't worry, this file will only be saved on your local machine, so nobody will see it! Save the file as ".env"
5. Run `git status` to make sure you are up to date with the current branch. If so, you can begin!

### Running the Server
To start the server, run `npm start` to have the server auto-restart if you make any changes, or `node server.js` if you would rather manually restart in case of changes.

### Project Contribution Guidelines
* DO **NOT** attempt to push directly to `master`! Instead, follow this basic workflow:
  1. Create a new branch dedicated only to the task at hand. Give it a name starting with the type of work it pertains to. For example, `hotfix/broken_github_link` or `feature/create_new_page`
  2. Commit and push your changes to the branch for the feature currently being worked on.
  3. When you believe you are finished making changes, open a Pull Request to have your changes merged into `master`.
  4. While you're there, why not give someone else's pull request a review, too?
  * You can switch branches with the command `git checkout [branch]`
* When writing code, adhere to the RPI CampusMap [Style Guide](https://github.com/gaskij/rpicampusmap/wiki/Style-Guide). The most important/basic rules are:
  * We use [JavaScript ES6 syntax](https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/) for many aspects of the code, like defining variables (const, let)
  * Use [Arrow functions](https://javascript.info/arrow-functions-basics) instead of conventional ES5 functions when possible.
  * Use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) instead of string concatenation when possible.
  * Use 2 spaces (not tabs) for indentation. Most IDEs and editors can be configured to use tab-width of 2 and use spaces instead of tabs.

### Contributing to RPI Machines Map
RPI Machines Map is a separate project that branches from RPI Campus Map. While it has many of the same features, it has additional features that allow users to easily find machine shops on campus, and the contents of those shops. To contribute to that project, see the [RPI Machines repo](https://github.com/gwild37/RPI-Machines).

### LICENSING
The service worker and manifest were modified from MIT licensed code found at PWABuilder.

Have fun making a big impact on campus!
