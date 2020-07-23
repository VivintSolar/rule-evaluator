

// getOptionsSkeleton
module.exports = function(){
    return {
        mapBy:{
            child: "id",
            item: "id",
            element: "id"
        },
        childrenAlias: "children",
        parentsAlias: "parents",
        aliases:{
            children: "children",
            parents: "parents",
            descendants: "descendants",
            ancestors: "ancestors"
        },
        elementFields: [ "id", "name", "type" ]
    };
};
