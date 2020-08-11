FROM node:14.2
WORKDIR /usr/app
COPY package.json /usr/app
RUN npm install
COPY . /usr/app
CMD [ "npm install bcrypt" ]
EXPOSE 4000