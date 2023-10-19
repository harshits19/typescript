#### typescript basics

1. typescript files are compiled into javascript
2. Ts is a strongly typed lang, in which we have to specify the type of data we use, while Js is loosely typed lang.
3. Ts is a statically typed lang, means types are checked at compile time, while Js is dynamically typed lang where types are checked at runtime.
4. Benefits of Ts
- self documenting
- catch error in dev
- great for dev in teams  
2. extension - ts or tsx
3. to compile ts file, use `$ tsc fileName.ts`
4. create a ts config file using `$ tsc --init`
5. changes in tsconfig
- "outDir": "./build/js", "rootDir": "./src" : to setup root and output directories
- "include": ["src"]: to include only the src directory; any other file that's present outside src will not be compiled into the JS file automatically.
- "noEmitOnError" : when this flag is set to true, it will prevent compiling the ts file into a js file whenever any error occurs.

6. we have to compile ts file each time when we make any changes, to compile automatically,
   use `$ tsc fileName.ts -w` for single file
   use `$ tsc -w` for global
