# TYPESCRIPT_BASIC_PROJECTS
This repo is created for practicing typescript projects


The maps folder contains a simple implementation of creating markers on google maps using the google maps api. The implementation consists of a User and a Company class where the data for the user and Company is created using the Faker package from NPM library. Once we create instances of the User and a Company we pin the User and the Company over Google maps. We create an interface in the CustomMaps file to reduce code redudancy as we would have to create seperate functions for User and Comapny in the file to manage both markers, but since both the classes have the same property of {location : {lat, lng} } we can use an interface.

Method of execution . 
Clone the repo. 
cd into maps.
install all the dependenices using npm install
Then run npx parcel index.html
open the URL in a browser.
