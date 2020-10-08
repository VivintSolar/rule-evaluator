const settings = require('./settings');
const hierarchy = require('./hierarchy');

module.exports = (function( parameters ){
  const { documents, definitions, authorityInfo, requestParameters } = parameters||{};
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
  this.definitions = definitions;
  this.authorityInfo = authorityInfo;
  this.requestParameters = requestParameters;
  this.document = Object.assign({},
      this.authorityInfo,
      this.requestParameters
  );
});
