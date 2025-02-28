# syntax = docker/dockerfile:1
ARG NODE_VERSION=20.18.0
FROM node:${NODE_VERSION}-slim AS base
LABEL fly_launch_runtime="Next.js"

WORKDIR /app
ENV NODE_ENV="production"

# Build stage
FROM base AS build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Copy package files
COPY package.json package-lock.json ./

# Use npm install instead of npm ci
RUN npm install --include=dev --legacy-peer-deps

# Install missing dependency
RUN npm install @radix-ui/react-progress

# Copy application code
COPY . .

# Build application
RUN npx next build

# Remove development dependencies
RUN npm prune --omit=dev

# Final stage
FROM base

# Copy built application
COPY --from=build /app /app

# Add this line after your docker-entrypoint.js file is copied or created
RUN chmod +x /app/docker-entrypoint.js

# Entrypoint sets up the container
ENTRYPOINT [ "/app/docker-entrypoint.js" ]

# Start the server
EXPOSE 3000
CMD [ "npm", "run", "start" ]