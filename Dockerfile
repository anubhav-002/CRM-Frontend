# Step 1: Build the React app
FROM node:14-alpine AS builder

# Set working directory
WORKDIR /app

# Copy only package.json to install dependencies
COPY package.json ./

# Install dependencies without lock file
RUN npm install

# Copy the rest of the application source
COPY . ./

# Build the app for production
RUN npm run build

# Step 2: Use Nginx to serve the app
FROM nginx:alpine

# Remove default Nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
