# Getting Started with ANZ UI

This project has the UI Code for ANZ Application.\

## Application purpose

Main purpose of the project is to display all active and pending bank accounts of the user.\
`Accounts summary` screen holds this infomation.\
`List transactions` screen helps to show all transactions on a given account.\
`New Account` screen provides user a chance to apply for new accounts. All  newly created 
accounts go to Pending status. 

It is built using React plus Redux.


## Run ANZ UI

Steps to start the UI application.

### `credentials`

`username: anzuser`\
`passowrd: password`

### `checkout the code`

git clone anz ui project and checkout master branch.\
`git clone https://github.com/markondavineeth25/anz_ui.git`

`git fetch & git checkout master`


### `Install dependencies`

`npm install`


### `start the react project`

`npm start`

[Windows Users]: change start script in package.json to `SET PORT=4200 && react-scripts start` 


Start the application on `localhost:4200`

Use the above credentials to login

### `redux store`

This application uses redux store to hold username and active accounts. 

For ANZ API, refer to README of anz_api application

