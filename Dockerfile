FROM node:lts-alpine as build

WORKDIR /app
RUN apk add envsubst
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN export $(cat .env | xargs) && envsubst < src/environments/environment.template.ts > src/environments/environment.ts

FROM node:lts-alpine as development

WORKDIR /app
RUN npm install -g @angular/cli
COPY --from=build /app /app
CMD [ "ng", "serve", "--host", "0.0.0.0" ]
