# Use the official Python image from the Docker Hub
FROM python:3.11-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the FastAPI application code to the container
COPY . /app

# Install the PostgreSQL dependencies
RUN apk update \
    && apk add --virtual .build-deps gcc musl-dev \
    && apk add postgresql-dev

# Install the dependencies
RUN pip install --upgrade -r requirements.txt

# Set the environment variables
ENV ENV=local

# Expose the port
EXPOSE 8000

# Run the FastAPI application
ENTRYPOINT ["python", "-m", "app.server"]
