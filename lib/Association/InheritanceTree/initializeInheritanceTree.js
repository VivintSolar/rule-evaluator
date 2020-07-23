const transformDocumentsToFamilyTreeElements = require("./transformDocumentsToFamilyTreeElements");


module.exports = (function( parameters ){
  const { documents } = parameters||{};
  this.documents = documents;
  if( this._isInitializedInheritanceTree === true && this.initializeFamilyTree ){
    const elements = transformDocumentsToFamilyTreeElements( documents );
    this.initializeFamilyTree({ elements });
  }
  this._isInitializedInheritanceTree = true;
});
