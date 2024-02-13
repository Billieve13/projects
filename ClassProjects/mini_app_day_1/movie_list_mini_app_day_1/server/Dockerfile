# Use latest as a base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app/server

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Define the command to run your server when the container starts
CMD ["node", "server.js"]

# Expose the port on which your server will run
EXPOSE 5000