# rule-evaluator
##### Node Package to Evaluate Rules for a Service

## Installation

##### Using npm:
```shell
$ npm i --save rule-evaluator
```
## Usage

### **Prerequisites**
#### `Association Object`

The `Association Object` contains all the information needed to evaluate rules for a service. This is also needed to initialize The `rule-evaluator`.

* End-Point: ahj.vivintsolar.com/api/service/`:serviceNumber`/association

##### In Node.js:
```js
const ruleEvaluator = require('rule-evaluator');

const associationObject = getAssociationObject();
    
// initialize ruleEvaluator
const evaluator = new ruleEvaluator(associationObject);
```

### **Rule Evaluator Class**

#### *Outline:*

#### `Getters`
* `conditions`: `Map`, of all the current Conditions for evaluation
* `rules`: `Array`, of all the current Rules to evaluate
* `serviceAhj`: `Object`, returns the state of The Service Ahj based on previous evaluations
* `appliedRules`: `Array`, list of all the Rules that are applied to that service
* `appliedConditions`: `Array`, of all the Conditions that are applied to that service
    * When `rules` have been set, returns only Conditions applied to rules found in that list
* `appliedConditionsMap`: `Map`, of Rule IDs and an `Array` of the Conditions applied to them
    * When `rules` have been set, returns only Conditions applied to rules found in that list
* `errors`: `Array`, of any errors found while Setting or Evaluating
* `errorsMap`: `Map`, of Ruled IDs with errors and an `Array` of any errors found while Setting or Evaluating

#### `Setters`
* `conditions`: `Map`, sets a map of conditions to use when evaluating
* `rules`: `Array`, sets an array of rule ids to specify what rules to apply an evaluation on
    * When `null`/`undefined` All Applied Rules will be evaluated

#### Methods
* `evaluate()`: Based on Rules and Conditions that were set, Applied Service Conditions and Input Conditions will be compared and values will be calculated based on those comparisons
    * A Truly Successful Evaluation will have NO errors
    * Results Found in path `serviceAhj.rules`
* `exceptions()`: Will generate the Default Values for each Rule Specified, or all Rules if `rules` arn't set, and a description of all Applied Conditions and the values associated with them (A.K.A Exceptions)
    * If no description found in rule then no Conditions were applied to that rule in that particular service

#### *Examples:*

**Set Rules**
```js
evaluator.rules = ["defPointSetbacks", "sunHourMinimums"]
```
**Get Applied Conditions**
```js
const appliedConditions = evaluator.appliedConditions
console.log(appliedConditions)
```
*Example Log Statement*
```js
[
    "contractType",
    "roofType"
]
```
**Set Conditions**
```js
evaluator.conditions = { 
   contractType:"pace",
   roofType:"tile"
}
```

**Evaluate**
* Results Determined By Set `rules` and `conditions`

```js
const serviceAhj = evaluator.evaluate();
console.log(serviceAhj);
// OR: same thing, different way
evaluator.evaluate();
console.log(evaluator.serviceAhj);
```
*Results*
```json
{
    "latitude": 33.8413,
    "longitude": -117.925,
    "service_number": "...",
    "office_id": "4017",
    "Office": "CA-10 Orange County Solar",
    "customer_name": "...",
    "street": "748 N RESH ST",
    "Utility": "APU",
    "City": "Anaheim",
    "County": "Orange County",
    "State": "California",
    "name": ":service_number",
    "type": "service",
    "ahjRefs": [
        {
            "id": "32990245-6c76-40d5-9d64-e57fd2d39025",
            "name": "CA-10 Orange County Solar",
            "type": "Office"
        },
        {
            "id": "9d79e761-6445-4098-9a00-4e9f88797533",
            "name": "APU",
            "type": "Utility"
        },
        {
            "id": "cd1855ff-8796-4689-bdb6-ad5396d83f4d",
            "name": "Anaheim",
            "type": "City"
        }
    ],
    "rules": {
        "sunHourMinimums": {
            "description": "When Contract Type is PACE; System:1300, Module:950",
            "conditions": [
                {
                    "left": "contractType",
                    "operator": "=",
                    "right": "pace"
                }
            ],
            "value": {
                "system": 1300,
                "module": 950
            },
            "source": {
                "id": "9d79e761-6445-4098-9a00-4e9f88797533",
                "name": "APU",
                "type": "Utility"
            }
        },
        "defPointSetbacks": {
            "description": "If The Roof Type is Tile",
            "conditions": [
                {
                    "left": "roofType",
                    "operator": "=",
                    "right": "tile"
                }
            ],
            "value": {
                "serviceLine": 36,
                "mechanicalUnit": 36,
                "side": 18,
                "valley": 18,
                "ridge": 36,
                "eave": 18,
                "obstructions": 12,
                "hip": 18
            },
            "source": {
                "id": "cd1855ff-8796-4689-bdb6-ad5396d83f4d",
                "name": "Anaheim",
                "type": "City"
            }
        }
    }
}
```
#### __*Results, Explanation*__

