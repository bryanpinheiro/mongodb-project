# mongodb-project
![dependencies](https://img.shields.io/david/bryansouza/jwt-project)
![typescript](https://img.shields.io/github/languages/top/bryansouza/jwt-project)

This project is a simple RESTFul API in which uses `mongodb` and `mongoose`.

## Requirements

Before proceeding with this guide, you will need a mongo database. Therefore, 
[Create a MongoDB cluster](https://cloud.mongodb.com/v2#/clusters) and save its `URI` because we will use it later.


## Usage
### 1. Installing dependencies
```
yarn install
```

### 2. Environment variables
   
First, create a `.env` file in the root of the project.

Then, add these variables: 
`HOSTNAME`
`PORT`
`MONGO_URI`

:bulb:***TIP**: run the commands below on your terminal to generate random secrets.*
   
### 3. Starting the server
```
yarn run dev
```

### 4. Rest Client *(Optional)*
After installing the `Rest Client` extension on `vscode`, open the `requests.rest` file to send HTTP requests.
