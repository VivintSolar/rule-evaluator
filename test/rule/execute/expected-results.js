

module.exports = {
    singleParam: JSON.stringify(
        {
            exceptions: [ 'Service Elevation is greater Than 555ft' ],
            conditions: null,
            source: {
                id: 'id',
                type: 'type',
                name: 'name'
            },
            description: undefined,
            value: 5000,
            errors: null
        }

    ),
    withConditions: JSON.stringify(
        {
            exceptions: null,
            conditions: [
                {
                    left: 'serviceElevation',
                    operator: ">",
                    right: 555
                }
            ],
            source: {
                id: 'id',
                type: 'type',
                name: 'name'
            },
            description: 'Service Elevation is greater Than 555ft',
            value: 425,
            errors: null
        }
    ),
    withErrors: JSON.stringify(
        {
            exceptions: [ 'Service Elevation is greater Than 555ft' ],
            conditions: null,
            source: {
                id: 'id',
                type: 'type',
                name: 'name'
            },
            description: undefined,
            value: '(squareFootage / 2) + (squareFootage * 2)',
            errors: [ 'Required Parameter Missing Square Footage' ]
        }

    )
};
