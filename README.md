# Open Hospital Patient Portal

First rename (mv) `dotenv` to `.env` and set up your variables and locations.

Add in the `hosts` file the following entry `127.0.0.1 develop.ohpp.local develop-api.ohpp.local develop-matomo.local`

Create the folder structure

```
mkdir -p data/develop/database
mkdir -p data/develop/database-matomo
mkdir -p data/develop/logs/mysql
mkdir -p data/develop/logs/mysql-matomo
mkdir -p data/develop/logs/nginx
mkdir -p data/develop/logs/nginx-matomo
mkdir -p data/develop/run
mkdir -p data/develop/sql
```

# Building

## 1. build images from sources

```
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml build build-api
```

or launch image from ghcr

```
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml pull api
```

## 2. init DB (only once)

start mysql database/service (in background)

```
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml up -d mysql
```

create file schema + db. Interrupt with CTRL-C after fully started (WARNING: repeat the command until it runs clean)

```
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml run --rm init-api
```

remove migration file

```
rm -rf data/develop/sql/migrations/*
```

# Starting

## 3. start the app mode with output in the terminal

```
docker compose -f docker-compose-matomo.yaml up -d 
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml up loadbalancer api ui
```

## 4. available services

- Patient Portal (ui) will be available at `https://develop.ohpp.local/` 

- Api will be available at `https://develop-api.ohpp.local/` and `http://localhost:18080/`

- Loadbalancer dashboard (traefik) will be available at `http://localhost:8080`

- Matomo will be available at `http://develop-matomo.ohpp.local/` and `http://localhost:28080/`

    - connect and configure the first time (installation)
    - In Administration > Privacy > Users opt-out, under “Support Do Not Track preference” you can enable/disable Do Not Track support
    
# Stopping

## 5. stop all containers

Interrupt with CTRL-C

```
docker compose -f docker-compose-matomo.yaml stop
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml stop
```

# Cleaning

remove all containers and volumes

```
docker compose rm --stop --volumes --force
docker compose -f docker-compose-matomo.yaml rm --stop --volumes --force
docker volume rm oh-patient-portal_http_logs
docker volume rm oh-patient-portal_matomo-archive
docker volume rm oh-patient-portal_matomo-data
docker volume rm oh-patient-portal_matomo_http_logs
docker volume rm oh-patient-portal_matomo_mysql_data
docker volume rm oh-patient-portal_matomo_mysql_logs
docker volume rm oh-patient-portal_mysql_data
docker volume rm oh-patient-portal_mysql_logs
docker volume rm oh-patient-portal_pids
docker volume rm oh-patient-portal_sql_files
docker volume rm oh-patient-portal_ui_files
```

clean previous data

```
rm -rf data
```

# Developing

## develop the ui (React)

Just cd into patient-portal-ui and run (ui available at http://localhost:3000/)

```
npm install
npm start
```

codebase in patient-portal-ui/src