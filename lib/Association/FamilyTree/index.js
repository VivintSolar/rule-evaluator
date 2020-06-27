const initializeFamilyTree = require('./initializeFamilyTree');
const toElements = require('./static/toElements');
const toTree = require('./static/toTree');
const setElements = require('./setters/setElements');
const setTree = require('./setters/setTree');
const getElements = require('./getters/getElements');
const getTree = require('./getters/getTree');


class FamilyTree {
    constructor( parameters ){
        this.initializeFamilyTree( parameters );
    }
}
FamilyTree._isFamilyTree = true;
FamilyTree.toElements = toElements;
FamilyTree.toTree = toTree;
FamilyTree.setElements = setElements;
FamilyTree.setTree = setTree;
FamilyTree.getElements = getElements;
FamilyTree.getTree = getTree;
FamilyTree.prototype.initializeFamilyTree = initializeFamilyTree;


module.exports = FamilyTree;

