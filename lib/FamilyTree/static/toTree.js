const getValue = require('./getValue');
const setValue = require('./setValue');

const toTree = ( elements, options ) => {
   let tree = {};
   const { aliases, mapBy } = options;
   const elementsToTree = ( _elements, options ) => {
      _elements.forEach( element => {
         tree[ element[ mapBy.element ] ] = element;
      });
   };
   const addParent = ( elementId, parentId ) => add('parents', elementId, parentId);
   const addChild = ( elementId, childId ) => add('children', elementId, childId);
   const add = ( attrName, elementId, nestedId ) => {
      const location = [ elementId, attrName ];
      const existing = getValue( tree, location )||[];
      if( !existing.includes( nestedId ) ){
         const value = [ ...existing, nestedId ];
         tree = setValue( tree, location, value );
      }
   }
   const fillNuclearFamily = () => {
      const elements = Object.values( tree );
      elements.forEach( element => {
         const children = getValue( element, aliases.children )||[];
         if( children.length > 0 ) children.forEach( child => {
            const childId = getValue(child, mapBy.child )
            addParent( childId, element.id);
            addChild( element.id, childId);
         });
      })
   };
   const fillExtendedFamily = ( ) => {
      Object.keys( tree ).map( id =>{
         const addTo = ( memberType, ids ) => ids.forEach( nestedId => add( memberType, id, nestedId ))
         const _fill = ( memberType, _id ) => {
            const accessor = { descendants: 'children', ancestors: 'parents' }[ memberType ]
            const element = tree[ _id ];
            if( element[ accessor ] ) {
               addTo( memberType, element[ accessor ] );
               element[ accessor ].map( nestedId => _fill( memberType, nestedId ) )
            }
         }
         _fill( 'descendants', id );
         _fill( 'ancestors', id );
      })
   }
   elementsToTree( elements, options );
   fillNuclearFamily();
   fillExtendedFamily();
   return tree;
}

//toTree
module.exports = ( elements, options ) => {
   const _elements = [ ...elements||[] ];
   if( _elements.length === 0 ){
      throw new Error("No elements found! toTree() converts elements -> tree");
   }
   return toTree( _elements, options )
};
