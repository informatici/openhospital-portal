#!/bin/bash

[ -f /etc/nginx/nginx.conf.template ] && {
    echo "Generating nginx.conf from template"
    envsubst '${WORKER_PROCESSES} ${WORKER_CONNECTIONS} ${WORKER_NAME}' < /etc/nginx/nginx.conf.template
    envsubst '${WORKER_PROCESSES} ${WORKER_CONNECTIONS} ${WORKER_NAME}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
}