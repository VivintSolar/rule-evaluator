
const { omit } = require('../../../../../utilities/util');
const AssociationTree = require('../../../../AssociationTree');

// merge
module.exports = (function(){


  this.mapById = Object.assign({},
    ...this.order.map( ahjId => {

      const ahj = this.documentMap[ ahjId ];

      const {
        rules,
        id,
        name,
        type,
        inherit,
        state
      } = ahj;

      const isRoot = !(ahj.inheritance && ahj.inheritance.ancestors);

      const source = { id, name, type };
      Object.keys( rules ).map( ruleId => {
        if( !this.appliedRules.includes(ruleId) ){
          this.appliedRules.push( ruleId );
        }

        const rule = Object.assign({},
          rules[ruleId],
          { id: ruleId }
        );
        this.addToRules(rule, source);
      });

      const tally = this.sourceTally[ id ];

      const descendantsTally = ahj.inheritance && ahj.inheritance.descendants ? (
        Object.assign({},
          ...ahj.inheritance.descendants.map( descendant => {
            if( this.sourceTally[ descendant ] ) return {
              [ descendant ]: this.sourceTally[ descendant ]
            }
          })
        )
      ) : {};


      // filter out links from AhjRefs that were removed in previous actions
      let toOmit = [];
      let inheritance = ahj.inheritance||{};
      if( inheritance.descendants ){
        const descendants = inheritance.descendants.filter( descendant => (
          this.order.includes( descendant )
        ));
        if( descendants.length > 0 ) inheritance.descendants = descendants;
        else toOmit.push('descendants')
      }
      if( inheritance.children ){
        const children = inheritance.children.filter( child => (
          this.order.includes( child )
        ));
        if( children.length > 0 ) inheritance.children = children;
        else toOmit.push('children');
      }
      inheritance = Object.assign({},
        toOmit.length > 0 ? omit(inheritance, toOmit) :inheritance,
        Object.keys(descendantsTally).length > 1 ? { descendantsTally } : {},
        tally ? { tally } : {}
      );

      if( isRoot ) this.refs.push({ id, type, name, inherit, inheritance, state });

      return { [ ahjId ]: inheritance };

    })
  );

  const documents = this.order.map(ahjId => {
    const ahjDocument = this.documentMap[ahjId];
    // filter out links from AhjRefs that were removed in previous actions
    if(ahjDocument.inherit) {
      const inherit = ahjDocument.inherit.filter( ({ source }) => this.order.includes( source.id ));
      if( inherit.length > 0 ) return Object.assign({}, ahjDocument, { inherit });
      return Object.assign({},
        ...Object.keys(ahjDocument).map( field => (
          field !== 'inherit' ? { [field]: ahjDocument[ field ] } : {}
        ))
      );
    }
    return ahjDocument;
  });
  const associationTree = new AssociationTree( { items: documents });
  this.elements = associationTree.getElements();
  return this;
});
