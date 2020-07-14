

class FamilyTree {
    constructor( parameters ){
        this.initializeFamilyTree( parameters );
    }
}
// AssociationTree._isFamilyTree = true;
// AssociationTree.toElements = require('./static/toElements');
// AssociationTree.toTree = require('./static/toTree');
// AssociationTree.getChildren = require('./static/getChildren');
// AssociationTree.getValue = require('./static/getValue');
// AssociationTree.setValue = require('./static/setValue');
// AssociationTree.pick = require('./static/pick');
// AssociationTree.itemToElement = require('./static/itemToElement');
// AssociationTree.itemsToElements = require('./static/itemsToElements');
// AssociationTree.getLocation = require('./static/getLocation');
// AssociationTree.initializeOptions = require('./static/initializeOptions');
// AssociationTree.getOptionsSkeleton = require('./static/getOptionsSkeleton');
FamilyTree.prototype.setElements = require('./setters/setElements');
FamilyTree.prototype.setTree = require('./setters/setTree');
FamilyTree.prototype.initializeElements = require('./setters/initializeElements');
FamilyTree.prototype.initializeTree = require('./setters/initializeTree');
FamilyTree.prototype.initializeItems = require('./setters/initializeItems');
FamilyTree.prototype.getElements = require('./getters/getElements');
FamilyTree.prototype.getTree = require('./getters/getTree');
FamilyTree.prototype.getAncestors = require('./getters/getAncestors');
FamilyTree.prototype.getDescendents = require('./getters/getDescendents');
FamilyTree.prototype.getChildren = require('./getters/getChildren');
FamilyTree.prototype.getParents = require('./getters/getParents');
FamilyTree.prototype.getRoots = require('./getters/getRoots');
FamilyTree.prototype.initializeFamilyTree = require('./initializeFamilyTree');


module.exports = FamilyTree;

