const settings = require('./settings');
const hierarchy = require('./hierarchy');

module.exports = (function( parameters ){
  const { documents, definitions, authorityInfo } = parameters||{};
  this.appliedConditions = [];
  this.appliedRules = [];
  this.rules = {};
  this.sourceTally = {};
  this.refs = [];
  this.settings = settings;
  this.hierarchy = hierarchy;
  this.neededTypes = [];
  this.documents = documents;
  this.documentMap = Object.assign({},
      ...documents.map( document => ({ [ document.id ]: document }))
  );
  this.definitions = JSON.parse(JSON.stringify(definitions));
  this.authorityInfo = authorityInfo;
  this.document = Object.assign({},
      this.authorityInfo
  );
});
