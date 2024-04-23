prepare: 
	mkdir -p dist

clean: prepare
	rm -rf dist/*

dist/index.js: src/index.tsx
	bun build $< --outdir $@

build: clean dist/index.js