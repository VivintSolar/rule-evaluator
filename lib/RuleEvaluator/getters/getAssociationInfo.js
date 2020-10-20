
// getAssociationInfo
module.exports = (function() {
    if( this.apiVersion === 'v1') return this.getAssociationInfoV1();
    else if( this.apiVersion === 'v2') return this.getAssociationInfoV2();
});
