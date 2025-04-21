This is a framwork for Jotno Web applicaion automation. Protractor is the base framwork and Jasmin as runner. It will generate automated reoprt upon each run.
The structure of the project is following:
``` bash
root
├───api
├───page_objects
│   ├───common_pages
│   └───single_pages
├───reports
├───tests
│   └───regression
└───test_data
```

How to run:  
1. Open cmd and run "npm install", it will insall all necessary dependency  
2. If your are using an IDE, add new Protractor configuration to run test  
3. To run directly form cmd, execute command: protractor conf.js  