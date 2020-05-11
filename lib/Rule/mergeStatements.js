const {
    mergeObjDescriptions,
    mergeObjSource,
    mergeObjExceptions,
    unique,
    deleteFields
} = require('../utilities/util');
const swapReferenceIds = require('../utilities/swapReferenceIds');

const itemContains = (item, subItem) => {
    if( Object.keys(subItem).length === 0 ) return true;
    return Object.keys(subItem).every( key => (
        subItem[key].some( value => (
            value === item[key]
        ))
    ))
};

const filters = {
    contain: itemContains,
    doesntContain: (item, subItem) => (
        !itemContains(item, subItem)
    )
};

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

    const addToConditions = conditionStatement => conditions = [ ...( conditions || [] ), ...conditionStatement ]

    const addFilter = ( filterItem ) => {
        const type =  filterItem._type;
        filterItem = deleteFields(filterItem, ["_type"]);
        if(!filter) filter = {};
        filter[ type ] = Object.assign({}, filter[type], filterItem)
    };

    const applyFilter = () => {
        let results = items;
        Object.keys(filter).map( filterType => { //if(!filters[filterType]) return error;
            results = results.filter( item => filters[filterType](item, filter[filterType]))
        } );
        return results
    };

    const globalOnConflict = template.onConflict;

    if( statements ) {

        if( dataType === 'object'  ) obj = {};

        if( ['collection','ordered list'].includes(dataType) ) {
            names = [];
            array = [];
        }

        statements.reverse().map( (statement, statementIndex) => {
            const { value, condition, onConflict } = statement;

            if( dataType === 'ordered list' && !array.includes(value) ){
                array.push(value);
            }
            if( dataType === 'filter') addFilter( value );

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
                            val += '\n' + results ;
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

    if( filter ) val = applyFilter();

    if( conditions ) conditions = unique(conditions);

    exceptions = mergeObjExceptions( exceptions, dataType );

    const seriesEvaluation = this.getGlobalAttributes( "seriesEvaluation" );

    let finalResults = obj || array || val;
    if( !seriesEvaluation ) finalResults = swapReferenceIds( finalResults, template );

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
