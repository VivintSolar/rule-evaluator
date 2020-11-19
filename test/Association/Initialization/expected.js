

module.exports = JSON.stringify(
    {
        "Nation": "Default",
        "serviceId": "5888200",
        "latitude": 27.7806527,
        "longitude": -82.6913532,
        "Utility": "DukeFL",
        "ROC": "FL-01 Tampa Bay Solar",
        "Office Type": "Solar",
        "street": "4256 9TH AVE N",
        "customer_name": "Tye Weisenfluh",
        "City": "St. Petersburg",
        "County": "Pinellas County",
        "state": "FL",
        "State": "Florida",
        "zip": "33713",
        "place": "incorporatedPlace",
        "elements": [
            {
                "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                "name": "St. Petersburg",
                "type": "City"
            },
            {
                "id": "923aab30-ae86-4eb0-80d3-7344547cebd2",
                "name": "DukeFL",
                "type": "Utility"
            },
            {
                "id": "8a40f7f9-52e4-4ee1-b48d-e27e819000e3",
                "name": "FL-01 Tampa Bay Solar",
                "type": "ROC"
            },
            {
                "id": "4104fc2e-5fd5-4877-8cd5-dfefb0970976",
                "name": "Florida",
                "type": "State",
                "inherit": [
                    {
                        "source": {
                            "name": "2014 National Electrical Code",
                            "type": "National Electrical Code",
                            "id": "8f3c5dd4-5494-c38c-611f-86bcfbc11a94"
                        }
                    }
                ]
            },
            {
                "id": "8f3c5dd4-5494-c38c-611f-86bcfbc11a94",
                "name": "2014 National Electrical Code",
                "type": "National Electrical Code"
            },
            {
                "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2",
                "name": "Default",
                "type": "Nation"
            }
        ],
        "rules": {
            "enumRule": {
                "statements": [
                    {
                        "value": "stPetersburg1",
                        "onConflict": "standard",
                        "source": {
                            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                            "name": "St. Petersburg",
                            "type": "City"
                        }
                    }
                ],
                "id": "enumRule",
                "source": {
                    "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                    "name": "St. Petersburg",
                    "type": "City"
                },
                "name": "Enum Rule"
            },
            "booleanRule": {
                "statements": [
                    {
                        "value": false,
                        "onConflict": "standard",
                        "source": {
                            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                            "name": "St. Petersburg",
                            "type": "City"
                        }
                    }
                ],
                "id": "booleanRule",
                "source": {
                    "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                    "name": "St. Petersburg",
                    "type": "City"
                },
                "name": "Boolean Rule"
            },
            "numberRule": {
                "statements": [
                    {
                        "value": 6,
                        "onConflict": "standard",
                        "source": {
                            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                            "name": "St. Petersburg",
                            "type": "City"
                        }
                    }
                ],
                "id": "numberRule",
                "source": {
                    "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                    "name": "St. Petersburg",
                    "type": "City"
                },
                "name": "Number Rule"
            },
            "stringRule": {
                "statements": [
                    {
                        "value": "String For City: St. Petersburg Document",
                        "onConflict": "standard",
                        "source": {
                            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                            "name": "St. Petersburg",
                            "type": "City"
                        }
                    }
                ],
                "id": "stringRule",
                "source": {
                    "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                    "name": "St. Petersburg",
                    "type": "City"
                },
                "name": "String Rule"
            },
            "enumRuleUnion": {
                "statements": [
                    {
                        "value": "stPetersburg1",
                        "onConflict": "union",
                        "source": {
                            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                            "name": "St. Petersburg",
                            "type": "City"
                        }
                    },
                    {
                        "value": "dukeFL1",
                        "onConflict": "union",
                        "source": {
                            "id": "923aab30-ae86-4eb0-80d3-7344547cebd2",
                            "name": "DukeFL",
                            "type": "Utility"
                        }
                    },
                    {
                        "value": "fl01TampaBaySolar1",
                        "onConflict": "union",
                        "source": {
                            "id": "8a40f7f9-52e4-4ee1-b48d-e27e819000e3",
                            "name": "FL-01 Tampa Bay Solar",
                            "type": "ROC"
                        }
                    },
                    {
                        "value": "florida1",
                        "onConflict": "union",
                        "source": {
                            "id": "4104fc2e-5fd5-4877-8cd5-dfefb0970976",
                            "name": "Florida",
                            "type": "State"
                        }
                    },
                    {
                        "value": "nationalElectricalCode1",
                        "onConflict": "union",
                        "source": {
                            "id": "8f3c5dd4-5494-c38c-611f-86bcfbc11a94",
                            "name": "2014 National Electrical Code",
                            "type": "National Electrical Code"
                        }
                    },
                    {
                        "value": "default1",
                        "onConflict": "union",
                        "source": {
                            "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2",
                            "name": "Default",
                            "type": "Nation"
                        }
                    }
                ],
                "id": "enumRuleUnion",
                "source": {
                    "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                    "name": "St. Petersburg",
                    "type": "City"
                },
                "name": "Enum Rule Union"
            },
            "booleanRuleUnion": {
                "statements": [
                    {
                        "value": false,
                        "onConflict": "union",
                        "source": {
                            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                            "name": "St. Petersburg",
                            "type": "City"
                        }
                    },
                    {
                        "value": false,
                        "onConflict": "union",
                        "source": {
                            "id": "923aab30-ae86-4eb0-80d3-7344547cebd2",
                            "name": "DukeFL",
                            "type": "Utility"
                        }
                    },
                    {
                        "value": true,
                        "onConflict": "union",
                        "source": {
                            "id": "8a40f7f9-52e4-4ee1-b48d-e27e819000e3",
                            "name": "FL-01 Tampa Bay Solar",
                            "type": "ROC"
                        }
                    },
                    {
                        "value": false,
                        "onConflict": "union",
                        "source": {
                            "id": "4104fc2e-5fd5-4877-8cd5-dfefb0970976",
                            "name": "Florida",
                            "type": "State"
                        }
                    },
                    {
                        "value": true,
                        "onConflict": "union",
                        "source": {
                            "id": "8f3c5dd4-5494-c38c-611f-86bcfbc11a94",
                            "name": "2014 National Electrical Code",
                            "type": "National Electrical Code"
                        }
                    },
                    {
                        "value": true,
                        "onConflict": "union",
                        "source": {
                            "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2",
                            "name": "Default",
                            "type": "Nation"
                        }
                    }
                ],
                "id": "booleanRuleUnion",
                "source": {
                    "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                    "name": "St. Petersburg",
                    "type": "City"
                },
                "name": "Boolean Rule Union"
            },
            "numberRuleUnion": {
                "statements": [
                    {
                        "value": 6,
                        "onConflict": "union",
                        "source": {
                            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                            "name": "St. Petersburg",
                            "type": "City"
                        }
                    },
                    {
                        "value": 2,
                        "onConflict": "union",
                        "source": {
                            "id": "923aab30-ae86-4eb0-80d3-7344547cebd2",
                            "name": "DukeFL",
                            "type": "Utility"
                        }
                    },
                    {
                        "value": 3,
                        "onConflict": "union",
                        "source": {
                            "id": "8a40f7f9-52e4-4ee1-b48d-e27e819000e3",
                            "name": "FL-01 Tampa Bay Solar",
                            "type": "ROC"
                        }
                    },
                    {
                        "value": 4,
                        "onConflict": "union",
                        "source": {
                            "id": "4104fc2e-5fd5-4877-8cd5-dfefb0970976",
                            "name": "Florida",
                            "type": "State"
                        }
                    },
                    {
                        "value": 5,
                        "onConflict": "union",
                        "source": {
                            "id": "8f3c5dd4-5494-c38c-611f-86bcfbc11a94",
                            "name": "2014 National Electrical Code",
                            "type": "National Electrical Code"
                        }
                    },
                    {
                        "value": 1,
                        "onConflict": "union",
                        "source": {
                            "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2",
                            "name": "Default",
                            "type": "Nation"
                        }
                    }
                ],
                "id": "numberRuleUnion",
                "source": {
                    "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                    "name": "St. Petersburg",
                    "type": "City"
                },
                "name": "Number Rule Union"
            },
            "stringRuleUnion": {
                "statements": [
                    {
                        "value": "String For City: St. Petersburg Document",
                        "onConflict": "union",
                        "source": {
                            "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                            "name": "St. Petersburg",
                            "type": "City"
                        }
                    },
                    {
                        "value": "String For Utility: DukeFL Document",
                        "onConflict": "union",
                        "source": {
                            "id": "923aab30-ae86-4eb0-80d3-7344547cebd2",
                            "name": "DukeFL",
                            "type": "Utility"
                        }
                    },
                    {
                        "value": "String For ROC: FL-01 Tampa Bay Solar Document",
                        "onConflict": "union",
                        "source": {
                            "id": "8a40f7f9-52e4-4ee1-b48d-e27e819000e3",
                            "name": "FL-01 Tampa Bay Solar",
                            "type": "ROC"
                        }
                    },
                    {
                        "value": "String For State: Florida Document",
                        "onConflict": "union",
                        "source": {
                            "id": "4104fc2e-5fd5-4877-8cd5-dfefb0970976",
                            "name": "Florida",
                            "type": "State"
                        }
                    },
                    {
                        "value": "String For National Electrical Code: 2014 National Electrical Code Document",
                        "onConflict": "union",
                        "source": {
                            "id": "8f3c5dd4-5494-c38c-611f-86bcfbc11a94",
                            "name": "2014 National Electrical Code",
                            "type": "National Electrical Code"
                        }
                    },
                    {
                        "value": "String For Nation: Default Document",
                        "onConflict": "union",
                        "source": {
                            "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2",
                            "name": "Default",
                            "type": "Nation"
                        }
                    }
                ],
                "id": "stringRuleUnion",
                "source": {
                    "id": "c6a8adbb-72a8-f616-3701-ba0ee51c6498",
                    "name": "St. Petersburg",
                    "type": "City"
                },
                "name": "String Rule Union"
            }
        },
        "timeStamp": "2020-10-19T06:24:09.950Z"
    }
)
