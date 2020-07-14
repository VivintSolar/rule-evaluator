
const FamilyTree = require('../../FamilyTree'); // tobe version1.5.4
const initializeInheritanceTree = require('./initializeInheritanceTree');
const transformDocumentsToFamilyTreeElements = require('./transformDocumentsToFamilyTreeElements');

class InheritanceTree extends FamilyTree {
  constructor(parameters){
    const { documents } = parameters||{};
    const elements = InheritanceTree.transformDocumentsToFamilyTreeElements( documents );
    super({ elements });
    this.initializeInheritanceTree( parameters );
  }

}

InheritanceTree.transformDocumentsToFamilyTreeElements = transformDocumentsToFamilyTreeElements;
InheritanceTree.prototype.initializeInheritanceTree = initializeInheritanceTree;

module.exports = InheritanceTree;
