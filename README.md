# RPI Interactive Campus Map #

This is a webapp that will allow users to easily find spots on campus and in the surrounding area, and map a route to their destination. Users can also post relevant photos and comments on locations' info pages.

This project was started as a term project for the ITWS-2110 (Web Systems Development) class at Rensselaer Polytechnic Institute, under the supervision of Professor Thilanka Munasinghe. It is now being developed and maintained through the Rensselaer Center for Open Source (RCOS).

We are currently in the middle of a large refactor, but heavy construction will be over soon!

###### Current Contributors:
* Justin Gaskins

###### Founders:
* Justin Gaskins
* Christopher Pence
* Sebastien Boulas

###### Version History:
* 5/27/2019 - v0.3.0 All basic map functionality is now restored! You can show a location on the map from the info page, search for locations, or go to the information page from the location on the map.
* 3/26/2019 - v0.2.0 Began refactor and translation from XAMPP to MEAN Stack!
* 1/25/2019 - v0.1.0 Initial stages of functionality are complete! More locations and authorization will be added for the release of v1.0.

### Getting Started
This project uses the MEAN stack (MongoDB, Express,JS, AngularJS, Node.js). You will need a working installation of [Node.js](https://nodejs.org/en/) (LTS version reccomended), and a [MongoDB Atlas Cloud account](https://www.mongodb.com/cloud/atlas) (free is fine).

Once you have that taken care of, there are a few more steps before you can begin work.
1. Clone the repository by either running `git clone https://github.com/gaskij/rpicampusmap.git` in a terminal shell with Git installed, or using your preffered Git UI.
2. Run `npm install` to download the required Node packages. 
3. Open the ".envTEMPLATE" file in your preffered text editor. Change the <username> and <password> fields to match your Mongo Atlas account information. Don't worry, this file will only be saved on your local machine, so nobody will see it!
4. Rename the file from ".envTEMPLATE" to ".env" (Delete the original file if it remains as a copy).
5. Change to the "dev" branch using `git checkout dev`.
6. Run `git status` to make sure you are up to date with the current branch. If so, you can begin!
  
### Running the Server
To start the server, run `npm start` to have the server auto-restart if you make any changes, or `node server.js` if you would rather manually restart in case of changes.

Have fun making a big impact on campus!
