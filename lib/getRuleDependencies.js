

// getRuleDependencies
module.exports = (function( ){
    this.ruleDependencies = null;
    if( this.allowableRuleParameters ){
        this.statements.map( statement => {
            this.allowableRuleParameters.map( id => {
                const substring = this.dataType === 'template string' ? `{${id}}` : id;
                if( statement.value.includes( substring ) ){
                    if( !this.ruleDependencies ) this.ruleDependencies = [];
                    if( !this.parameterIds ) this.parameterIds = [];
                    if( !this.ruleDependencies.includes(id) ) this.ruleDependencies.push( id );
                    if( !this.parameterIds.includes(id) ) this.parameterIds.push( id );
                }
            })
        });


    }
});