### Documentation on CAS Authentication for Express
This document is meant to provide some insight and information when implementing CAS authentication for a webapp with Express and React. I came into this with limited experience on how to use Express and React and throughout the semester made note of issues and troubleshooting tips in the process of working on CAS login/logout functionality for CampusMap.

## Information on packages that can be used
Thanks to the open-sourced nature of Node.js, many packages to implement authentication are made available on [npmjs.com](npmjs.com). However, beware of outdated and perhaps buggy packages that could cause issues with your code. There were a few weeks dedicated to debugging the package that we used to make requests to CAS and the reason that we had issues was because the package had unresolved bugs. The specific problem was that we were not able to utilize the middleware that the package said it provided; for some reason any requests made to CAS returned 404 errors. This was resolved by using the [express-cas-authentication](https://www.npmjs.com/package/express-cas-authentication) package.
Another method that may be useful that I was going to try if express-cas-authentication didn't work was [Passport](http://www.passportjs.org/).

## How to use express-cas-authentication
Implementing the backend with this package was relatively straightforward, thanks to the clear documentation on the [package page](https://www.npmjs.com/package/express-cas-authentication). You will also need to utlize [express-session](https://www.npmjs.com/package/express-session) in order to save user information and sessions.
You can set up a new instance of CASAuthentication by initializing a minimum set of attributes:
* `cas_url` which is the url of the CAS host server
* `service_url` which is the url of your webapp (later I will go into some detail on how this can be set to easily switch between development and production mode)
In CampusMap, it made the most sense to initialize this CAS Authentication object in api/src/routes/cas.ts, where the backend routes and CRUD operations for those routes are defined. Note that the docs page for this package also has example code for the backend routes, which proves to be pretty helpful in learning how to take advantage of the middleware functions and endpoint functions. We incorporated these functions into the CRUD operations and set up any necessary controllers to manage the rest of the session. 

## Troubleshooting when your backend and frontend are served on different ports
Another major issue we had was being able to test the login capability in development mode. CampusMap, in development, runs the backend and the frontend on separate ports, so our determining our `service_url` was tricky at first. We wanted to be able to trigger the CAS Authentication login page by clicking a button in the frontend. Initially, we had the `service_url` as the url for the backend (localhost:5000), but that kept getting rejected when we wanted to make requests to CAS. Using the frontend point (localhost:3000) as our `service_url` ended up being the solution.
You can note some quick syntactic sugar in the `service_url` for our CAS Authentication object:
``  service_url: process.env.NODE_ENV === 'production' ? 'https://rpicampusmap.herokuapp.com' : 'http://localhost:3000'``
This trick, which we found being used by the [Venue RCOS](https://github.com/rcos/venue2) project, helped us manage which url we want CAS to expect depending on whether this has been deployed into production, or we just want to test in development.
