import * as InheritanceTree from "./index";


module.exports = (function( parameters ){
  const { documents } = parameters||{};
  this.documents = documents;
  if( this._isInitializedInheritanceTree === true && this.initializeFamilyTree ){
    const elements = InheritanceTree.transformDocumentsToFamilyTreeElements( documents );
    this.initializeFamilyTree({ elements });
  }
  this._isInitializedInheritanceTree = true;
});
