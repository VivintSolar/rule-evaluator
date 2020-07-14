

class FamilyTree {
    constructor( parameters ){
        this.initializeFamilyTree( parameters );
    }
}
// FamilyTree._isFamilyTree = true;
// FamilyTree.toElements = require('./static/toElements');
// FamilyTree.toTree = require('./static/toTree');
// FamilyTree.getChildren = require('./static/getChildren');
// FamilyTree.getValue = require('./static/getValue');
// FamilyTree.setValue = require('./static/setValue');
// FamilyTree.pick = require('./static/pick');
// FamilyTree.itemToElement = require('./static/itemToElement');
// FamilyTree.itemsToElements = require('./static/itemsToElements');
// FamilyTree.getLocation = require('./static/getLocation');
// FamilyTree.initializeOptions = require('./static/initializeOptions');
// FamilyTree.getOptionsSkeleton = require('./static/getOptionsSkeleton');
FamilyTree.prototype.setElements = require('./setters/setElements');
FamilyTree.prototype.setTree = require('./setters/setTree');
FamilyTree.prototype.initializeElements = require('./setters/initializeElements');
FamilyTree.prototype.initializeTree = require('./setters/initializeTree');
FamilyTree.prototype.initializeItems = require('./setters/initializeItems');
FamilyTree.prototype.getElements = require('./getters/getElements');
FamilyTree.prototype.getTree = require('./getters/getTree');
FamilyTree.prototype.initializeFamilyTree = require('./initializeFamilyTree');


module.exports = FamilyTree;

