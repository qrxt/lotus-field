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

lint:
	npx eslint ./

lint-js:
	npx eslint ./
