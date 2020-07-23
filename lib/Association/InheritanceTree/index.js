
const FamilyTree = require('../../FamilyTree');
const initializeInheritanceTree = require('./initializeInheritanceTree');
const transformDocumentsToFamilyTreeElements = require('./transformDocumentsToFamilyTreeElements');

class InheritanceTree extends FamilyTree {
  constructor(parameters){
    const { documents } = parameters||{};
    const elements = transformDocumentsToFamilyTreeElements( documents );
    super({ elements });
    this.initializeInheritanceTree( parameters );
  }

}

InheritanceTree.prototype.initializeInheritanceTree = initializeInheritanceTree;

module.exports = InheritanceTree;
