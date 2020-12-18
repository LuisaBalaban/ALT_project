# How to download ALTfeed

This project contains frontend and backend components

## Backend installation

Travel to 'backend' directory with the following commands

### cd WT_Proj
### cd backend
### cd backend

Install dependencies

### npm install

For database intialization:
Login into mysql:

### mysql -u <your_user> -p

Use your credentials to modify config.json file

Run the follwoing command to populate database

### sequelize db:migrate
### sequelize db:seed:all

Run the app in the development mode

### node  server.js

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Frontend installation

Travel to 'frontend' directory with the following commands

### cd WT_Proj
### cd frontend

Install dependencies

### npm install

Runs the app in the development mode

### npm start

Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

