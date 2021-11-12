create 
class Calculator

show debugging

see tsconfig

tsc 
see outcome in js
default using es5 version

change tsconfig.json

    "outDir": "./dist",                        
    "rootDir": "./src", 

using module, separated files

calculator.ts

export class Calculator {
    public add(num1: number, num2: number): number {
        return num1 + num2;
    }
}

import { Calculator } from "./calculator";

gives error: ReferenceError: Can't find variable: exports

import { Calculator } from "./calculator.js";

change tsconfig.json
    "sourceMap": true,   

set breakpoint


