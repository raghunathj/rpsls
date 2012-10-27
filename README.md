A classic Rock, Paper, Scissors, Lizard and Spock game build using Javascript and runs on NODE.JS

## Usage
Just run the following command

``` bash
	$ node rpsls.js
```

### Once it runs, it will ask for how many rounds would you like to play, then select a weapon and finally it will tell you who won.

#### Author: [Raghunath J](http://github.com/raghunath)

##Middleware Used
I am using PROMPT so that we can run it on command line and accept user input + validation

``` bash
	$ npm install prompt
```

Here is a basic example to use it

``` js
  var prompt = require("prompt");

  //
  // Setting these properties customizes the prompt.
  //
  prompt.message = "Question!".rainbow;
  prompt.delimiter = "><".green;

  prompt.start();

  prompt.get({
    properties: {
      name: {
        description: "What is your name?".magenta
      }
    }
  }, function (err, result) {
    console.log("You said your name is: ".cyan + result.name.cyan);
  });
```

