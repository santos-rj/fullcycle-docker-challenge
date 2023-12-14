# Nodejs Challenge

The challenge consists of putting into practice the use of **nginx** as a reverse proxy. In addition, the challenge has the following requirements:

- [x] The image must be built using **nodejs**
- [x] When run `docker compose up -d --build` the following result should be printed:

  ```html
  <h1>Full Cycle Rocks!</h1>

  - List of names inserted in database.
  ```

- [x] When a user accesses nginx, it will make a call to our node.js application
- [x] The nodejs application must add a record to our mysql database, registering a name in the people table
- [x] The entire application must be available at the address `localhost:8080`

## How to run the application
1. 
```shell
  git clone git@github.com:santos-rj/fullcycle-docker-challenge.git
  cd fullcycle-docker-challenge
  cd node-challenge
  docker compose up -d --build 
```

2. Access `localhost:8080` in your browser
