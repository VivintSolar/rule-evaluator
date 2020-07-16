const documents = require('./AssociationTree/documents')
const AssociationTree = require('../../lib/Association/AssociationTree');

const associationTree = new AssociationTree({ items: documents });


const index = {
    associationTreeElements: associationTree.getElements(),
    generateAssociationObject: () => {
        const elements = associationTree.getElements();
        return {
            elements,
            place: 'incorporatedPlace'
        }
    }
};


module.exports = index;
