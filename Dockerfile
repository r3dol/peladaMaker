# Use the official Python image from the Docker Hub
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Copy the FastAPI application code to the container
COPY . /app

# Install the dependencies
RUN pip install --no-cache-dir --upgrade -r requirements.txt
