
const kennyCity = {
    id: "1",
    name: "Kenny City",
    type: "City",
    rules: {
        numberRule: {
            statements:[
                {
                    value: 2,
                    condition:[
                        {
                            left: "numberCondition",
                            operator: ">",
                            right: 10
                        }
                    ]
                },
                {
                    value: 1,
                    condition:[
                        {
                            left: "numberCondition",
                            operator: "<",
                            right: 10
                        }
                    ]
                },
                {
                    value: 0
                }
            ]
        },
        templateStringRule:{
            statements:[
                {
                    value: "NumberCondition > 10 - numberCondition: {numberCondition}, numberRule: {numberRule}, numberCondition2: {numberCondition2}",
                    condition:[
                        {
                            left: "numberCondition",
                            operator: ">",
                            right: 10
                        }
                    ]
                },
                {
                    value: "NumberCondition < 10 - numberCondition: {numberCondition}, numberRule: {numberRule}, numberCondition2: {numberCondition2}",
                    condition:[
                        {
                            left: "numberCondition",
                            operator: "<",
                            right: 10
                        }
                    ]
                },
                {
                    value: "DEFAULT - numberCondition: {numberCondition}, numberRule: {numberRule}, numberCondition2: {numberCondition2}"
                }
            ]
        }
    }
};

module.exports = [
    kennyCity
];
