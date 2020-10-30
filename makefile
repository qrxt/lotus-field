install:
	npm i

build:
	npm run build --if-present

analyze:
	npm run bundle-report

ci:
	npm ci

watch:
	npm run watch

lint: lint-js lint-css

lint-js:
	npm run lint-js

lint-css:
	npm run lint-css

test:
	npm test

check-all: lint test

test-coverage:
	npx jest --coverage
