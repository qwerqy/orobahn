FROM node:10-alpine

ENV HOME=/home/app
ARG PORT=3000

RUN printenv
RUN adduser -h $HOME -D -s /bin/false app
RUN mkdir -p $HOME
COPY package*.json ./

RUN npm install && npm run build

RUN chown app:app $HOME
COPY --chown=app:app . $HOME
WORKDIR $HOME

USER app

EXPOSE 3000
CMD ["npm", "run", "server"]

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