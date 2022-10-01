# Makefile
MAKEFILE_DIR := $(dir $(lastword $(MAKEFILE_LIST)))

start:
	npm run dev

lint:
	npm run lint
	npm run fmt

setup:
	cp $(MAKEFILE_DIR).env.dist $(MAKEFILE_DIR).env
	npm install -g firebase-tools
	npm i

deploy:
	@make lint
	npm run build
	firebase deploy --only hosting,storage,firestore

emulators:
	firebase emulators:start --only hosting,storage,firestore
