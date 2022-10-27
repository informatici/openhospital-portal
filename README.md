# Open Hospital Patient Portal

First rename (mv) `dotenv` to `.env` and set up your variables and locations.


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

## 3. start app in dev mode with output in the terminal
```
docker compose -f docker-compose-ops.yaml -f docker-compose.yaml up api ui
```
