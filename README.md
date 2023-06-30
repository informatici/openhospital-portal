# Open Hospital Patient Portal

The Patient Portal will allow patients to safely and intentionally (informed consent) access their data from outside the hospital that is using [Open Hospital](www.open-hospital.org) software. 

:warning: The current project is a work in progress (WIP) and it **is not ready for production**.

## Summary
- [Components](#components)
- [Instructions](#instructions)
- [Building](#building)
  * [1. build images from sources](#1-build-images-from-sources)
  * [2. create first migration script for the DB (only once)](#2-create-first-migration-script-for-the-db-only-once)
  * [3. build the ui](#3-build-the-ui)
- [Starting](#starting)
  * [4. start the app mode with output in the terminal](#4-start-the-app-mode-with-output-in-the-terminal)
  * [5. available services](#5-available-services)
- [Stopping](#stopping)
  * [5. stop all containers](#5-stop-all-containers)
  * [6. Cleaning](#6-cleaning)
- [Screenshots](#screenshots)
- [Developing](#developing)
  * [API](#api)
  * [Develop the ui (React)](#develop-the-ui-react)
- [Connector (WIP)](#connector-wip)
  * [1. Setup using a test db](#1-setup-using-a-test-db)
  * [2. Build from sources](#2-build-from-sources)
  * [3. Start the connector with the output in the terminal](#3-start-the-connector-with-the-output-in-the-terminal)
  * [4. Using a production db](#4-using-a-production-db)

<small><i>Table of contents generated with <a href='http://ecotrust-canada.github.io/markdown-toc/'>markdown-toc</a></i></small>

## Components

<div align="center">
<img src="./doc/images/patientportal.png"  width="70%" height="70%">
</div>

## Instructions

First copy `dotenv` to `.env` and set up your variables and locations.

Add in the `hosts` file the following entry `127.0.0.1 develop.ohpp.local api-develop.ohpp.local matomo-develop.ohpp.local`

Create the folder structure

```
export $(grep -E 'ENVIRONMENT_NAME|BASE_DOMAIN' .env | xargs)
mkdir -p data/$ENVIRONMENT_NAME/database data/$ENVIRONMENT_NAME/database-matomo data/$ENVIRONMENT_NAME/logs/mysql data/$ENVIRONMENT_NAME/logs/mysql-matomo data/$ENVIRONMENT_NAME/logs/nginx data/$ENVIRONMENT_NAME/logs/nginx-matomo data/$ENVIRONMENT_NAME/run data/$ENVIRONMENT_NAME/sql/migrations data/$ENVIRONMENT_NAME/letsencrypt

```


## Building

### 1. build images from sources

```
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml build --build-arg ENVIRONMENT_NAME --build-arg BASE_DOMAIN build-api
```

or launch image from ghcr

```
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml pull api
```

### 2. create first migration script for the DB (only once)

Start mysql database/service (in background).

```
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml up -d mysql
```
Wait several seconds to finish the startup.

Let Hibernate to create the script in data/sql/migrations folder.

```
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml run --rm init-api
```

Interrupt with CTRL-C after finish (don't mind the errors)

### 3. build the ui

```
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml build --build-arg ENVIRONMENT_NAME --build-arg BASE_DOMAIN ui
```

## Starting

### 4. start the app mode with output in the terminal

```
# matomo instance (optional, in background)
docker compose -f docker-compose-matomo.yaml up -d

# the portal (it will create the DB the first time)
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml up loadbalancer api ui
```

Demo data (optional, only once): From another window, with everything started, run:

```
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml run --rm demo-data
```

Demo users

```
USER                USERNAME          PASSWORD           ROLE
------------------------------------------------------------------
admin               admin             admin              ADMIN
hospital admin      admin@email.com   hospadmin2023      ADMIN
doctor              doctor@email.com  doctor2023         DOCTOR
Justin Frederick    701010            justin2023         PATIENT
Anthon Geremy       701011            anthon2023         PATIENT
Veronique Fountain  701012            veronique2023      PATIENT
Cypher Marica       701013            cypher2023         PATIENT
Serena Levinson     701014            serena2023         PATIENT
Bardsley Zenaida    701015            bardsley2023       PATIENT
Graney Almedan      701016            graney2023         PATIENT
Ackman Sammy        701017            ackman2023         PATIENT
Pohlman Margot      701018            pohlman2023        PATIENT
Jeana Bennett       701019            jeana2023          PATIENT
Abramo Oliver       701020            abramo2023         PATIENT
```


### 5. available services

- Patient Portal (ui) will be available at `https://develop.ohpp.local/` 

- Api will be available at `https://api-develop.ohpp.local/swagger-ui/` and `http://localhost:18080/swagger-ui/`

- Loadbalancer dashboard (traefik) will be available at `http://localhost:8080`

- Matomo will be available at `http://matomo-develop.ohpp.local/` and `http://localhost:28080/`

- Instructions for Matomo (please read it carefully):

    - connect and configure the first time (installation) from http://develop-matomo.ohpp.local/
    - setup DB and users like in .env file
    - setup super user as root and choose a password (main user, don't forget!)
    - Website name: "Open Hospital Patient Portal"
    - Website URL: http://develop.ohpp.local
    - Untick "Enable Do Not Track support" or (after) in Administration > Privacy > Users opt-out, under “Support Do Not Track preference” disable

## Stopping

### 5. stop all containers

Interrupt with CTRL-C

```
docker compose -f docker-compose-matomo.yaml stop
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml stop
```

### 6. Cleaning

Remove all containers and volumes

```
docker compose rm --stop --volumes --force
docker compose -f docker-compose-matomo.yaml rm --stop --volumes --force
docker volume rm $(docker volume ls --format '{{.Name}}' | grep ${PWD##*/})
```

Clean previous data

```
rm -rf data/$ENVIRONMENT_NAME
```

## Screenshots

![42iDuJPFd1XxX66M](https://user-images.githubusercontent.com/2938553/221145369-20f95889-6d00-4ab0-a172-b79896101b5c.png)

![image](https://user-images.githubusercontent.com/2938553/221145575-2877d137-4928-423c-a3a1-bdd7420c0a72.png)

![image](https://user-images.githubusercontent.com/2938553/221145603-24444a1d-45ab-4d69-bd72-488d39092289.png)

![image](https://user-images.githubusercontent.com/2938553/221145636-2f1a61c4-8fa5-4109-a356-82072b84bfc0.png)

![image](https://user-images.githubusercontent.com/2938553/221145659-c7c17405-002c-484a-8f6c-519d474ea1e4.png)


## Developing

### API

Api available at `https://develop-api.ohpp.local/` and `http://localhost:18080/`

Swagger UI available at `https://develop-api.ohpp.local/swagger-ui/` and `https://develop-api.ohpp.local/v3/api-docs`

- See ppoh.postman_collection.json

### Develop the ui (React)

Just cd into patient-portal-ui and run (ui available at http://localhost:3000/)

```
npm install
npm start
```

Codebase in patient-portal-ui/src

## Connector (WIP)

A scaffolding for the connector that will retrieve data from an Open Hospital instance (DB) and feed the Patient Portal DB

It uses [openhospital-core](https://github.com/informatici/openhospital-core.git) and it expects the OPENHOSPITAL_CORE_VERSION to point a tagged version

### 1. Setup using a test db

First create connector settings based on .env

```
make
```

Get db scripts from https://github.com/informatici/openhospital-core.git $OPENHOSPITAL_CORE_VERSION

```
rm -rf deps
export $(grep OPENHOSPITAL_CORE_VERSION .env | xargs)
mkdir deps && pushd deps && git clone --depth=1 -b v$OPENHOSPITAL_CORE_VERSION https://github.com/informatici/openhospital-core.git && popd

```

Start the database container with:

```
docker compose -f docker-compose-connector.yml up -d database
```

Install demo data with:

```
docker compose -f docker-compose-connector.yml run oh-database-init
```

### 2. Build from sources

```
docker compose -f docker-compose-connector.yml build connector
```

### 3. Start the connector with the output in the terminal

```
docker compose -f docker-compose-connector.yml up connector
```

### 4. Using a production db

You can setup the connector to use an existing Open Hospital DB with real data

In docker-compose-connector.yml, comment:

```
#    networks:
#      - hospital-net
```

and uncomment:

```
    network_mode: host
```

In `.env` set up variables in `[oh connector]` section then run `make`


Rebuild and start with `docker compose -f docker-compose-connector.yml up --build connector`
