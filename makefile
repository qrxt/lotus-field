install:
	npm i

build:
  npm run build --if-present

ci:
	npm ci

watch:
	npm run watch

lint:
	npx eslint ./

lint-js:
	npx eslint ./
