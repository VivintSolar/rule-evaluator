
const v2ToV1InfoMap = {
    serviceId: "serviceId",
    latitude: "latitude",
    longitude: "longitude",
    customer_name: "customer_name",
    street: "street",
    zip: "zip",
    place: "place",
    verifiedPlace: "verifiedPlace",
    city: "City",
    county: "County",
    state: "State",
    stateAbrv: "state",
    nation: "Nation",
    utility: "Utility",
    roc: "ROC",
    officeType: "Office Type",
    timeStamp: "timeStamp",
    associatedAhjs: "elements"
}

module.exports = (function() {
    const associationInfoV1 = this.getAssociationInfoV1();
    const appliedRules = this.applied.rules;
    const appliedConditions = this.applied.conditions;
    return Object.assign({},
        ...Object.keys( v2ToV1InfoMap ).map( v2Field => {
            const v1Field = v2ToV1InfoMap[ v2Field ];
            if( associationInfoV1[ v1Field ] !== undefined ) return {
                [ v2Field ]: associationInfoV1[ v1Field ]
            }
        }), {
            appliedRules,
            appliedConditions
        }
    )
});
