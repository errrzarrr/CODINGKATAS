# Spy Function

### Description:

The kata is to create a simple function wrapper that will log every call to the wrapped function.

#### Usage:

```JavaScript
var innocent = spy(myFunction);
innocent(1);

var report = innocent.report(); //
report.totalCalls === 1; //The total number calls

var history = report.history; //Array containing detailed call logs
var entry = history[0]; //History entry
entry.when; //Date when the function was called
entry.context; //Context the function was called
entry.args; //Array of arguments [1]
```
[Source here](http://www.codewars.com/kata/spy-function)
