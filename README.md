#Github Querier

##Description
This is a Nodejs/Typescript Api project that queries the github API for some repository details like repo_name, description and number of stars.

##Technologies | Dependencies
* Nodejs/Typescript for the  API
* Npm is used as package manager
* Mocha is used as testing library
* Chai is used as assertion library
* Octokit/rest library for query the github api

##Packages
1. **node_modules** where modules like express are found
2. **src**  contains the project api
3. **tests** Folder that contains my test file
4. **api** contains controller and service files

##Files
1. **app.ts** This contains the server which runs on port 8080. This is the entry point of our program
2. **routes.ts** This file specifies the routes that our request could be routed to
3. **github-repo-controller** It contains our controller which routes to the service
4. **github-repo-controller.ts** It handles the application logical
5. **github-repo.test.ts** It houses all tests for the project

##Set Up
1. create a directory for your project
   ``` mkdir shyft-task1 ```
2. set up package.json where our dependencies are defined
  ``` npm init ```
3. you'll be presented with options to choose and click enter
4. Install typescript and express
   ```npm i --save-dev typescript @types/express```
5. install  ts-node which allows executing our TypeScript file in node
   ```npm i --save-dev ts-node```
6. we can now run our project with 
   ```ts-node src/index.ts```
7. Install nodemon so your project will re-run once you make changes to your project
  ```npm i --save-dev nodemon```
8. Setup scripts in package.Json
   ```typescript
   [
    "scripts": {
    "start:watch": "nodemon src/app.ts",
    "dev": "npx ts-node src/app.ts",
    "test": "mocha --require ts-node/register tests/*.test.ts --timeout 100000 --exit" 
    }
    ] ```
  
* with the above scripts you can now run your project with the command ```npm run dev``` .
* you can run your test with ```npm run test```
* you can run your nodemone with ```npm run start:watch```

9. set up tsconfig.json file that  specifies the root files and the compiler options required to compile a TypeScript project. it looks like this:
```typescript
{
    "compilerOptions": {
        "module": "commonjs",
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "target": "es6",
        "allowJs": true,
        "noImplicitAny": true,
        "moduleResolution": "node",
        "sourceMap": true,
        "outDir": "dist",
        "baseUrl": ".",
        "paths": {
            "*": [
                "*",
                "node_modules/*",
                "src/types/*"
            ]
        },
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "src/**/*.test.ts"]
}
```

### Usage
* Using postman enter the url 
  ``` http://localhost:8080/github/benawad/codeponder ``` where localhost:8080 is the port on which the server is running, github is the organization name we are querying that is github, benawad is a github username or owner and codeponder is a repo name. This will return 
  ```typescript
   {
    "repo_name": "codeponder",
    "description": "Marketplace for Code Reviews",
    "num_of_stars": 264
    }
    ```
1. repo_name is the name of the repository
2. description is the description of the repository
3. num_of_stars is the number of stars on that github repo

