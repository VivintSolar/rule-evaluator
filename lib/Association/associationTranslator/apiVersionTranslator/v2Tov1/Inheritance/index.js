
const isNeeded = require('./isNeeded');
const initializeInheritance = require('./initializeInheritance');
const addToRules = require('./addToRules');
const merge = require('./merge');
const getAppliedConditions = require('./getAppliedConditions');
const getArguments = require('./getArguments');


class Inheritance {
  constructor(parameters){
    this.throwError = this.throwError.bind(this);
    this.apply = this.apply.bind(this);
    this.applyHierarchy = this.applyHierarchy.bind(this);
    this.incrementSourceTally = this.incrementSourceTally.bind(this);
    this.initializeInheritance( parameters );
  }

  incrementSourceTally(id){
    if( !this.sourceTally[ id ] ){
      this.sourceTally[ id ] = 0;
    }
    this.sourceTally[ id ]++;
  }

  throwError( message ){
    this.error = message;
    throw new Error( message );
  }

  apply(){
    if( this.documents ){
      this.applyHierarchy();
    }
    return this;
  }

  applyHierarchy(){

    const ahjsByRootType = this.documents.reduce((result, ahj) => {
      const addToResult = (type, doc) => {
        if( !result[type] ){
          result[type] = [ doc ];
        } else {
          result[type].push( doc );
        }
      };
      const isRoot = !(ahj.inheritance && ahj.inheritance.ancestors);
      if(isRoot){
        if(this.isNeeded(ahj)){
          addToResult(ahj.type, ahj);
          const descendants = (ahj.inheritance||{}).descendants;
          if( descendants ) descendants.map( docId => {
            addToResult(ahj.type, this.documentMap[docId]);
          });
        }
      }
      return result;
    }, {});

    this.order = this.hierarchy.reduce( (results, ahjType) => {
      // organzize by hierarchy level and root hierarchy level for inherited/linked ahjs
      if( ahjsByRootType[ ahjType ] ) {
        ahjsByRootType[ ahjType ].map( ahj => {
          //filter out same type unless inherited/linked to same type
          if( !this.neededTypes.includes(ahj.type) || ahjType === ahj.type ){
            this.neededTypes.push(ahj.type);
            results.push( ahj.id );
          }
        });
      }
      return results;
    }, []);

    return this;
  }
}


Inheritance.prototype.getAppliedConditions = getAppliedConditions;
Inheritance.prototype.isNeeded = isNeeded;
Inheritance.prototype.initializeInheritance = initializeInheritance;
Inheritance.prototype.addToRules = addToRules;
Inheritance.prototype.merge = merge;
Inheritance.prototype.getArguments = getArguments;

module.exports = Inheritance;
