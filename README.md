# RPI CampusMap #


This is a webapp that will allow users to easily find spots on campus and in the surrounding area, and map a route to their destination. Users can also post relevant photos and comments on locations' info pages.

This project was started as a term project for the ITWS-2110 (Web Systems Development) class at Rensselaer Polytechnic Institute, under the supervision of Professor Thilanka Munasinghe. It is now being developed and maintained through the Rensselaer Center for Open Source (RCOS).

We are currently in the middle of a large refactor, but heavy construction will be over soon!

Try it out at https://rpicampusmap.herokuapp.com/

### Current Contributors:
* Justin Gaskins
* Priya Sapra
* Carl Stadtler
* Toluwaleke Semowo

### Project Lead:
* Justin Gaskins

### Founders:
* Justin Gaskins
* Christopher Pence
* Sebastien Boulas

### Version History:
* 10/8/2020 - v1.1.0 Much of the project is converted now, and new features are being added again.
* 5/3/2020 - v1.0.0 The project is being converted to React! All AngularJS code will be replaced at the end of this process.
* 2/16/2020 - v0.4.0 Login and registration implemented. Messages are flashed on error state i.e. invalid email,
user not found, login to see admin page etc. New welcome page also added (page before map access). Code has been rebased making it more modular. All html converted to ejs and views used (modularity).
* 5/27/2019 - v0.3.0 All basic map functionality is now restored! You can show a location on the map from the info page, search for locations, or go to the information page from the location on the map.
* 3/26/2019 - v0.2.0 Began refactor and translation from XAMPP to MEAN Stack!
* 1/25/2019 - v0.1.0 Initial stages of functionality are complete! More locations and authorization will be added for the release of v1.0.

### Getting Started
This project uses the MERN stack (MongoDB, Express.JS, ReactJs, Node.js). You will need a working installation of [Node.js](https://nodejs.org/en/) (LTS version recommended), and a [MongoDB Atlas Cloud account](https://www.mongodb.com/cloud/atlas) (free is fine).

Once you have that taken care of, there are a few more steps to take before you can begin work.
1. Clone the repository by either running `git clone https://github.com/gaskij/rpicampusmap.git` in a terminal shell with Git installed, or using your preferred Git UI.
2. Open the newly downloaded folder using `cd rpicampusmap`. Inside of this folder, you will find some general configuration files and a few more folders. The `docs` folder contains all documentation and screenshots about the project. The `api` folder houses the backend API code and server, and its own node configuration. The `campusmap` folder houses the frontend single-page-application code and its own node configuration as well.
3. You can install the project dependencies automatically or manually.
  - Automatic:
    If you are using a Unix based system, you can use the following command to automatically set up the dependencies.
    ```bash
    sudo ./install.sh
    ```
  - Manual:
    ```bash
      cd api && npm install && cd ..
      cd campusmap && npm install && cd ..
      cp default.env .env
    ```
4. Open the new `.env` file in your preferred text editor (you may need to enable the option to "show hidden files" to see it). Change the `<username>` and `<password>` fields to match your Mongo Atlas account information. Don't worry, this file will only be saved on your local machine, so nobody will see it!
5. You should now be ready to use the application. Don't forget to create a development branch before beginning work!

### Running the Servers
To start the servers, run `npm start` in the respective folders (`api` or `campusmap`). You will need to have both running for full functionality.

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
RPI MachinesMap is a separate project that branches from RPI CampusMap. While it has many of the same features, it has additional features that allow users to easily find machine shops on campus, and the contents of those shops. To contribute to that project, see the [RPI Machines repo](https://github.com/gwild37/RPI-Machines).

Have fun making a big impact on campus!
