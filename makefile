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
	npx eslint ./src/ --ext .js --ext .jsx

lint-js:
	npx eslint ./src/ --ext .js --ext .jsx
