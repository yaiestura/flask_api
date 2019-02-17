#!/usr/bin/env bash

python -m pip install -r requirements/prod.txt
npm install
rm -rf src/backend/templates/build
npm run build
python src/backend/api.py --production