const RuleDefinition = require('../../../lib/Definitions/RuleDefinition');
const ConditionDefinition = require('../../../lib/Definitions/ConditionDefinition');

const definitionFactory = {
    generateDefinition: (definitionAttributes) => {
        if( definitionAttributes.condition ){
            return new ConditionDefinition( definitionAttributes );
        } else if( definitionAttributes.rule ){
            return new RuleDefinition( definitionAttributes );
        }
    },
    generateDefinitions: ( definitions, mapByType ) => {
        const definitionClasses = definitions.map( definitionFactory.generateDefinition );
        if( mapByType ) return definitionFactory.mapByType( definitionClasses );
        return definitionClasses;
    },
    mapByType: ( definitions ) => {
        return definitions.reduce(( result, item ) => {
            const addToResult = type => {
                if(!result[type]) result[type] = {};
                result[type][item.id] = item;
            };
            if( item.rule ) addToResult("rules", item);
            if( item.condition ) addToResult("conditions", item);
            return result;
        },{})
    },
    generateArrayOfLength: ( limit ) => {
        let array = [];
        for(let i = 0; i < limit; i++) array.push(i);
        return array;
    }
};

module.exports = definitionFactory;