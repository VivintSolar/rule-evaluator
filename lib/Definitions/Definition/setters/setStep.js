
//definition.setStep
module.exports = (function( step ){
   this.step = step;
   this.setTemplateAttr("step", step );
   return this.step;
});