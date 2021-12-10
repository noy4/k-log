# syntax=docker/dockerfile:1
FROM node:16-alpine AS builder

WORKDIR /k-log

COPY ["package.json", "package-lock.json", "./"]
COPY prisma ./prisma/

RUN npm install --frozen-lockfile --ignore-optional

COPY . .
RUN npm run build


FROM node:16-alpine
COPY --from=builder /k-log ./
CMD [ "npm", "run", "start:prod" ]