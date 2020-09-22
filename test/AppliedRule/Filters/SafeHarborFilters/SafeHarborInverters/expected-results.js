module.exports = {
    contractType: {
        cash: {
            leadSource: {
                homebuilder: JSON.stringify(
                    {
                        exceptions: null,
                        conditions: [
                            {left: 'contractType', operator: '=', right: 'cash'},
                            {left: 'leadSource', operator: '=', right: 'homebuilder'}
                        ],
                        value: [
                            {
                                LEAD_SOURCE: 'Homebuilder',
                                ITC_CODE: '22',
                                id: 'Inverters5',
                                description: 'LEAD_SOURCE: Homebuilder, ITC_CODE: 22',
                                name: 'Inverters #5'
                            }
                        ],
                        errors: null,
                        id: 'allowableInverters'
                    }
                )
            }
        },
        ppa: {
            leadSource: {
                mph: JSON.stringify(
                    {
                        exceptions: null,
                        conditions: [{left: 'leadSource', operator: '=', right: 'mph'}],
                        value: [
                            {
                                LEAD_SOURCE: 'MPH',
                                ITC_CODE: '30',
                                id: 'Inverters1',
                                description: 'LEAD_SOURCE: MPH, ITC_CODE: 30',
                                name: 'Inverters #1'
                            },
                            {
                                LEAD_SOURCE: 'MPH',
                                ITC_CODE: '26',
                                id: 'Inverters4',
                                description: 'LEAD_SOURCE: MPH, ITC_CODE: 26',
                                name: 'Inverters #4'
                            },
                            {
                                LEAD_SOURCE: 'MPH',
                                ITC_CODE: '22',
                                id: 'Inverters7',
                                description: 'LEAD_SOURCE: MPH, ITC_CODE: 22',
                                name: 'Inverters #7'
                            }
                        ],
                        errors: null,
                        id: 'allowableInverters'
                    }
                )
            }
        },
        loan: {
            leadSource: {
                direct: JSON.stringify(
                    {
                        exceptions: null,
                        conditions: [
                            {left: 'contractType', operator: '=', right: 'loan'},
                            {left: 'leadSource', operator: '=', right: 'direct'}
                        ],
                        value: [
                            {
                                LEAD_SOURCE: 'Dealer',
                                ITC_CODE: '22',
                                id: 'Inverters2',
                                description: 'LEAD_SOURCE: Dealer, ITC_CODE: 22',
                                name: 'Inverters #2'
                            }
                        ],
                        errors: null,
                        id: 'allowableInverters'
                    }
                )
            }
        }
    }
};
