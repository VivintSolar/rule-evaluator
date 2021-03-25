

//AppliedRules.evaluateByTag
module.exports = (function( tagId, conditions ){

    let performanceMarker = Array.isArray(tagId) ? tagId.join('.') : tagId;
    if( this.options.trackPerformance ){
        this.performance.addMarker(performanceMarker, 'tag');
        this.performance.startMarker(performanceMarker, 'tag' );
        this.options.trackPerformance = performanceMarker;
    }
    const ruleIds = this.getRuleIdsByTag(tagId);
    if( ruleIds && ruleIds.length > 0 ){
        const batchResults = this.batchEvaluate( ruleIds, conditions, this.options.trackPerformance ? this.options : null );
        if( this.options.trackPerformance ){
            batchResults.performance = this.performance.endMarker( performanceMarker, 'tag');
        }
        return batchResults;
    }
});
