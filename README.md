# Storefront Backend Project

An API for a storefront application. This project is a part of the [Udacity Full Stack Nanodegree](https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd0044).

## Requirements

[REQUIREMENTS.md](REQUIREMENTS.md)

## Tech Stack

- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Environment Variables



## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd storefront-backend-api
```

Install dependencies

```bash
  yarn install or npm install
```

set up a postgres d

```
  CREATE USER <your_user> WITH PASSWORD <your_password>;

  CREATE DATABASE <your_database>

  CREATE DATABASE <your_test_database>

 ```
  then
  ```

  GRANT ALL PRIVILEGES ON DATABASE store_front_test TO store_front_user;

  GRANT ALL ON SCHEMA public TO store_front_user; <-- just in case
```

Run migrations

```bash
  yarn migrate:up
```

Start the server

```bash
  yarn watch or npm watch
```

## Running Tests

To run tests, run the following command

```bash
  yarn test or npm test
```
## Getting Started

These instructions will help you to run the project on your local machine for development and testing
purposes.

### Prerequisites

1. node
2. docker[optional] or
3. postgres


### Environment Setup

create a .env file and database.json files and configure them with with your database.

**``.env`` Structure**

```bash
#PG_HOST=###
PG_DB=###
PG_DB_TEST=###
PG_USER=###
PG_PASSWORD=####
PG_PORT=###
BCRYPT_PASSWORD=###3
SALT_ROUNDS=10
TOKEN_SECRET=###
PORT=###
```

### Project Setup

**Install Dependencies**

```bash
npm install
```

**Start Postgres Server (on Docker)**

```bash
docker compose up
```
this may not work on all machines based on so its easier to install and configure postgres

**Create the Database, if not already created**

```postgresql
CREATE DATABASE <Database>; -- For Development purposes
CREATE DATABASE <Database_test>; -- For Testing purposes
```
depending on your pg version you may have to grant additonall public schema permisions for the user

**Run database Migrations**

```bash
npm run migrate:up
```

### Running the App

**Run the Application on development mode** App will run on [http://localhost:3000](http://localhost:3000) by default.

```bash
npm run dev
```

**Build the Application for production and start it**

```bash
npm run start
```

## Project Scripts

### Project setup

```bash
npm install
```

### Start the server for development

```bash
npm run watch
```



### Start the server after build `production`

```bash
npm run start
```

### Run the unit tests

```bash
npm run test
```

### Run the database migrations

```bash
npm run db-up   # Create the database schema
npm run db-down # Drop the database tables
```

### Lints and run prettier to auto format

```bash
npm run prettier
```

```bash
npm run lint
```

### Lints and fixes files

```bash
npm run lint:fix
```

## Endpoints

See [REQUIREMENTS.md](REQUIREMENTS.md) file

## Database Schema

See [REQUIREMENTS.md](REQUIREMENTS.md) file
