#!/bin/bash

docker build \
  --build-arg PROCESS_ENV=local \
  --build-arg CLIENT_NEXTJS_TEMPLATE_AWS_ACCESS_KEY= \
  --build-arg CLIENT_NEXTJS_TEMPLATE_AWS_SECRET_ACCESS_KEY= \
  --build-arg CLIENT_NEXTJS_TEMPLATE_AWS_REGION= \
  -f nextjs/Dockerfile \
  -t client-nextjs-template .
