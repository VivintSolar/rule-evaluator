


//getDesignedAHJ
module.exports = (function( { place } ){
    const getDesignedAHJElement = ( place ) => {
        const normalLogic = () => {
            if( !place ) return this.getElementByHierarchy( this.hierarchies.incorporatedPlace )
            else return this.getElementByHierarchy( this.hierarchies[ place ] )
        }
        const allDescendants = this.getAllDescendants()||[];
        if( allDescendants.length > 0 ){ //with links
            const childLink = [ ...this.getLinkOfType('City'), ...this.getLinkOfType('Township') ][ 0 ];
            if( childLink ) return childLink;
        }
        return normalLogic(); // w/o links
    }

    const designedAhjElement = getDesignedAHJElement( place );
    if( typeof designedAhjElement === "object" && !Array.isArray( designedAhjElement ) ) return designedAhjElement.id;
});
