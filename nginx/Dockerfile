FROM nginx:1.21.3

ARG TZ=Europe/Rome

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY react-static.conf.template /etc/nginx/templates/react-static.conf.template
COPY nginx-conf-template.sh /docker-entrypoint.d/90-nginx-conf-template.sh

VOLUME [ "/var/log/nginx", "/var/cache/static" ]

ENV WORKER_NAME default
ENV WORKER_PROCESSES auto
ENV WORKER_CONNECTIONS 1024
ENV MONITOR_PORT 8004

