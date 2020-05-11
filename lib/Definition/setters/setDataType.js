
//definition.setDataType
module.exports = (function( dataType ){
   this.dataType = dataType;
   this.setTemplateAttr("dataType", dataType );
   return this.dataType;
});