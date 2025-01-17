# Use the official Node.js LTS image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port your application runs on
EXPOSE 8080

# Define the command to run your application
CMD ["npm", "start"]