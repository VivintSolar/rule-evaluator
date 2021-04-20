const {
    mergeObjDescriptions,
    mergeObjSource,
    mergeObjExceptions,
    unique
} = require('../../utilities/util');
const { addFilter, applyFilter } = require('../../utilities/filters');
const settleAppliedConflicts = require('../../Association/associationTranslator/apiVersionTranslator/v2Tov1/onConflict/deconstruct/settleAppliedConflicts')


module.exports = (function({
   statements,
   exceptions
}){

    const {
        template,
        appliedConditions
    } = this;

    if( statements && statements.length < 1 ) statements = null;

    let obj,
        val,
        conditions,
        description,
        source,
        array,
        names,
        filter,
        formula,
        templateString;

    const { dataType, items } = template;
    const templateStringish = [ 'formula', 'template string' ].includes( dataType );
    const globalOnConflict = template.onConflict;

    const addToConditions = conditionStatement => conditions = [ ...( conditions || [] ), ...conditionStatement ];


    if( statements ) {

        if( dataType === 'object'  ) obj = {};

        if( ['collection','ordered list'].includes(dataType) ) {
            names = [];
            array = [];
        }

        settleAppliedConflicts({statements: statements.reverse(), definition: this}).map( (statement, statementIndex) => {
            const { value, condition, onConflict } = statement;

            if( dataType === 'ordered list' && !array.includes(value) ){
                array.push(value);
            }
            if( dataType === 'filter') filter = addFilter( filter, value );

            if( obj ) Object.assign(obj, value);

            if( dataType === 'collection' && !names.includes(value.name) ) {
                names.push(value.names);
                array.push(value);
            }

            if( dataType === 'string' && globalOnConflict === 'union' && val ) {
                val = val + "\n" + value;
            }
            else if( templateStringish ){
                const results = this.execute( value, dataType );
                const parameterSubsetCheck = results !== null || (statementIndex === statements.length - 1 && !formula);
                if( dataType === 'template string' || ( dataType === 'formula' && parameterSubsetCheck ) ){
                    if( dataType === 'template string' ){
                        if( globalOnConflict === 'union' && templateString){
                            templateString += '\n' + value;
                            if( val !== null && results !== null ){
                                val += '\n' + results ;
                            } else {
                                val = results;
                            }
                        } else {
                            templateString = value;
                            val = results;
                        }
                    }else if( dataType === 'formula' ){
                        formula = value;
                        val = results;
                    }
                }
                conditions = condition;
            }
            else {
                if( condition ) addToConditions( condition );
                val = value;
            }

            description = statement.description;

            source = statement.source;

        });
    }

    if( dataType === 'object' ) {
        description = mergeObjDescriptions( statements );
        source = mergeObjSource( statements );
    }

    if( filter ) val = applyFilter(filter, items);

    if( conditions ) conditions = unique(conditions);

    exceptions = mergeObjExceptions( exceptions, dataType );

    let finalResults = obj || array || val;
    if( !this.getGlobalAttributes( "seriesEvaluation" ) ) {
        const ruleDefinition = this.getDefinitions( this.id );
        finalResults = ruleDefinition.convertToDisplayValue( finalResults );
    }



    return Object.assign({},
        {
            formula,
            templateString,
            exceptions,
            conditions: conditions || null,
            source,
            description,
            value: finalResults
        }
    );

});
