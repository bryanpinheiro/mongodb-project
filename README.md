# mongodb-project
![dependencies](https://img.shields.io/david/bryansouza/mongodb-project)
![typescript](https://img.shields.io/github/languages/top/bryansouza/mongodb-project)

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

***(Observation):** the code below allows typescript to use the **module resolution strategy** defined in the `tsconfig.json`. The parameter `require` means to execute the module `tsconfig-paths/register` before anything else.*

```
ts-node --require tsconfig-paths/register 
```
   
### 3. Starting the server
```
yarn run dev
```

### 4. Rest Client *(Optional)*
After installing the `Rest Client` extension on `vscode`, open the `requests.rest` file to send HTTP requests.
