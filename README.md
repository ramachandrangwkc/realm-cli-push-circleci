
# REALM CLI & CD Reference 

This project demonstract simple way to setup Mongodb Realm through CLI and Setup a pipeline through CircleCLI(or any other like Jenkins).

# Installation Setup
The project requires few prerequsites to be setup and configured. 

1. Mongodb Cluster need to set up and configured for the App services to connect it as a data source. Follow this [link](./MONGODB_CLUSTER.md) to setup a new Mongodb Cluster.

2. Project API key needed to be created. The API key will be used to login the `realm-cli`. Follow this [link](./API_KEY.md) to create a new API Key.




## Run via CLI

App Services needed to be created and configured. Follow this [link](./ATLAS_BACKEND.md) to create and deploy a App Services.


## Run via CIRCLE CI.

Create a .circleci folder with a `config.yml`.

```yml
version: 2.1

# Define the jobs we want to run for this project
jobs:
  build:
    docker:
      - image: circleci/node
    steps:
      - checkout
      - run:
          command: sh build.sh

# Orchestrate our job run sequence
workflows:
  build_and_test:
    jobs:
      - build

```

This makes the circle CI to run the build.sh file on the root when ever a commit is pushed to the repository.

```shell

#!/bin/sh

# sudo npm install -g mongodb-realm-cli

npx mongodb-realm-cli login --api-key <<KEY>> --private-api-key <<SECRET>>

npx mongodb-realm-cli push -y --remote <<REALM_APP_ID>>

```

Similar to this configuration, you could also configure any CD like Github Actions, Bitbucket Pipeline, or even Jenkins.