
// getRuleDependencies
module.exports = (function( ){
    this.ruleDependencyIds = null;
    if( this.allowableRuleParameters ){
        if( this.statements ){
            this.statements.map( statement => {
                this.allowableRuleParameters.map( id => {
                    const substring = this.dataType === 'template string' ? `{${id}}` : id;
                    if( statement.value.includes( substring ) ){
                        if( !this.ruleDependencyIds ) this.ruleDependencyIds = [];
                        if( !this.parameterIds ) this.parameterIds = [];
                        if( !this.ruleDependencyIds.includes(id) ) this.ruleDependencyIds.push( id );
                        if( !this.parameterIds.includes(id) ) this.parameterIds.push( id );
                    }
                })
            });
        }
        this.ruleDependencies = !this.ruleDependencyIds ? null : this.getDefinitions( this.ruleDependencyIds );
    }
});
