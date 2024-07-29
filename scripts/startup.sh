#!/bin/bash

python3.11 -m venv venv
source venv/bin/activate
pip install -r api/requirements.txt

fastapi dev api/app.py # reminder: dev flag enables auto reload for local development
