import * as FamilyTree from "../index";

const toTree = ( elements, options ) => {
   let tree = {};
   const { aliases, mapBy } = options;
   const elementsToTree = ( _elements, options ) => {
      _elements.forEach( element => {
         tree[ element[ mapBy.element ] ] = element;
      });
   };
   const addAncestor = ( elementId, ancestorId ) => add('ancestors', elementId, ancestorId);
   const addParent = ( elementId, parentId ) => add('parents', elementId, parentId);
   const addChild = ( elementId, childId ) => add('children', elementId, childId);
   const addDescendent = ( elementId, descendentId ) => add('descendents', elementId, descendentId);
   const add = ( attrName, elementId, nestedId ) => {
      const location = [ elementId, ...aliases[ attrName ].split(".") ];
      const existing = FamilyTree.getValue( tree, location )||[];
      if( !existing.includes( nestedId ) ){
         const value = [ ...existing, nestedId ];
         tree = FamilyTree.setValue( tree, location, value );
      }
   }
   const fill = () => {
      const elements = Object.values( tree );
      elements.forEach( element => {
         const children = FamilyTree.getChildren( element, options );
         if( children ) children.forEach( childId => {
            addParent( childId, element.id);
            addChild( element.id, childId);
            const grandChildren = FamilyTree.getChildren( tree[ childId ] );
            if( grandChildren ) (grandChildren||[]).forEach( grandChild => {
               addDescendent( element.id, grandChild);
               addAncestor( grandChild, element.id );
            });
         });


      })
   };
   elementsToTree( elements, options );
   fill();
   return tree;
}

//toTree
module.exports = (function( elements, options ){
   const _elements = [ ...elements||[] ];
   if( _elements.length === 0 ){
      throw new Error("No elements found! toTree() converts elements -> tree");
   }

   return toTree( _elements, options )

});
