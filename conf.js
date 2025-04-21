// conf.js
var config_file = require("./test_data/config")

exports.config = {
    baseUrl: config_file.domain,
    framework: 'jasmine',
    directConnect: true,
    // For selenium grid
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    //Define browser here
    multiCapabilities: [{
            browserName: 'firefox',
           // browserName: 'chrome'
           firefoxOptions: {
               // args: ['--headless',"--window-size=1600x1000"]
               // args: ["--incognito","--window-size=1600x1000"]
            }
        },
         /*{
            browserName: 'firefox'
            browserName: 'chrome'
            browserName: 'internet explorer'
         },*/

        /*  {
              browserName:'firefox',
              firefoxOptions: {
                  args: ["--window-size=1600x1000"]
              },*/
        /*{
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ["--window-size=1600x1000"]
            },*/
    ],
    jasmineNodeOpts: 
    {
        // Jasmine default timeout
        defaultTimeoutInterval: 100000,
        expectationResultHandler(passed, assertion)
        {
            if(passed) {
                return;
            }
    
            console.log(assertion.error.message);
        }
    },
    // Specify test suites here
    suites: {
     regression: ['./tests/**/*.js']
            //customized script
            //sakib: ['./new_dir/spec.js']
    },

    // We are using jasmine framework, this will prepare the execution
    onPrepare: function() {
        //For maximizing the browser window
        browser.driver.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        console.log('prepared')

        browser.manage().timeouts().pageLoadTimeout(40000);

        // Generates HTML and console report
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(
            new SpecReporter({
                displayStacktrace: 'all', // display stacktrace for each failed assertion, values: (all|specs|summary|none)
                displaySuccessesSummary: true, // display summary of all successes after execution
                displayFailuresSummary: true, // display summary of all failures after execution
                displayPendingSummary: true, // display summary of all pending specs after execution
                displaySuccessfulSpec: true, // display each successful spec
                displayFailedSpec: true, // display each failed spec
                displayPendingSpec: true, // display each pending spec
                displaySpecDuration: true, // display each spec duration
                displaySuiteNumber: true, // display each suite number (hierarchical)

                colors: {
                    success: 'green',
                    failure: 'red',
                    pending: 'yellow'
                },

                prefixes: {
                    success: '✓ ',
                    failure: '✗ ',
                    pending: '* '
                }
            }))

        browser.getProcessedConfig().then(function(value) {
            var HtmlReporter = require('protractor-beautiful-reporter');
            jasmine.getEnv().addReporter(new HtmlReporter({
                preserveDirectory: false,
                baseDirectory: './reports/' + config_file.report_generator.test_name +
                    '/' + config_file.report_generator.version,
                gatherBrowserLogs: false,
                docTitle: 'Jotno Automation Test Results'
            }).getJasmine2Reporter());
        })
    }
}