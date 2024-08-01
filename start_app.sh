#!/bin/bash

docker build -t pelada_maker_app .

docker run -p 8000:8000 -v $PWD:/app pelada_maker_app