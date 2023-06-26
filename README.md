# mean-stack-repo project setup

### Install Node

> sudo apt install curl

> curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

> sudo apt-get install -y nodejs

> node -v

v10.22.0

> npm -v

6.14.6

### Install angular
> sudo npm install -g @angular/cli

    * Using sudo as installed globally

> ng --version

* Angular CLI: 10.0.8
* Node: 10.22.0
* OS: linux x64

### Create an application or a project
> ng new crud-app

> cd crud-app/

> ng generate class Todo --skipTests=false

* To verify whether our code works as expected, we can now run:
    > ng test

> ng generate service TodoData

> npm install --save bootstrap

> npm install --save jquery

#### Run application in dev mode
> ng serve

### REST API in Node

> npm init

> npm i express

> npm i joi

> npm install cors --save