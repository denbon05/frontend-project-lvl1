install:
	npm install
publish:
	npm publish --dry-run
lint:
	npx eslint .
fixLint:
	npx eslint . --fix-dry-run

.PHONY: 
