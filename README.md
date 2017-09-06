# rule-evaluator
#####Node Package to Evaluate Rules for a Service

## Installation

##### Using npm:
```shell
$ npm i --save rule-evaluator
```
## Usage

##### In Node.js:
```js
// Load the rule-evaluator
const ruleEvaluator = require('rule-evaluator');
// Prepare Necessary Parameters
const serviceData = getServiceData(),
    inputObject = getInputObject();
    
//Pass Necessary Parameters to the rule-evaluator and Recieve an Updated Service Object
const evaluatedRules = ruleEvaluator(serviceData, inputObject);
```

## Parameters
1) `serviceData`: Service Associated Data From the Requirements Manager
2) `inputObject`: Client Data for Evaluation A.K.A options

### Service Data
* [Requirements Manager](https://github.com/VivintSolar/ahj-scope)

### Input Object

* Data Type: Object/Map
* Fields
    * rules
    * inputs
    
#### Rules

* Data Type: Array
* Field Name: "rules"
* List of Predefined Rule id's to Evaluate

Example:

```js
const inputObject = {
    rules:['fireCodeSetbacks','roofDesignSetbacks'],
    ...
}
```
**NOTE:** <br>
If rules are left empty then all rules applied to the service associated ahj will be evaluated

#### Inputs
* Data Type: Object/Map
* Field Name: "inputs"
* Map Containing a list of Condition Properties and their associated values
    * key: Predefined Condition Property id
    * value: Valid Value, Meaning a value that satisfies and is found within the bounds of the Predefined Condition Property

Example:

```js
const inputObject = {
    rules:['fireCodeSetbacks','roofDesignSetbacks'],
    inputs:{
            roofType:"tile",
            structureType:"townHouse",
            roofPlaneLocation:"garage",
            adjacentRidgeRoofPlanePercentOccupied:0,
            overlappingRoofHeightDistance:0,
            firecodeAlternativeMiddlePathDistance:0,
            adjacentRidgeSetbackDistance:36
        }
}
```
**NOTE:** <br>
If inputs are left empty then a "simple evaluation" path will be taken thus returning only default values







