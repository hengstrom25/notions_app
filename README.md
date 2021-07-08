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
## To Run Front End Using HTTPS:
HTTPS=true npm start

## Status
-current state: created links to each project + api to fetch the project
-next: create project page and move the counter to the page and save it
