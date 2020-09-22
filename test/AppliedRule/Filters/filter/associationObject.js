module.exports = {
    ahj: {
        rules: {
            allowableBatteries: {
                statements: [
                    {
                        condition: [
                            {
                                left: "contractType",
                                operator: "=",
                                right: "lease"
                            }
                        ],
                        value: {
                            _type: "contain",
                            contractType: [
                                "Lease"
                            ]
                        },
                        onConflict: "filter"
                    },
                    {
                        condition: [
                            {
                                left: "contractType",
                                operator: "=",
                                right: "zeroLease"
                            }
                        ],
                        value: {
                            _type: "contain",
                            contractType: [
                                "Zero-Lease"
                            ]
                        },
                        onConflict: "filter"
                    },
                    {
                        condition: [
                            {
                                left: "contractType",
                                operator: "=",
                                right: "ppa"
                            }
                        ],
                        value: {
                            _type: "contain",
                            contractType: [
                                "PPA"
                            ]
                        },
                        onConflict: "filter"
                    },
                    {
                        condition: [
                            {
                                left: "contractType",
                                operator: "=",
                                right: "loan"
                            }
                        ],
                        value: {
                            _type: "contain",
                            contractType: [
                                "Loan"
                            ]
                        },
                        onConflict: "filter"
                    },
                    {
                        condition: [
                            {
                                left: "contractType",
                                operator: "=",
                                right: "cash"
                            }
                        ],
                        value: {
                            _type: "contain",
                            contractType: [
                                "Cash"
                            ]
                        },
                        onConflict: "filter"
                    },
                    {
                        value: {
                            _type: "contain"
                        },
                        onConflict: "filter"
                    }
                ],
                id: "allowableBatteries"
            }
        }
    },
    definitions: {
        rules: {
            allowableBatteries: {
                template: {
                    item: {
                        contractType: {
                            name: "Contract Type",
                            items: [
                                {
                                    name: "Cash",
                                    id: "Cash"
                                },
                                {
                                    name: "Lease",
                                    id: "Lease"
                                },
                                {
                                    name: "Loan",
                                    id: "Loan"
                                },
                                {
                                    name: "PPA",
                                    id: "PPA"
                                },
                                {
                                    name: "Zero-Lease",
                                    id: "Zero-Lease"
                                }
                            ],
                            dataType: "enum"
                        }
                    },
                    imports: [
                        {
                            field: "items",
                            transformations: {
                                contractType: "flatten",
                                contractTypes: "delete"
                            },
                            action: "fetchByURL",
                            fieldFormatter: {
                                name: "productName",
                                contractType: "contractTypes",
                                id: "oraclePartNumber"
                            },
                            urlParameters: [
                                "serviceId"
                            ],
                            responseDataPath: "batteryProducts",
                            url: "http://silver-lake-uat.us-west-2.elasticbeanstalk.com/pricebook/batteryproducts/:serviceId"
                        }
                    ],
                    onConflict: "standard",
                    dataType: "filter",
                    items: [
                        {
                            productName: "LG RESU10",
                            oraclePartNumber: "V301319",
                            name: "LG RESU10",
                            contractType: "Cash",
                            id: "V301319"
                        },
                        {
                            productName: "LG RESU10",
                            oraclePartNumber: "V301319",
                            name: "LG RESU10",
                            contractType: "Lease",
                            id: "V301319"
                        },
                        {
                            productName: "LG RESU10",
                            oraclePartNumber: "V301319",
                            name: "LG RESU10",
                            contractType: "Loan",
                            id: "V301319"
                        },
                        {
                            productName: "LG RESU10",
                            oraclePartNumber: "V301319",
                            name: "LG RESU10",
                            contractType: "PPA",
                            id: "V301319"
                        },
                        {
                            productName: "LG RESU10",
                            oraclePartNumber: "V301319",
                            name: "LG RESU10",
                            contractType: "Zero-Lease",
                            id: "V301319"
                        },
                        {
                            productName: "SN EcoLinx1",
                            oraclePartNumber: "V303397",
                            name: "SN EcoLinx1",
                            contractType: "Lease",
                            id: "V303397"
                        },
                        {
                            productName: "SN EcoLinx1",
                            oraclePartNumber: "V303397",
                            name: "SN EcoLinx1",
                            contractType: "PPA",
                            id: "V303397"
                        }
                    ]
                },
                editDisabled: true,
                description: "List of Batteries Available for Design and Installation",
                id: "allowableBatteries",
                name: "Allowable Batteries",
                allowableConditions: [
                    "contractType"
                ],
                rule: true,
                tags: [
                    "allowableEquipmentRuleGroup",
                    "permitDesignView",
                    "permit",
                    "design",
                    "surveyor"
                ]
            }
        },
        conditions: {
            contractType:{
                applyTo: [
                    "allowableBatteries"
                ],
                template: {
                    items: [
                        {
                            name: "Cash",
                            id: "cash"
                        },
                        {
                            name: "Loan",
                            id: "loan"
                        },
                        {
                            name: "PPA",
                            id: "ppa"
                        },
                        {
                            name: "Lease",
                            id: "lease"
                        },
                        {
                            name: "Zero-Lease",
                            id: "zeroLease"
                        }
                    ],
                    dataType: "enum"
                },
                condition: true,
                description: "Sales Force Contract Type Field",
                id: "contractType",
                name: "Contract Type",
                tags: [
                    "permit",
                    "design",
                    "surveyor"
                ]
            }
        }
    }
};