* `latitude`: `String`, Latitude Of Service From SalesForce,
* `longitude`: `Float`, Longitude Of Service From SalesForce,
* `service_number`: `String`, Service Number of this instance,
* `office_id`: `String`, Field Office ID From SalesForce,
* `Office`: `String`, Name of Field Office From SalesForce,
* `customer_name`: `String`, Customer Name From SalesForce,
* `street`: `String`, Street Address of service From SalesForce,
* `Utility`: `String`, Utility Company Name From SalesForce,
* `City`: `String`, City Name From GeoLocation,
* `County`: `String`, County Name From GeoLocation,
* `State`: `String`, State Name From GeoLocation,
* `name`: `String`, Service Number of this instance,
* `type`: `String`, Type Of AHJ`:service(because its an aggregation of all the types),
* `ahjRefs`: `Array`, reference to documents used to create this Service Ahj
    * `id`: `String`, AHJ Document ID,
    * `name`: `String`, AHJ Name,
    * `type`: `String`, AHJ Type
* `rules`: `Map`, of Evaluated Rules
    * `sunHourMinimums`: `Map`, of Evaluated Applied Rule Data
        * `description`: `String`, Text Description of Condition that Resulted in the below value,
        * `conditions`: `Array`, Applied Conditions That Evaluated to True, If Conditions Field is Absent then the value was determined by a default
            * `left`: `String`, Condition ID,
            * `operator`: `String`, Operator Used in Comparision/Calculation,
            * `right`: `Condition Defined Data-Type`, Predefined Condition Value That Evaluated to be True when compared to Input Condition Value
        * `value`: `Rule Defined Data-Type`, Format of Value is Determined by the Data-Type and attributes Defined in the Rule Definition
            * `system`: `Rule Defined Data-Type`, value that evaluated to true,
            * `module`: `Rule Defined Data-Type`, value that evaluated to true
        * `source`: `Map`, Reference to ahj where these values came from 
            * `id`: `String`, AHJ Document ID,
            * `name`: `String`, AHJ Name,
            * `type`: `String`, AHJ Type
            
### __*Handling Errors*__
__*Error Types*__
* `invalidCondition`: When Set Condition is Not a Predefined or Applied Condition
* `invalidRule`: When Set Rule is Not a Predefined or Applied Rule
* `missingCondition`: When an Applied Rule has Applied Conditions and a Condition Input Mapping as not made for it

#### __*Error Causing Statement, Examples*__
**Invalid Rule**
```js
evaluator.rules = ["invalidRule","defPoints"];
```
**Invalid Condition, Missing Condition**
```js
evaluator.conditions = { 
   invalidCondition:22
}
console.log(evaluator.errors)
```
*Errors*
```json
[
    {
        "id": "invalidRule",
        "message": "Invalid Rule Provided, Rule Not Found: invalidRule",
        "timeStamp": "2017-10-25T23:49:05.384Z",
        "type": "invalidRule"
    },
    {
        "id": "invalidCondition",
        "message": "Invalid Condition Provided, Condition Not Found: invalidCondition",
        "timeStamp": "2017-10-25T23:52:00.539Z",
        "type": "invalidCondition"
    },
    {
        "id": "roofType",
        "message": "Condition Input Missing: roofType",
        "timeStamp": "2017-10-25T23:52:00.539Z",
        "type": "missingCondition"
    }
]
```

        


