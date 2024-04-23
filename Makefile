prepare: 
	mkdir -p build

clean: prepare
	rm -rf build/*

dist/index.js:
	bun run react-scripts build

build: clean dist/index.js