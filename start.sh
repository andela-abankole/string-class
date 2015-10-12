#!/bin/sh

# install dependencies
echo "*************************"
echo "*************************"
echo "***** Hi, $USER ********"
echo "*************************"
echo "*************************"
echo " "
echo "installing dependencies ..."
echo "*************************"
npm install

# start server 
echo " "
echo "redirecting to localhost:4000 ... "
echo "*************************"
echo " "
echo "serving on port 4000 ...." 
npm start && fg

# open browser
echo "*************************"
echo " "
echo "opening on Google Chrome Browser ... "
open http://localhost:4000/jasmine/SpecRunner.html -a 'google chrome' &