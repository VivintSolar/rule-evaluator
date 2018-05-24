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
const RuleEvaluator = require('rule-evaluator');

const associationObject = getAssociationObject();
    
// initialize ruleEvaluator
const ruleEvaluator = new RuleEvaluator(associationObject);
```
### **Terms**
* `rule`: Wrapper giving context to a series of possible values who depend on the comparison of predefined conditions and condition inputs
    * `statements`: series of possible values and predefined conditions associated with them
    * `id`: Rule's unique id
    * `name`: Rule's Name / Label
    * `dataType`: determines the format of value

* `statement`: possible value dependant on predefined conditions
    * `value`: data-type: predefined possible value
    * `condition`: list of pre-set evaluate-able scenarios used with client provided inputs
    * `description`: text description of the statement
    * `source`: Reference to AHJ to where statement came from
    
    
* `evaluatedRule`    
    * `exceptions`: Array of Descriptions explaining failed results
    * `description`: text description of the evaluated results
    * `value`: data-type: predefined, result of statements evaluation and merge
    * `condition`: list of pre-set, successfully, evaluated conditions
    * `source`: Reference to AHJ to where statement came from
    
    


### **Rule Evaluator Class**

#### Methods
* `getPossibleStatements`: ( ruleId:`string`, siteConditions: `object{}`  )
    * returns list of supported statements based on  evaluated siteConditions results
* `getUnsupportedStatements`: (ruleId:`string`, supportedConditions:`string[]`)
    * returns list of unsupported statements based on supportedConditions list
* `getAppliedStatement`: (ruleId:`string`, conditions:`object{}`, valueAccessor:`string`)
    * returns single statement based on evaluated conditions and value accessor
* `evaluate`: (ruleId:`string`, conditions:`object{}`) 
    * `returns` evaluatedRule:`object{}` of all the successfully evaluated statements
* `getRule`: ( ruleId:`string` )
    * `returns` Rule:`class{}` of requested applied rule
   
    
### **Rule Class**

#### Methods
* `getPossibleStatements`: ( siteConditions: `object{}`  )
    * returns list of supported statements based on  evaluated siteConditions results
* `getUnsupportedStatements`: ( supportedConditions:`string[]`)
    * returns list of unsupported statements based on supportedConditions list
* `getAppliedStatement`: ( conditions:`object{}`, valueAccessor:`string`)
    * returns single statement based on evaluated conditions and value accessor
* `evaluate`: ( conditions:`object{}`)
    * returns evaluatedRule:`object{}` of all the successfully evaluated statements
    
#### *Examples:*

* Examples for all the above are found within the project at `./test/` 