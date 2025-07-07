FROM node:20 AS base

FROM base AS builder

ARG PROCESS_ENV
ARG CLIENT_NEXTJS_TEMPLATE_AWS_ACCESS_KEY
ARG CLIENT_NEXTJS_TEMPLATE_AWS_SECRET_ACCESS_KEY
ARG CLIENT_NEXTJS_TEMPLATE_AWS_REGION

WORKDIR /app

COPY common ./common
COPY nextjs ./nextjs

WORKDIR /app/common

RUN npm install

WORKDIR /app/nextjs

RUN npm install && \
    npm run build

FROM base AS runner

ARG PROCESS_ENV
ARG CLIENT_NEXTJS_TEMPLATE_AWS_ACCESS_KEY
ARG CLIENT_NEXTJS_TEMPLATE_AWS_SECRET_ACCESS_KEY
ARG CLIENT_NEXTJS_TEMPLATE_AWS_REGION

ENV ENV PROCESS_ENV=${PROCESS_ENV}
ENV CLIENT_NEXTJS_TEMPLATE_AWS_ACCESS_KEY=${CLIENT_NEXTJS_TEMPLATE_AWS_ACCESS_KEY}
ENV CLIENT_NEXTJS_TEMPLATE_AWS_SECRET_ACCESS_KEY=${CLIENT_NEXTJS_TEMPLATE_AWS_SECRET_ACCESS_KEY}
ENV CLIENT_NEXTJS_TEMPLATE_AWS_REGION=${CLIENT_NEXTJS_TEMPLATE_AWS_REGION}

COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.9.1 /lambda-adapter /opt/extensions/lambda-adapter

ENV AWS_LWA_PORT=3000

WORKDIR /app/common

COPY --from=builder /app/common .

WORKDIR /app/nextjs

COPY --from=builder /app/nextjs/.next/standalone ./

COPY --from=builder /app/nextjs/public ./public
COPY --from=builder /app/nextjs/.next/static ./.next/static

USER node

CMD ["node", "server.js"]
