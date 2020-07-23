const FamilyTree = require('../../FamilyTree');
const getDesignedAHJ = require('./getters/getDesignedAHJ');
const getElementByHierarchy = require('./getters/getElementByHierarchy');
const matchElements = require('./getters/matchElements');
const getLinkOfType = require('./getters/getLinkOfType');
const getLegacyAhjRefs = require('./getters/getLegacyAhjRefs');

const associationHierarchy = [
    "City",
    "Township",
    "County",
    "3rd Party",
    "Office Type",
    "Utility",
    "ROC",
    "State",
    "International Building Code",
    "International Residential Code",
    "International Fire Code",
    "National Electrical Code",
    "Nation"
];


class AssociationTree extends FamilyTree {
    constructor( params ){
        const  options = {
            mapBy:{
                child: "source.id",
                item: "id",
                element: "id"
            },
            aliases:{
                children: "inherit",
                parents: "parents",
                descendants: "descendants",
                ancestors: "ancestors"
            },
            elementFields: [ "id", "name", "type", "inherit" ]
        };
        super( Object.assign({}, params, { options } ) );
        this.hierarchies = {
            association: associationHierarchy,
            incorporatedPlace: [
                "City",
                "County",
                "Township",
            ],
            incorporatedPlaceMerge: [ "City" ],
            censusDesignatedPlace: [ "County" ],
            merge: [ "County"]
        }
    }
}


AssociationTree.prototype.matchElements = matchElements;
AssociationTree.prototype.getLinkOfType = getLinkOfType;
AssociationTree.prototype.getDesignedAHJ = getDesignedAHJ;
AssociationTree.prototype.getElementByHierarchy = getElementByHierarchy;
AssociationTree.prototype.getLegacyAhjRefs = getLegacyAhjRefs;

module.exports = AssociationTree;

