const AssociationObjectFactory = require('../../utilities/AssociationObjectFactory');

const associationObjectFactory = new AssociationObjectFactory();

const _shuffle = () => 0.2629616339522671 - 0.5;
const items = associationObjectFactory.definitionsFactory.generateArrayOfLength(15)
    .map( (emptyItem, index) => ({
        id: "listItem" + ( index + 1 ),
        name: "List Item " + ( index + 1 ),
    }));

const itemsShuffled = [...items].sort( _shuffle );


const batch = [
    {
        id: "orderedListBasic",
        name: "Ordered List Basic",
        rule: true,
        template:{
            onConflict: "standard",
            dataType: "ordered list",
            items: itemsShuffled
        }
    },
    {
        id: "orderedListAlpha",
        name: "Ordered List Alpha",
        rule: true,
        template:{
            onConflict: "standard",
            dataType: "ordered list",
            sortType: "alphabetical",
            items: itemsShuffled
        }
    },
    {
        id: "orderedListPredefined",
        name: "Ordered List Predefined",
        rule: true,
        template:{
            onConflict: "standard",
            dataType: "ordered list",
            sortType: "predefined",
            items: items.reverse()
        }
    }
];

associationObjectFactory.initializeDefinitionsWithBatch(batch, true);

const appliedBatch = batch.reduce( (result, { id }) => {
    itemsShuffled.map( ({id:itemId}) => result.push({id, statement:{value: itemId}}));
    return result
}, []);


associationObjectFactory.batchAddStatementToAppliedRule( appliedBatch );

const associationObject = associationObjectFactory.build();


// associationObject
module.exports = associationObject;