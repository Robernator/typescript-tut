Setting up your project

install nodeJS
install typescript
sudo npm install -g typescript

npm init

this is creating package.json

npm --version

npm install --save-dev lite-server

add liet-server script in package.json  

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
},

npm run start

added .gitignore


add launch.json for debugging
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "pwa-chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}"
        }
    ]
}

compile
tsc app

Generating tsconfig.json file
tsc --init

 "lib": [
      "DOM",
      "ES2015"
    ],    

// "sourceMap": true, 

For compiling


