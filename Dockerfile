FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

RUN npm run build
RUN npm run export

EXPOSE 8080

CMD [ "node", "app.js" ]

# Builds app for production and export static files.
# FROM node:10-alpine as build

# WORKDIR /app
# COPY . /app

# ENV NPM_CONFIG_LOGLEVEL warn
# ENV NODE_ENV production
# ENV PORT 3000
# EXPOSE 3000

# RUN npm i && npm run build && npm run export

# Runs Nginx from the static build.
# FROM nginx:latest AS production

# RUN mkdir -p /usr/share/nginx/html
# WORKDIR /usr/share/nginx/html
# COPY --from=build /app/out .