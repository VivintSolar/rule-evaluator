
//definition.setTemplates
module.exports = (function( templates ){
   this.templates = templates;
   this.setTemplateAttr("templates", templates );
   return this.templates;
});