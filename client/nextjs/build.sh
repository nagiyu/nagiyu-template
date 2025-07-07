#!/bin/bash

docker build \
  --build-arg PROCESS_ENV=local \
  -f nextjs/Dockerfile \
  -t client-nextjs-template .