* To query all the repos for a specific user use issue a get request using postman to this url ``` http://localhost:8080/github/benawad``` it will return all the repos for that user with those details above.
```typescript
  [
    {
        "repo_name": "accounts",
        "description": "Fullstack authentication and accounts-management for Javascript.",
        "num_of_stars": 6
    },
    {
        "repo_name": "Android-To-Do-List",
        "description": null,
        "num_of_stars": 5
    },
    {
        "repo_name": "api-request-graphql",
        "description": null,
        "num_of_stars": 22
    },
    {
        "repo_name": "apollo-cache-update",
        "description": "How to Update the Apollo Cache After a Mutation",
        "num_of_stars": 32
    },
    {
        "repo_name": "apollo-codegen-example-usage",
        "description": null,
        "num_of_stars": 16
    },
    {
        "repo_name": "apollo-datasource-rest-example",
        "description": "An example typescript project using Apollo DataSource Rest",
        "num_of_stars": 13
    },
    {
        "repo_name": "apollo-link-state-tutorial",
        "description": null,
        "num_of_stars": 27
    },
    {
        "repo_name": "apollo-mocked-provider",
        "description": "Automatically mock GraphQL data with a mocked ApolloProvider",
        "num_of_stars": 89
    },
    {
        "repo_name": "apollo-mocked-provider-example",
        "description": null,
        "num_of_stars": 21
    },
    {
        "repo_name": "apollo-server-react-file-upload",
        "description": null,
        "num_of_stars": 80
    },
    {
        "repo_name": "apollo-upload-example",
        "description": null,
        "num_of_stars": 8
    },
    {
        "repo_name": "astral-bugs",
        "description": null,
        "num_of_stars": 42
    },
    {
        "repo_name": "astralfans-landing",
        "description": null,
        "num_of_stars": 98
    },
    {
        "repo_name": "aws-appsync-example",
        "description": "Example AWS AppSync project with React.js",
        "num_of_stars": 15
    },
    {
        "repo_name": "aws-appsync-series",
        "description": "AWS AppSync Tutorial",
        "num_of_stars": 18
    },
    {
        "repo_name": "baklava",
        "description": "Trello clone GraphQL Node.js backend ",
        "num_of_stars": 12
    },
    {
        "repo_name": "basic-react-form",
        "description": "Basic form in React",
        "num_of_stars": 83
    },
    {
        "repo_name": "basic-realtime-react-client",
        "description": "Basic websockets example using React for the client and feathersjs for the backend",
        "num_of_stars": 2
    },
    {
        "repo_name": "benawad.com",
        "description": "My website",
        "num_of_stars": 106
    },
    {
        "repo_name": "BlackJack",
        "description": null,
        "num_of_stars": 2
    },
    {
        "repo_name": "circleci-monorepo",
        "description": null,
        "num_of_stars": 25
    },
    {
        "repo_name": "circleci-node",
        "description": null,
        "num_of_stars": 17
    },
    {
        "repo_name": "circleci-react",
        "description": null,
        "num_of_stars": 16
    },
    {
        "repo_name": "cocktails",
        "description": "UI for browsing IBA cocktails",
        "num_of_stars": 2
    },
    {
        "repo_name": "codeponder",
        "description": "Marketplace for Code Reviews",
        "num_of_stars": 264
    },
    {
        "repo_name": "codered-server",
        "description": null,
        "num_of_stars": 1
    },
    {
        "repo_name": "Connect-Four-Python",
        "description": null,
        "num_of_stars": 3
    },
    {
        "repo_name": "copy-paste-android-broken",
        "description": null,
        "num_of_stars": 3
    },
    {
        "repo_name": "cra-redux-saga",
        "description": "A simple example that uses Redux Saga and Create React App",
        "num_of_stars": 75
    },
    {
        "repo_name": "cra-template-typescript-graphql",
        "description": null,
        "num_of_stars": 43
    }
]
```

###Tests
The test file is found in the github-rep.test.ts using mocha for testing  and chai and test library

1. ```typescript
   it('should contain the required properties if repo and owner name exist', (done) => {
    chai.request(app)
      .get("/github/kaindl-bau/water-pipe-burst")
      .end((err, res) => {
        expect(res.body).to.have.property('repo_name');
        expect(res.body).to.have.property('num_of_stars');
        expect(res.body).to.have.property('description');
        done();
      });
   });
   ```
   This test checks whether response body of  this /github/kaindl-bau/water-pipe-burst url has the properties repo_name, num_of_stars, and description.
2. ```typescript
   it('should have the required structure if owner and repo name exist', (done) => {
    chai.request(app)
      .get("/github/kaindl-bau/water-pipe-burst")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.not.be.empty;
        done();
      });
    });
   ```
   This test checks if the response has the status code 200, its and object and not empty so long as the username and repo are valid
3. ```typescript
   it('should have property status and message if not found', (done) => {
    chai.request(app)
      .get("/github/kaindl-bau/water-pipe-burs")
      .end((err, res) => {
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('status');
        done();
      });
     });
   ```
   This test checks whether the response body of a not found repo has the property of message and status.
4. ```typescript
   it('should return proper message if not found', (done) => {
    chai.request(app)
      .get("/github/kaindl-bau/water-pipe-burs")
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal("Not Found");
        done();
      });
     });
   ```
   This test checks whether the status code is 404 and message is Not found if the repo/ username is not found.
5. ```typescript
   it('Properties should have the correct values', (done) => {
    chai.request(app)
      .get("/github/udacity/DevOps_Microservices")
      .end((err, res) => {
        expect(res.body.repo_name).to.equal("DevOps_Microservices");
        expect(res.body.num_of_stars).to.equal(167);
        expect(res.body.description).to.equal("Supporting material and projects for a course on Cloud DevOps: Microservices.");
        done();
      });
    });
   ```
   This test checks whether the properties return the expected values when queried.