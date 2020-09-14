module.exports = {
    contractType: {
        cash: {
            leadSource: {
                homebuilder: JSON.stringify(
                    {
                        exceptions: null,
                        conditions: [{left: 'leadSource', operator: '=', right: 'homebuilder'}],
                        value: [
                            {
                                LEAD_SOURCE: 'Homebuilder',
                                ITC_CODE: '26',
                                id: 'Modules3',
                                description: 'LEAD_SOURCE: Homebuilder, ITC_CODE: 26',
                                name: 'Modules #3'
                            },
                            {
                                LEAD_SOURCE: 'Homebuilder',
                                ITC_CODE: '22',
                                id: 'Modules5',
                                description: 'LEAD_SOURCE: Homebuilder, ITC_CODE: 22',
                                name: 'Modules #5'
                            },
                            {
                                LEAD_SOURCE: 'Homebuilder',
                                ITC_CODE: '30',
                                id: 'Modules6',
                                description: 'LEAD_SOURCE: Homebuilder, ITC_CODE: 30',
                                name: 'Modules #6'
                            },
                            {
                                LEAD_SOURCE: 'Homebuilder',
                                ITC_CODE: '30',
                                id: 'Modules9',
                                description: 'LEAD_SOURCE: Homebuilder, ITC_CODE: 30',
                                name: 'Modules #9'
                            }
                        ],
                        errors: [
                            'Required Condition Input Missing; Is Special Purchase Safe Harbor'
                        ],
                        id: 'allowableModules'
                    }
                )
            }
        }
    },
    isSpecialPurchaseSafeHarbor: {
        true: {
            contractType: {
                ppa: {
                    leadSource: {
                        mph: JSON.stringify(
                            {
                                exceptions: null,
                                conditions: [
                                    {left: 'contractType', operator: '=', right: 'ppa'},
                                    {left: 'isSpecialPurchaseSafeHarbor', operator: '=', right: true},
                                    {left: 'leadSource', operator: '=', right: 'mph'}
                                ],
                                value: [
                                    {
                                        LEAD_SOURCE: 'MPH',
                                        ITC_CODE: '30',
                                        id: 'Modules1',
                                        description: 'LEAD_SOURCE: MPH, ITC_CODE: 30',
                                        name: 'Modules #1'
                                    }
                                ],
                                errors: null,
                                id: 'allowableModules'
                            }
                        )
                    }
                }
            }
        },
        false: {
            contractType: {
                lease: {
                    leadSource: {
                        direct: JSON.stringify(
                            {
                                exceptions: null,
                                conditions: [
                                    {left: 'contractType', operator: '=', right: 'lease'},
                                    {
                                        left: 'isSpecialPurchaseSafeHarbor',
                                        operator: '=',
                                        right: false
                                    },
                                    {left: 'leadSource', operator: '=', right: 'direct'}
                                ],
                                value: [
                                    {
                                        LEAD_SOURCE: 'Dealer',
                                        ITC_CODE: '22',
                                        id: 'Modules2',
                                        description: 'LEAD_SOURCE: Dealer, ITC_CODE: 22',
                                        name: 'Modules #2'
                                    }
                                ],
                                errors: null,
                                id: 'allowableModules'
                            }
                        )
                    }
                }
            }
        }
    }
};
