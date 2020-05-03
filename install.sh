#!/bin/bash

echo "Installing backend node modules...";
cd api;
{
  npm install && echo -e "Backend node modules successfully installed.\n";
} || {
  echo "Error installing backend node modules." 1>&2;
  exit 1;  
}
cd ..;

echo "Installing frontend node modules...";
cd campusmap;
{
  npm install && echo -e "Frontend node modules successfully installed.\n";
} || {
  echo "Error installing frontend node modules." 1>&2;
  exit 1;
}
cd ..;

{
  cp default.env .env && echo -e "Created new .env file. Please edit the file with your credentials.\n";
} || {
  echo "Error creating .env file." 1>&2;
  exit 1;
}

echo "Installation successful.";
