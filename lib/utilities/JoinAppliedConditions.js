

class JoinAppliedConditions {
    constructor() {
        this.join = this.join.bind( this );
        this.addToAppliedConditions = this.addToAppliedConditions.bind( this );
        this.uniqueAppliedConditions = [];
    }
    join( appliedConditions ){
        return appliedConditions.map( appliedConditionId => this.addToAppliedConditions( appliedConditionId ) )
    }
    addToAppliedConditions( appliedConditionId ){
        if( !this.uniqueAppliedConditions.includes( appliedConditionId ) ) {
            this.uniqueAppliedConditions.push( appliedConditionId );
        }
    };
}

module.exports = JoinAppliedConditions;