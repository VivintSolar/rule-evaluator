import * as FamilyTree from "../index";


//initializeOptions
module.exports = (function({ options }){
    return Object.assign({}, FamilyTree.getOptionsSkeleton(),options||{})
});
