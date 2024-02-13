# Use node base image
FROM node:latest

# Set working directory
WORKDIR /app/client

# Install dependencies
COPY package*.json ./

RUN npm install

# Copy app files
COPY . .

# Build the app
RUN npm run build

RUN npm install -g serve

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose port
EXPOSE 3000

