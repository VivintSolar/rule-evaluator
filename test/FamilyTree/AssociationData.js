const documents = require('./AssociationTree/documents')
const AssociationTree = require('../../lib/Association/AssociationTree');

const associationTree = new AssociationTree({ items: documents });

const elementOptions = [
    associationTree.getElements(),
    [
        {
            id: "193a4aa7-4299-4755-964d-ff27f1df3b75",
            name: "North Charleston",
            type: "City"
        },
        {
            id: "a79b25f0-8ea7-41e0-ba68-30519b5c572a",
            name: "SCEG",
            type: "Utility"
        },
        {
            id: "356b0314-f98e-4e89-b4b9-accc210aa513",
            name: "FL-02 West Orlando Solar",
            type: "ROC"
        },
        {
            id: "63c82862-9b90-4b24-b123-db035c7a90fe",
            name: "South Carolina",
            type: "State",
            inherit: [
                {
                    source: {
                        name: "2017 National Electrical Code",
                        type: "National Electrical Code",
                        id: "61424e3b-cbdb-c90f-2cc3-1b8f2324cedd"
                    }
                },
                {
                    source: {
                        name: "2015 International Building Code",
                        type: "International Building Code",
                        id: "2d887e17-7a22-f68f-95f9-a77b1cbf403e"
                    }
                },
                {
                    source: {
                        name: "2015 International Residential Code",
                        type: "International Residential Code",
                        id: "25b3068f-3ba1-a70e-8b85-c2cdfd496afd"
                    }
                }
            ]
        },
        {
            id: "61424e3b-cbdb-c90f-2cc3-1b8f2324cedd",
            name: "2017 National Electrical Code",
            type: "National Electrical Code"
        },
        {
            id: "2d887e17-7a22-f68f-95f9-a77b1cbf403e",
            name: "2015 International Building Code",
            type: "International Building Code"
        },
        {
            id: "25b3068f-3ba1-a70e-8b85-c2cdfd496afd",
            name: "2015 International Residential Code",
            type: "International Residential Code"
        },
        {
            id: "9a9e8ccd-44a3-40dc-8376-2c76411284a2",
            name: "Default",
            type: "Nation"
        }
    ]
];

const service4780507 = {
    ahj: {
        Nation: "Default",
        serviceId: "4780507",
        latitude: 32.9615272,
        longitude: -80.05351069999999,
        Utility: "SCEG",
        ROC: "FL-02 West Orlando Solar",
        "Office Type": "Solar",
        street: "8594 BROOKFOREST DR",
        customer_name: "Charles Mistretta",
        City: "North Charleston",
        County: "Charleston County",
        state: "SC",
        State: "South Carolina",
        zip: "29406",
        place: "incorporatedPlace",
        verifiedPlace: "census",
        ahjRefs: [
        {
            id: "193a4aa7-4299-4755-964d-ff27f1df3b75",
            type: "City",
            name: "North Charleston",
            inheritance: {
                tally: 3
            },
            state: "South Carolina"
        },
        {
            id: "a79b25f0-8ea7-41e0-ba68-30519b5c572a",
            type: "Utility",
            name: "SCEG",
            inheritance: {
                tally: 11
            },
            state: "South Carolina"
        },
        {
            id: "356b0314-f98e-4e89-b4b9-accc210aa513",
            type: "ROC",
            name: "FL-02 West Orlando Solar",
            inheritance: {
                tally: 2
            },
            state: "Florida"
        },
        {
            id: "63c82862-9b90-4b24-b123-db035c7a90fe",
            type: "State",
            name: "South Carolina",
            inherit: [
                {
                    source: {
                        name: "2017 National Electrical Code",
                        type: "National Electrical Code",
                        id: "61424e3b-cbdb-c90f-2cc3-1b8f2324cedd"
                    }
                },
                {
                    source: {
                        name: "2015 International Building Code",
                        type: "International Building Code",
                        id: "2d887e17-7a22-f68f-95f9-a77b1cbf403e"
                    }
                },
                {
                    source: {
                        name: "2015 International Residential Code",
                        type: "International Residential Code",
                        id: "25b3068f-3ba1-a70e-8b85-c2cdfd496afd"
                    }
                }
            ],
            inheritance: {
                id: "63c82862-9b90-4b24-b123-db035c7a90fe",
                children: [
                    "61424e3b-cbdb-c90f-2cc3-1b8f2324cedd",
                    "2d887e17-7a22-f68f-95f9-a77b1cbf403e",
                    "25b3068f-3ba1-a70e-8b85-c2cdfd496afd"
                ],
                descendants: [
                    "61424e3b-cbdb-c90f-2cc3-1b8f2324cedd",
                    "2d887e17-7a22-f68f-95f9-a77b1cbf403e",
                    "25b3068f-3ba1-a70e-8b85-c2cdfd496afd"
                ],
                linkLevel: 0,
                tally: 15
            },
            state: "South Carolina"
        },
        {
            id: "9a9e8ccd-44a3-40dc-8376-2c76411284a2",
            type: "Nation",
            name: "Default",
            inheritance: {
                tally: 123
            }
        }
    ],
        elements: [
        {
            id: "193a4aa7-4299-4755-964d-ff27f1df3b75",
            name: "North Charleston",
            type: "City"
        },
        {
            id: "a79b25f0-8ea7-41e0-ba68-30519b5c572a",
            name: "SCEG",
            type: "Utility"
        },
        {
            id: "356b0314-f98e-4e89-b4b9-accc210aa513",
            name: "FL-02 West Orlando Solar",
            type: "ROC"
        },
        {
            id: "63c82862-9b90-4b24-b123-db035c7a90fe",
            name: "South Carolina",
            type: "State",
            inherit: [
                {
                    source: {
                        name: "2017 National Electrical Code",
                        type: "National Electrical Code",
                        id: "61424e3b-cbdb-c90f-2cc3-1b8f2324cedd"
                    }
                },
                {
                    source: {
                        name: "2015 International Building Code",
                        type: "International Building Code",
                        id: "2d887e17-7a22-f68f-95f9-a77b1cbf403e"
                    }
                },
                {
                    source: {
                        name: "2015 International Residential Code",
                        type: "International Residential Code",
                        id: "25b3068f-3ba1-a70e-8b85-c2cdfd496afd"
                    }
                }
            ]
        },
        {
            id: "61424e3b-cbdb-c90f-2cc3-1b8f2324cedd",
            name: "2017 National Electrical Code",
            type: "National Electrical Code"
        },
        {
            id: "2d887e17-7a22-f68f-95f9-a77b1cbf403e",
            name: "2015 International Building Code",
            type: "International Building Code"
        },
        {
            id: "25b3068f-3ba1-a70e-8b85-c2cdfd496afd",
            name: "2015 International Residential Code",
            type: "International Residential Code"
        },
        {
            id: "9a9e8ccd-44a3-40dc-8376-2c76411284a2",
            name: "Default",
            type: "Nation"
        }
    ],
        timeStamp: "2020-07-17T07:25:52.642Z"
    }
}
const index = {
    associationTreeElements: elementOptions[0],
    generateAhj: ( option ) => ({
        elements: elementOptions[ option || 0 ],
        place: 'incorporatedPlace'
    }),
    service4780507
};


module.exports = index;
