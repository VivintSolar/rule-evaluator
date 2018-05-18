const { flatten } = require('./utilities/util');
const _appliedConditions = require('./lib/_appliedConditions');
const addError = require('./lib/addError');
const calculator = require('./lib/calculator');
const cleanUpErrors = require('./lib/cleanUpErrors');
const evaluateConditions = require('./lib/evaluateConditions');
const objectDescriptions = require('./lib/objectDescriptions');
const parseRules = require('./lib/parseRules');
const parseStatements = require('./lib/parseStatements');
const validateConditions = require('./lib/validateConditions');
const validateRules = require('./lib/validateRules');
const getPossibleStatements = require('./lib/getPossibleStatements');
const getAppliedStatement = require('./lib/getAppliedStatement');
const getUnsupportedStatements = require('./lib/getUnsupportedStatements');

class Evaluation {
    constructor({
        serviceAhj,
        definitions,
        conditions,
        rules
    }) {
        this._serviceAhj = serviceAhj;
        this._definitions = definitions;
        this._conditions = conditions;
        this._rules = rules;
        this._appliedRules = JSON.parse(JSON.stringify(serviceAhj.rules));
        this._errors = null;
        this._timeStamp = new Date();
        this._evaluationType = undefined;
    }
    set conditions(conditions) {
        this._conditions = conditions;
        this.validateConditions()
    }
    clearConditions(){
        this._conditions = undefined;
        this.validateConditions()
    }
    clearRules(){
        this._rules = undefined;
        this.validateRules();
    }
    get conditions(){
        return this._conditions;
    }
    set rules(rules) {
        this._rules = rules;
        this.validateRules();
    }
    get validatedRules(){
        const appliedRules = Object.keys(this._appliedRules);
        if(this._rules) return this._rules.filter(id=>{return appliedRules.includes(id) })
    }
    get rules(){
        return this._rules;
    }
    get serviceAhj(){
        return this._serviceAhj;
    }
    get appliedRulesDetail(){
        return this._appliedRules;
    }
    get appliedRules(){
        return Object.keys(this._appliedRules);
    }
    get appliedConditionsMap(){
        const rules = this.validatedRules || Object.keys( this._definitions.conditions );
        return Object.assign({},
            ...rules.map(id=>{
                const appliedConditions = this._appliedConditions(id);
                if(appliedConditions) return {[id]:appliedConditions};
                return {};
            })
        )
    }
    get appliedConditions(){
        if( !this.validatedRules ) return Object.keys( this._definitions.conditions );
        return flatten(
            this.validatedRules.map( id => (
                this._appliedConditions( id )
            ))
        );
    }
    get errorsMap(){
        return (this._errors) ? this._errors.map : this._errors;
    }
    get errors(){
        return (this._errors) ? this._errors.list : this._errors;
    }
    exceptions(){
        this._evaluationType = 'exceptions';
        this.validateRules();
        this.parseRules();
        return this._serviceAhj;
    }
    evaluate(){
        this._evaluationType = 'evaluate';
        this.validateConditions();
        this.validateRules();
        this.parseRules();
        return this._serviceAhj;
    }
}

Evaluation.prototype.calculator = calculator;
Evaluation.prototype.cleanUpErrors = cleanUpErrors;
Evaluation.prototype.evaluateConditions = evaluateConditions;
Evaluation.prototype.getPossibleStatements = getPossibleStatements;
Evaluation.prototype.getAppliedStatement = getAppliedStatement;
Evaluation.prototype.getUnsupportedStatements = getUnsupportedStatements;
Evaluation.prototype.objectDescriptions = objectDescriptions;
Evaluation.prototype.parseRules = parseRules;
Evaluation.prototype.parseStatements = parseStatements;
Evaluation.prototype.validateConditions = validateConditions;
Evaluation.prototype.validateRules = validateRules;

module.exports = Evaluation;