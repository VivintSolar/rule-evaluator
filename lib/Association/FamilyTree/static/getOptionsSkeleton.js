

// getOptionsSkeleton
module.exports = (function(){
    return {
        mapBy:{
            child: "id",
            item: "id",
            element: "id"
        },
        // childBy: "source.id",
        // childrenAlias: "inherit",
        childrenAlias: "children",
        parentsAlias: "parents",
        aliases:{
            children: "children",
            parents: "parents",
            descendents: "descendents",
            ancestors: "ancestors"
        },
        // elementFields: [ "id", "name", "type", "State", "inherit" ]
        elementFields: [ "id", "name", "type" ]
    };
});
