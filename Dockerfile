### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run (with Python) ###
FROM python:3.8.3
COPY --from=build /usr/src/app/dist/ /usr/src/app/dist/frontend-hackaton
WORKDIR /usr/src/app/dist/frontend-hackaton
CMD python -m http.server 80


### STAGE 2: Run (with nginx) ###
#FROM nginx:1.17.1-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /usr/src/app/dist/aston-villa-app /usr/share/nginx/html

### nginx.conf file content ###
#events{}
#http {
#    include /etc/nginx/mime.types;
#    server {
#        listen 80;
#        server_name localhost;
#        root /usr/share/nginx/html;
#        index index.html;
#        location / {
#            try_files $uri $uri/ /index.html;
#        }
#    }
#}
