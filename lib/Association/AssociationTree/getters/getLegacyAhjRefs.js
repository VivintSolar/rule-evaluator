



//getLegacyAhjRefs
module.exports = (function( ){
    return Object.values( this.tree )
        .reduce(( ahjRefs, treeElement ) => {
            const { parents, id, name, type, children, descendants } = treeElement;
            if( !parents ){
                const inheritance = Object.assign({ id },
                    descendants ? { descendants } : {},
                    children ? { children } : {}
                );
                ahjRefs.push({ id, name, type, inheritance });
            }
            return ahjRefs;
        }, [])
});
