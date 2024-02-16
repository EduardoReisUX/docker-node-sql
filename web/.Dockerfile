FROM node:20-alpine

# create a working directory /app inside the container
WORKDIR /app 

# copy package.json and package-lock.json to the /app folder
COPY package*.json ./

# Run npm install to install dependencies (in our case express and mysql)
RUN npm install

COPY . .

# Expose port 5000, so that we can access the app outside the container
EXPOSE 5000

# Finally run npm start to start the backend
CMD ["npm", "start"]