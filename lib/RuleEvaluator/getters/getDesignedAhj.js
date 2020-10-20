

// getDesignedAhj
module.exports = (function() {
    if( this.apiVersion === 'v1') return this.getDesignedAhjV1();
    else if( this.apiVersion === 'v2') return this.getDesignedAhjV2();
});
