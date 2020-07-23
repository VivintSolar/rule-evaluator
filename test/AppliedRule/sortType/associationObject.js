const AssociationObjectFactory = require('../../utilities/AssociationObjectFactory');

const associationObjectFactory = new AssociationObjectFactory();

const _shuffle = () => 0.2629616339522671 - 0.5;
const items = associationObjectFactory.definitionsFactory.generateArrayOfLength(15)
    .map( (emptyItem, index) => ({
        id: "listItem" + ( index + 1 ),
        name: "List Item " + ( index + 1 ),
    }));

const itemsShuffled = [...items].sort( _shuffle );

const orderedListAlpha2Items = [
    { id: "aItem1", name: "A Item 1" },
    { id: "aItem2", name: "A Item 2" },
    { id: "zItem3", name: "Z Item 3" },
    { id: "bItem4", name: "B Item 4" },
    { id: "aItem3", name: "A Item 3" }
];


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
        id: "orderedListAlpha2",
        name: "Ordered List Alpha2",
        rule: true,
        template:{
            onConflict: "standard",
            dataType: "ordered list",
            sortType: "alphabetical",
            items: orderedListAlpha2Items
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
    const appliedItems = id === 'orderedListAlpha2' ? orderedListAlpha2Items : itemsShuffled;
    appliedItems.map( ({ id:itemId }) => (
        result.push({id, statement:{ value: itemId }})
    ));
    return result
}, []);


associationObjectFactory.batchAddStatementToAppliedRule( appliedBatch );

const associationObject = associationObjectFactory.build();


// associationObject
module.exports = associationObject;
