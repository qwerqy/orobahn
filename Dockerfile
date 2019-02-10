FROM node:10-alpine

ENV HOME=/home/node/app
ENV BUTTERCMS_API=fd1efe394a6740dbfe76ff507508849f406c2aca
ARG PORT=3000

RUN printenv
RUN adduser -h $HOME -D -s /bin/false app
RUN mkdir -p $HOME/node_modules && chown -R node:node $HOME
WORKDIR $HOME
COPY . .

RUN npm install

RUN npm run build

COPY --chown=node:node . .

USER node

RUN ls -la $HOME
RUN ls -la

EXPOSE 3000
CMD ["node", "app.js"]

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