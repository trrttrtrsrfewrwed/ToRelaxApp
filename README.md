# ToRelaxApp

Application is available at https://torelax.herokuapp.com/signup

To run application locally in docker container do the following steps:
* clone this repo:

`git clone https://github.com/trrttrtrsrfewrwed/ToRelaxApp.git`

* package backend part:

`cd backend`

`mvn package -Dmaven.test.skip=true`

`cd ..`

* build docker-images for frontend and backend separately:

`docker build --file=frontend/frontend.dockerfile  -t torelax-frontend .`

`docker build --file=backend/backend.dockerfile  -t torelax-backend .`

* compose images:

`docker-compose -f docker-compose.yml up`
