![image](https://user-images.githubusercontent.com/91338126/138530868-b765f021-aa84-4f7f-8c71-32c807c35ef2.png)

---

## **PURPOSE**

---

The purpose of this chanllenge is to apply all the techniques and best practices covered during the front-end sessions to a real framework.

_Tech Stack_

---

- Java Script.
- Testcafe
- Jenkins

**Project Structure**

---

AUTOMATION2

> POM
>
> > > data
> > >
> > > > Constants.js
> > > > Roles.js
> > > > pages
> > > > CommonPage.js
> > > > LoginPage.js
> > > > TodayPage.js
> > > > tests
> > > > Login.test.js
> > > > Negative.test.js
> > > > NewTask.test.js
> > > > Project.test.js
> > > > tests
> > > > results
> > > > screenshots  
> > > >  .env
> > > > .gitignore
> > > > {}.testcaferc.json
> > > > {} package.json
> > > > (i)README.md

#**Pre-requisites**

---

- Node.js _(latest version)_
- Browsers installed in your machine _(ex. chrome, firefox, safari, edge, opera, etc.)_
- Visual Studio Code _(latest version)_
- Testcafe
- Suggested Extensions _(Prettier, Live Server, ESLint)_

**Project Setup**

---

1. Clone this repository
2. Go to the repository folder
3. Open a terminal
4. Run npm install
5. Run npm init -y
6. Run rpm i testcafe
7. Create .env file with following variables:
   EMAIL_USER_EMAIL=aratest.0001@gmail.com
   EMAIL_USER_PASSWORD=Mi23L1nE

   WRONG_USER_EMAIL=aratest.0001@gmail
   WRONG_USER_PASSWORD=Mi23L1n

   EMPTY_USER_EMAIL=
   EMPTY_USER_PWD=

**Dependencies**

---

- testcafe
- dotenv
- eslint

##**_SCRIPTS_**

---

1. test: Runs in chrome & safari instances.
2. test-login: Runs in chrome instance in headless mode with concurrency 2 and generates a report in a html file which is generated in following path:tests/results/results.html
3. smoke-testing: Runs in chrome instance and speciall for smoke tests
4. task: Runs in chrome instance in order to create New tasks and validate their creation.
5. negative: Runs all the negative scenarios in chrome intance.
6. lint-init: iniciates 'eslint'.
7. lint: eslint ./pom
8. project: "testcafe chrome ./POM/tests/Project.test.js "
