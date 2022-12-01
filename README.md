# Open Hospital Patient Portal

First rename (mv) `dotenv` to `.env` and set up your variables and locations.

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

clean previous data

```
rm -rf data/develop/sql/*
rm -rf data/develop/database/*
```

start mysql database/service (in background)

```
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml up -d mysql
```

create file schema + db. Interrupt with CTRL-C after fully started

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
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml up -d mysql (skip if done in step 2. init DB)
docker compose -f docker-compose-matomo.yaml up -d 
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml up loadbalancer api ui
```

## 4. available services

- Patient Portal (ui) will be available at `https://develop.ohpp.local/` 

- Api will be available at `https://develop-api.ohpp.local/` and `http://localhost:18080/`

- Loadbalancer dashboard (traefik) will be available at `http://localhost:8080`

- Matomo will be available at `http://localhost:28080/`

    - connect and configure the first time

# Developing

## develop the ui (React)

Just cd into patient-portal-ui and run (ui available at http://localhost:3000/)

```
npm install
npm start
```

codebase in patient-portal-ui/src