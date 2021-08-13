# notions

## Running Migrations
Running Migrations
```shell
cd api/db
npx sequelize-cli db:migrate
```
Undoing the most recent Migration
```shell
cd api/db
npx sequelize-cli db:migrate:undo
```
## Create Model/Migraton
example:

npx sequelize-cli model:generate --name rowCounter --attributes count:integer,projectId:integer,name:string,userId:integer 
 
## To Run Front End Using HTTPS:
HTTPS=true npm start

## To Run Heroku Shell
heroku run bash --app notions-app
