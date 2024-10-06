FROM node:lts-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

FROM node:lts-alpine as development

WORKDIR /app
RUN npm install -g @angular/cli
COPY --from=build /app /app
CMD [ "ng", "serve", "--host", "0.0.0.0" ]
