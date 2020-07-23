

// getElementByHierarchy
module.exports = (function(  hierarchy ){
    let element;
    hierarchy.reverse().forEach( documentType => {
        Object.values( this.tree ).forEach( document => {
            if( documentType === document.type) element = document
        } )
    });
     return element;
});
