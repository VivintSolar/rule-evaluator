
const townshipDocuments = [
    {
        "searchNames": [
            "Caln Township"
        ],
        "inherit": [
            {
                "source": {
                    "name": "2008 National Electrical Code",
                    "id": "81688718-aead-8b1a-12cf-44af4dda6da3",
                    "type": "National Electrical Code"
                }
            },
            {
                "source": {
                    "name": "2009 International Building Code",
                    "id": "937bf3e4-42c1-52d2-39a8-6e0d7adbb11f",
                    "type": "International Building Code"
                }
            },
            {
                "source": {
                    "name": "2009 International Residential Code",
                    "id": "83705565-65b1-28c0-2cc8-b841fb126510",
                    "type": "International Residential Code"
                }
            },
            {
                "source": {
                    "name": "2018 International Fire Code",
                    "id": "a824717b-a970-8431-13fa-e722a4680988",
                    "type": "International Fire Code"
                }
            }
        ],
        "latitude": 40.0038259,
        "county": "Chester County",
        "name": "Caln Township",
        "rules": {
            "permitOfficeRequirements": {
                "statements": [
                    {
                        "value": "Requires framing photos for each unique framing designed on."
                    }
                ],
                "id": "permitOfficeRequirements",
                "source": {
                    "name": "Caln Township",
                    "id": "a687ac1c-00c6-cae1-3ba9-03f7adca687f",
                    "type": "Township"
                }
            },
            "primaryFireCodePathway": {
                "statements": [
                    {
                        "value": "A Single 36\" MUST be located either on the Front of the Home (in front of gate/fence, if applicable) or adjacent to a Driveway\nMUST run from lowest roof edge (usually the Eave) to Ridge free of obstructions where possible.\nPathway may be located either at the Side, Hip, or Valley.\nThis Pathway may double up as an adjacent roof section pathway."
                    }
                ],
                "id": "primaryFireCodePathway",
                "source": {
                    "name": "Caln Township",
                    "id": "a687ac1c-00c6-cae1-3ba9-03f7adca687f",
                    "type": "Township"
                }
            },
            "fireCodeSetbacks": {
                "statements": [
                    {
                        "condition": [
                            {
                                "left": "roofPlaneTilt",
                                "right": 9.5,
                                "operator": "<"
                            }
                        ],
                        "description": "If the slope is <9.5°.",
                        "value": {
                            "side": 0,
                            "valley": 0,
                            "ridge": 0,
                            "hip": 0
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "structureType",
                                "right": "nonHabitableStructure",
                                "operator": "="
                            }
                        ],
                        "description": "0\", if structure is non-habitable",
                        "value": {
                            "valley": 0,
                            "ridge": 0,
                            "hip": 0
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "adjacentRidgeRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentValleyRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentHipRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            }
                        ],
                        "description": "If Primary/Secondary Pathways CANNOT apply & adjacent sections are NOT accessible, A single 36\" side required.",
                        "value": {
                            "side": 36
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "adjacentRidgeRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentValleyRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentHipRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentHipRoofPlanePercentOccupied",
                                "right": 0,
                                "operator": ">"
                            }
                        ],
                        "description": "If Primary/Secondary Pathways CANNOT apply & the adjacent section has New/Existing Modules",
                        "value": {
                            "hip": 18
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "adjacentRidgeRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentValleyRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentHipRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentValleyRoofPlanePercentOccupied",
                                "right": 0,
                                "operator": ">"
                            }
                        ],
                        "description": "If Primary/Secondary Pathways CANNOT apply & the adjacent section has New/Existing Modules",
                        "value": {
                            "valley": 18
                        }
                    },
                    {
                        "value": {
                            "ridge": 36
                        }
                    }
                ],
                "id": "fireCodeSetbacks",
                "source": {
                    "name": "Caln Township",
                    "id": "a687ac1c-00c6-cae1-3ba9-03f7adca687f",
                    "type": "Township"
                }
            },
            "secondaryFireCodePathway": {
                "statements": [
                    {
                        "value": " A Single 36\" MUST be located on a separate roof section from the Primary Pathway, where possible.\nMUST run from lowest roof edge (usually the Eave) to Ridge free of obstructions where possible.\nThe Pathway may be located either at the Side, Hip, or Valley.\nThis Pathway may double up as an adjacent roof section pathway."
                    }
                ],
                "id": "secondaryFireCodePathway",
                "source": {
                    "name": "Caln Township",
                    "id": "a687ac1c-00c6-cae1-3ba9-03f7adca687f",
                    "type": "Township"
                }
            },
            "egressWindowsFireCodeSetback": {
                "statements": [
                    {
                        "value": true
                    }
                ],
                "id": "egressWindowsFireCodeSetback",
                "source": {
                    "name": "Caln Township",
                    "id": "a687ac1c-00c6-cae1-3ba9-03f7adca687f",
                    "type": "Township"
                }
            },
            "egressWindowsFireCodeSetbackWidth": {
                "statements": [
                    {
                        "value": 36
                    }
                ],
                "id": "egressWindowsFireCodeSetbackWidth",
                "source": {
                    "name": "Caln Township",
                    "id": "a687ac1c-00c6-cae1-3ba9-03f7adca687f",
                    "type": "Township"
                }
            },
            "cadPacket": {
                "statements": [
                    {
                        "value": [
                            "frameSection",
                            "roofPhotosPdfPhoto"
                        ]
                    }
                ],
                "id": "cadPacket",
                "source": {
                    "name": "Caln Township",
                    "id": "a687ac1c-00c6-cae1-3ba9-03f7adca687f",
                    "type": "Township"
                }
            }
        },
        "id": "a687ac1c-00c6-cae1-3ba9-03f7adca687f",
        "state": "Pennsylvania",
        "type": "Township",
        "longitude": -75.7487779
    },
    {"rules":{"690.8(B)Implementation":{"statements":[{"value":"notImplemented"}],"id":"690.8(B)Implementation"},"allows240.4(B)":{"statements":[{"value":true}],"id":"allows240.4(B)"},"centerFedRuleRequired":{"statements":[{"value":false}],"id":"centerFedRuleRequired"},"electricalCode":{"statements":[{"value":["2008NationalElectricalCode"]}],"id":"electricalCode"}},"longitude":95.7129,"searchNames":["2008 National Electrical Code"],"id":"81688718-aead-8b1a-12cf-44af4dda6da3","latitude":37.0902,"name":"2008 National Electrical Code","type":"National Electrical Code"},
    {"rules":{"buildingCode":{"statements":[{"value":["2009InternationalBuildingCode"]}],"id":"buildingCode"},"windSpeed":{"statements":[{"value":90}],"id":"windSpeed"},"roofSnowLoadReductionAllowed":{"statements":[{"value":"yes"}],"id":"roofSnowLoadReductionAllowed"},"liveLoad":{"statements":[{"value":20}],"id":"liveLoad"},"installableRoofTilts":{"statements":[{"value":{"max":30,"min":2.4},"description":"If Roof Type = Metal: Curved or Trapezoidal","condition":[{"left":"roofType","operator":"=","right":"metalTrapezoidal"}]},{"value":{"max":30},"description":"If Roof Type = Metal: Standing Seam","condition":[{"left":"roofType","operator":"=","right":"metalStandingSeam"}]},{"value":{"min":9.5},"description":"If Roof Type = Tile","condition":[{"left":"roofType","operator":"=","right":"tile"}]},{"value":{"min":9.5},"description":"If Roof Type = Composite Shingle","condition":[{"left":"roofType","operator":"=","right":"compositeShingle"}]},{"value":{"min":1.2}}]},"exposureCategory":{"statements":[{"value":"b"}],"id":"exposureCategory"}},"longitude":95.7129,"searchNames":["2009 International Building Code"],"id":"937bf3e4-42c1-52d2-39a8-6e0d7adbb11f","latitude":37.0902,"name":"2009 International Building Code","type":"International Building Code"},
    {"rules":{"residentialCode":{"statements":[{"value":["2009InternationalResidentialCode"]}],"id":"residentialCode"}},"longitude":95.7129,"searchNames":["2009 International Residential Code"],"id":"83705565-65b1-28c0-2cc8-b841fb126510","latitude":37.0902,"name":"2009 International Residential Code","type":"International Residential Code"},
    {"rules":{"egressPathway(S)":{"statements":[{"value":"flexible;ShortestPossible"}],"id":"egressPathway(S)"},"fireCode":{"statements":[{"value":["2018InternationalFireCode"]}],"id":"fireCode"},"fireCodeSetbacks":{"statements":[{"value":{"egressPathway":0,"pathway":0,"valley":0,"ridge":0,"hip":0},"description":"If the structure is non-habitable","condition":[{"left":"structureType","operator":"=","right":"nonHabitableStructure"}]},{"value":{"pathway":0,"valley":0,"ridge":0,"hip":0},"description":"If the roof slope is <9.5°","condition":[{"left":"roofPlaneTilt","operator":"<","right":9.5}]},{"value":{"hip":18},"description":"If Primary/Secondary Pathways CANNOT apply & the adjacent section has New/Existing Modules","condition":[{"left":"adjacentHipRoofPlanePercentOccupied","operator":">","right":0},{"left":"adjacentHipRoofPlaneAccessible","operator":"=","right":false},{"left":"adjacentRidgeRoofPlaneAccessible","operator":"=","right":false},{"left":"adjacentValleyRoofPlaneAccessible","operator":"=","right":false}]},{"value":{"valley":18},"description":"If Primary/Secondary Pathways CANNOT apply & the adjacent section has New/Existing Modules","condition":[{"left":"adjacentValleyRoofPlanePercentOccupied","operator":">","right":0},{"left":"adjacentHipRoofPlaneAccessible","operator":"=","right":false},{"left":"adjacentRidgeRoofPlaneAccessible","operator":"=","right":false},{"left":"adjacentValleyRoofPlaneAccessible","operator":"=","right":false}]},{"value":{"ridge":36},"description":"If covering ≥33% of the home","condition":[{"left":"entireRoofPercentOccupied","operator":">=","right":33}]},{"value":{"ridge":18},"description":"If covering <66% of the home & Yes a Fire Sprinkler system IS installed.","condition":[{"left":"entireRoofPercentOccupied","operator":"<","right":66},{"left":"hasFireSprinklers","operator":"=","right":true}]},{"value":{"ridge":18,"egressPathway":36,"pathway":36}}],"id":"fireCodeSetbacks","source":{"type":"International Fire Code","name":"2018 International Fire Code","id":"a824717b-a970-8431-13fa-e722a4680988"}},"primaryFireCodePathway":{"statements":[{"value":"A Single 36\" MUST be located either on the Front of the Home (in front of gate/fence, if applicable) or adjacent to a Driveway\nMUST run from lowest roof edge (usually the Eave) to Ridge free of obstructions where possible.\nPathway may be located either at the Side, Hip, or Valley.\nThis Pathway may double up as an adjacent roof section pathway."}],"id":"primaryFireCodePathway"},"secondaryFireCodePathway":{"statements":[{"value":"A Single 36\" MUST be located on a separate roof section from the Primary Pathway, where possible.\n(Same additional guidelines apply from the Primary Fire Code Pathway.)"}],"id":"secondaryFireCodePathway"},"sitePlanAhjNotes":{"statements":[{"value":"ROOF FIRE SUPPRESSION SPRINKLER SYSTEM: {hasFireSprinklers}\nTOTAL ROOF AREA: {totalRoofArea}\nTOTAL MODULE AREA: {totalArrayArea}\nTOTAL AREA COVERED: {entireRoofPercentOccupied}\n"}],"id":"sitePlanAhjNotes","source":{"type":"International Fire Code","name":"2018 International Fire Code","id":"a824717b-a970-8431-13fa-e722a4680988"}}},"longitude":95.7129,"searchNames":["2018 International Fire Code"],"id":"a824717b-a970-8431-13fa-e722a4680988","latitude":37.0902,"name":"2018 International Fire Code","type":"International Fire Code"}
];

const cityDocuments = [
    {
        "searchNames": [
            "Olivebridge"
        ],
        "city": "Olivebridge",
        "latitude": 41.9278705,
        "county": "Ulster County",
        "rules": {
            "snowLoad": {
                "statements": [
                    {
                        "value": 50
                    }
                ],
                "id": "snowLoad"
            }
        },
        "office": "NY-04 Albany",
        "type": "City",
        "formattedAddress": "New Paltz, NY 12561, USA",
        "inherit": [
            {
                "source": {
                    "name": "Olive",
                    "id": "b743593b-d368-c1a4-d96c-44d0c226e44a",
                    "type": "City"
                }
            }
        ],
        "name": "Olivebridge",
        "id": "d7ffc665-764c-9664-b479-b3e617ab7dc3",
        "state": "New York",
        "longitude": -74.21542389999999
    },
    {
        "city": "Olive",
        "office": "NY-04 Albany",
        "county": "Ulster County",
        "rules": {},
        "longitude": -74.24140919999999,
        "searchNames": ["Olive"],
        "id": "b743593b-d368-c1a4-d96c-44d0c226e44a",
        "latitude": 41.9456873,
        "name": "Olive",
        "formattedAddress": "New Paltz, NY 12561, USA",
        "state": "New York",
        "type": "City"
    }
];

const countyDocuments = [
    {
        "searchNames": [
            "Kankakee County"
        ],
        "inherit": [
            {
                "source": {
                    "name": "2014 National Electrical Code",
                    "id": "8f3c5dd4-5494-c38c-611f-86bcfbc11a94",
                    "type": "National Electrical Code"
                }
            },
            {
                "source": {
                    "name": "2015 International Building Code",
                    "id": "2d887e17-7a22-f68f-95f9-a77b1cbf403e",
                    "type": "International Building Code"
                }
            },
            {
                "source": {
                    "name": "2015 International Residential Code",
                    "id": "25b3068f-3ba1-a70e-8b85-c2cdfd496afd",
                    "type": "International Residential Code"
                }
            }
        ],
        "latitude": 41.1790977,
        "county": "Kankakee County",
        "name": "Kankakee County",
        "rules": {
            "dimensionsRequired": {
                "statements": [
                    {
                        "value": [
                            "propertyLines",
                            "yardSetbacks"
                        ]
                    }
                ],
                "id": "dimensionsRequired",
                "source": {
                    "name": "Kankakee County",
                    "id": "48dfbfe9-65e8-6062-d563-96b5dd635d59",
                    "type": "County"
                }
            },
            "cadPacket": {
                "statements": [
                    {
                        "value": [
                            "plotPlan",
                            "dataPage"
                        ]
                    }
                ],
                "id": "cadPacket",
                "source": {
                    "name": "Kankakee County",
                    "id": "48dfbfe9-65e8-6062-d563-96b5dd635d59",
                    "type": "County"
                }
            }
        },
        "id": "48dfbfe9-65e8-6062-d563-96b5dd635d59",
        "state": "Illinois",
        "type": "County",
        "longitude": -87.77633329999999
    },
    {"rules":{"690.8(B)Implementation":{"statements":[{"value":"fullImplementation"}],"id":"690.8(B)Implementation"},"allows240.4(B)":{"statements":[{"value":true}],"id":"allows240.4(B)"},"centerFedRuleRequired":{"statements":[{"value":false}],"id":"centerFedRuleRequired"},"electricalCode":{"statements":[{"value":["2014NationalElectricalCode"]}],"id":"electricalCode"}},"longitude":95.7129,"searchNames":["2014 National Electrical Code"],"id":"8f3c5dd4-5494-c38c-611f-86bcfbc11a94","latitude":37.0902,"name":"2014 National Electrical Code","type":"National Electrical Code"},
    {"rules":{"buildingCode":{"statements":[{"value":["2015InternationalBuildingCode"]}],"id":"buildingCode"},"exposureCategory":{"statements":[{"value":"b"}],"id":"exposureCategory"},"installableRoofTilts":{"statements":[{"value":{"max":30,"min":2.4},"description":"If Roof Type = Metal: Curved or Trapezoidal","condition":[{"left":"roofType","operator":"=","right":"metalTrapezoidal"}]},{"value":{"max":30},"description":"If Roof Type = Metal: Standing Seam","condition":[{"left":"roofType","operator":"=","right":"metalStandingSeam"}]},{"value":{"min":9.5},"description":"If Roof Type = Tile","condition":[{"left":"roofType","operator":"=","right":"tile"}]},{"value":{"min":9.5},"description":"If Roof Type = Composite Shingle","condition":[{"left":"roofType","operator":"=","right":"compositeShingle"}]},{"value":{"min":1.2}}]},"liveLoad":{"statements":[{"value":20}],"id":"liveLoad"},"roofSnowLoadReductionAllowed":{"statements":[{"value":"yes"}],"id":"roofSnowLoadReductionAllowed"},"windSpeed":{"statements":[{"value":115}],"id":"windSpeed","source":{"type":"International Building Code","name":"2015 International Building Code","id":"2d887e17-7a22-f68f-95f9-a77b1cbf403e"}}},"longitude":95.7129,"searchNames":["2015 International Building Code"],"id":"2d887e17-7a22-f68f-95f9-a77b1cbf403e","latitude":37.0902,"name":"2015 International Building Code","type":"International Building Code"},
    {"rules":{"residentialCode":{"statements":[{"value":["2015InternationalResidentialCode"]}],"id":"residentialCode"}},"longitude":95.7129,"searchNames":["2015 International Residential Code"],"id":"25b3068f-3ba1-a70e-8b85-c2cdfd496afd","latitude":37.0902,"name":"2015 International Residential Code","type":"International Residential Code"}
];

const rocDocuments = [
    {
        "searchNames": [
            "NY-03 Test Solar"
        ],
        "city": "Testing",
        "inherit": [
            {
                "source": {
                    "name": "NY-01 Long Island West Solar",
                    "id": "bc990f10-0a01-46fe-a0e1-25de99ed6601",
                    "type": "ROC"
                }
            }
        ],
        "latitude": "40.783864",
        "county": "Testing County",
        "name": "NY-03 Test Solar",
        "rules": {},
        "id": "8bc429af-4ba3-41dd-a1f0-8fbbe4cf3305",
        "state": "New York",
        "type": "ROC",
        "longitude": "-73.120306"
    },
    {
        "searchNames": [
            "NY-02 Long Island East Solar"
        ],
        "city": "Bohemia",
        "inherit": [
            {
                "source": {
                    "name": "NY-01 Long Island West Solar",
                    "id": "bec754e9-0f19-42ff-a219-5bd6ee35ad75",
                    "type": "ROC"
                }
            }
        ],
        "latitude": "40.783864",
        "county": "Suffolk County",
        "name": "NY-02 Long Island East Solar",
        "rules": {},
        "id": "bc990f10-0a01-46fe-a0e1-25de99ed6601",
        "state": "New York",
        "type": "ROC",
        "longitude": "-73.120306"
    },
    {
        "city": "Westbury",
        "county": "Nassau County",
        "rules": {
            "availableMountingSystems": {"statements": [{"value": ["uniracSFM"]}], "id": "availableMountingSystems"},
            "generalElectrical": {
                "statements": [{"value": "1. ALL WIRING MUST BE PROPERLY SUPPORTED BY DEVICES OR MECHANICAL MEANS DESIGNED AND LISTED FOR SUCH USE.  FOR ROOF-MOUNTED SYSTEMS- WIRING MUST BE PERMANENTLY AND COMPLETELY HELD OFF OF THE ROOF SURFACE. \n2. ANY CODE VIOLATIONS EVIDENT IN THE INTERCONNECTION PANEL WILL BE CORRECTED ON INSTALLATION. \n3. SYSTEM SHALL BE INSTALLED IN ACCORDANCE WITH ALL RELEVANT CODE\n4. RAPID SHUTDOWN INITIATION TAKES PLACE AT THE AC DISCONNECT.  RAPID SHUTDOWN COMMENCES UPON LOSS OF UTILITY SOURCE VOLTAGE. \n5. SEE *E 1.0 AND *E 2.0 FOR DIAGRAMS- CALCULATIONS- SCHEDULE AND SPECIFICATION"}],
                "id": "generalElectrical"
            },
            "otherDesignLinks": {
                "statements": [{
                    "value": [{
                        "name": "AHJ/Template Edits",
                        "template": "link",
                        "value": "https://vivintsolar.my.salesforce.com/00O1M0000077Jjy?cancelURL=%2F00O1M0000077Jjy"
                    }]
                }], "id": "otherDesignLinks"
            },
            "otherFiles": {
                "name": "Other Files",
                "statements": [{"value": ["dataPage", "engUniracBuildOfMaterial", "engUniracEngineeringReport"]}],
                "id": "otherFiles",
                "source": {
                    "type": "ROC",
                    "name": "NY-01 Long Island West Solar",
                    "id": "bec754e9-0f19-42ff-a219-5bd6ee35ad75"
                }
            },
            "rocRequirements": {
                "name": "ROC Requirements",
                "statements": [{"value": "Interconnection: Federal Pacific, Auto ESC! - (10.3.17)\nInterconnection: Split Bus Panels, Auto ESC! - (10.3.17)"}],
                "id": "rocRequirements"
            },
            "solarRoofJackAllowed": {"statements": [{"value": true}], "id": "solarRoofJackAllowed"},
            "systemSizeRestraintsDC": {"statements": [{"value": {"min": 2}}], "id": "systemSizeRestraintsDC"}
        },
        "longitude": "-73.5517721",
        "searchNames": ["NY-01 Long Island West Solar"],
        "id": "bec754e9-0f19-42ff-a219-5bd6ee35ad75",
        "latitude": "40.7696052",
        "name": "NY-01 Long Island West Solar",
        "state": "New York",
        "type": "ROC"
    }
];

const stateDocuments = [
    {
        "searchNames": [
            "New York"
        ],
        "formattedAddress": "New York, NY, USA",
        "inherit": [
            {
                "source": {
                    "name": "2018 International Building Code",
                    "id": "a7979450-83fc-84b2-2e3f-afa0fc6a02d6",
                    "type": "International Building Code"
                }
            },
            {
                "source": {
                    "name": "2018 International Residential Code",
                    "id": "a507ee46-4486-e12d-5fac-86267f336084",
                    "type": "International Residential Code"
                }
            },
            {
                "source": {
                    "name": "2018 International Fire Code",
                    "id": "a824717b-a970-8431-13fa-e722a4680988",
                    "type": "International Fire Code"
                }
            },
            {
                "source": {
                    "name": "2017 National Electrical Code",
                    "id": "61424e3b-cbdb-c90f-2cc3-1b8f2324cedd",
                    "type": "National Electrical Code"
                }
            }
        ],
        "latitude": "40.7127753",
        "name": "New York",
        "rules": {
            "sitePlanLeaders": {
                "statements": [
                    {
                        "value": "ROOF ACCESS POINTS"
                    }
                ],
                "id": "sitePlanLeaders",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "pvSystemInformation": {
                "statements": [
                    {
                        "value": "SYSTEM SIZE - {systemSizeDc}kW DC | {systemSizeAc}kW AC\nMODULE TYPE & AMOUNT - ({totalModuleQuantity})\n{moduleManufacturer} {moduleModel}\nMODULE DIMENSIONS: (L/W/H) {moduleLength} / {moduleWidth} /{moduleHeight}\nINVERTER: ({totalInverterQuantity})\nENPHASE {inverterModel1}\nINTERCONNECTION METHOD (GRID-TIED):\n{interconnectionMethod}\n"
                    }
                ],
                "id": "pvSystemInformation"
            },
            "residentialCode": {
                "statements": [
                    {
                        "value": [
                            "2020ResidentialCodeOfNewYorkState"
                        ]
                    }
                ],
                "id": "residentialCode",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "roofAccessAdditionalRequirements": {
                "name": "Roof Access Additional Requirements",
                "statements": [
                    {
                        "value": "New York State requires that we show a min. of 2 Roof Access Points.  These must be clear of any ground/roof obstructions. A raised deck/patio is considered an obstruction.  The cardinal rule to consider is, \"Am I able to access all ridges via these Roof Access Points?\"  If not, you will need to adjust the location or add additional Roof Access Points. A step-up of more than 24\" from one roof section to another is considered inaccessible.  The positive to this rule is we do not need Fire Code on any section that does not contain a Roof Access Point if said roof could be accessed by that pathway.\nAll access point must have a pathway shown on the roof section leading to the ridge.\nCAD: If the Side/Hip fire code is waived due to the opposite/adjacent sections being accessible.  The designer MUST show at minimum 2 36\" pathways (in Orange) on said sections leading to the ridge. \nCAD: If the entire opposite/adjacent section is accessible, the designer may hatch the entire section orange to note that it is an accessible plane.***See Roof Access Point Requirements & All Fire Code Rules***"
                    }
                ],
                "id": "roofAccessAdditionalRequirements",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "snowLoad": {
                "statements": [
                    {
                        "value": 30
                    }
                ],
                "id": "snowLoad",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "structuralReviewRequired": {
                "statements": [
                    {
                        "value": true
                    }
                ],
                "id": "structuralReviewRequired",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "buildingCode": {
                "statements": [
                    {
                        "value": [
                            "2020BuildingCodeOfNewYorkState"
                        ]
                    }
                ],
                "id": "buildingCode",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "fireCodeSetbacks": {
                "name": "Fire Code Setbacks",
                "statements": [
                    {
                        "condition": [
                            {
                                "left": "roofPlaneTilt",
                                "right": 9.5,
                                "operator": "<"
                            }
                        ],
                        "description": "If the slope is <9.5°.",
                        "value": {
                            "side": 0,
                            "hip": 0
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "structureType",
                                "right": "nonHabitableStructure",
                                "operator": "="
                            }
                        ],
                        "description": "If the structure is non-habitable.",
                        "value": {
                            "side": 0,
                            "pathway": 0,
                            "valley": 0,
                            "ridge": 0,
                            "hip": 0
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "adjacentHipRoofPlanePercentOccupied",
                                "right": 0,
                                "operator": "!="
                            },
                            {
                                "left": "adjacentRidgeRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentHipRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            }
                        ],
                        "description": "If the adjacent section has New/Existing Modules & a roof access point(s).",
                        "value": {
                            "hip": 18
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "hipOnlyRoofPlane",
                                "right": true,
                                "operator": "="
                            },
                            {
                                "left": "adjacentHipRoofPlanePercentOccupied",
                                "right": 0,
                                "operator": ">"
                            },
                            {
                                "left": "adjacentRidgeRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentValleyRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentHipRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            }
                        ],
                        "description": "(Hip Roof) If a designed roof section has a roof access point & adjacent roof does not have modules.",
                        "value": {
                            "hip": 36
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "adjacentRidgeRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentHipRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentValleyRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "sideStepDownDistance",
                                "right": 24,
                                "operator": ">"
                            },
                            {
                                "left": "roofPlanePercentOccupied",
                                "right": 0,
                                "operator": ">"
                            }
                        ],
                        "description": "If the roof section contains a step-up/down >24\" and an adjacent roof section IS NOT accessible.",
                        "value": {
                            "side": 36
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "adjacentHipRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentRidgeRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            },
                            {
                                "left": "adjacentValleyRoofPlaneAccessible",
                                "right": false,
                                "operator": "="
                            }
                        ],
                        "description": "If adjoining section(s) are not accessible, 2 pathways are required; Cannot be directly opposite of another",
                        "value": {
                            "pathway": 36
                        }
                    },
                    {
                        "value": {
                            "valley": 18,
                            "ridge": 18
                        }
                    }
                ],
                "id": "fireCodeSetbacks",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "installersPacket": {
                "name": "Installers Packet",
                "statements": [
                    {
                        "condition": [
                            {
                                "left": "hasInternetAccess",
                                "right": false,
                                "operator": "="
                            }
                        ],
                        "description": "Before Cover Sheet: Cellular Kit Notice if not using Fronius & house lacks internet add Cell Kit to CAD Object",
                        "value": [
                            "cellularKitNotice"
                        ]
                    }
                ],
                "id": "installersPacket",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "maxMountSpacing": {
                "statements": [
                    {
                        "value": {
                            "portraitField": 48,
                            "landscapeEdge": 48,
                            "portraitEdge": 48,
                            "landscapeField": 48,
                            "landscape": 48
                        }
                    }
                ],
                "id": "maxMountSpacing",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "engineerSignature&Stamp": {
                "statements": [
                    {
                        "value": {
                            "structuralSignature": "digital",
                            "structuralStamp": "digital"
                        }
                    }
                ],
                "id": "engineerSignature&Stamp",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "roofAccessPoints": {
                "statements": [
                    {
                        "value": 2
                    },
                    {
                        "value": 4
                    },
                    {
                        "value": 6
                    }
                ],
                "id": "roofAccessPoints",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "dimensionsRequired": {
                "statements": [
                    {
                        "value": [
                            "newFireCode"
                        ]
                    }
                ],
                "id": "dimensionsRequired",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "otherDesignLinks": {
                "name": "Other Design Links",
                "statements": [
                    {
                        "value": [
                            {
                                "template": "link",
                                "name": "NYSUC Fire Code",
                                "value": "https://drive.google.com/file/d/0B3BU2VlKzO_XRnpPUEx3aG5obGs/view"
                            },
                            {
                                "template": "link",
                                "name": "Ubuilder",
                                "value": "https://design.unirac.com/login/"
                            }
                        ]
                    }
                ],
                "id": "otherDesignLinks",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "otherFiles": {
                "name": "Other Files",
                "statements": [
                    {
                        "condition": [
                            {
                                "left": "electricalMeterDistanceFromMSP",
                                "right": 10,
                                "operator": ">"
                            }
                        ],
                        "description": "Placard: Only when Solar Disconnect is 10'+ away from the Meter.",
                        "value": [
                            "placard"
                        ]
                    },
                    {
                        "value": [
                            "structuralLetter"
                        ]
                    }
                ],
                "id": "otherFiles",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "electricalRequirements": {
                "statements": [
                    {
                        "value": "Supply Taps on split bus panels are not allowed"
                    }
                ],
                "id": "electricalRequirements",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "isShelterInPlace": {
                "statements": [
                    {
                        "value": false
                    }
                ],
                "id": "isShelterInPlace",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "structuralStampLocation": {
                "statements": [
                    {
                        "value": [
                            "structuralLetter"
                        ]
                    }
                ],
                "id": "structuralStampLocation",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "systemSizeRestraintsDC": {
                "statements": [
                    {
                        "value": {
                            "min": 2.205
                        }
                    }
                ],
                "id": "systemSizeRestraintsDC",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "windSpeed": {
                "statements": [
                    {
                        "value": 130
                    }
                ],
                "id": "windSpeed",
                "source": {
                    "name": "New York",
                    "id": "35d713bf-389e-462e-8bf4-077df91f18da",
                    "type": "State"
                }
            },
            "fireCode": {
                "statements": [
                    {
                        "value": [
                            "2020FireCodeOfNewYorkState"
                        ]
                    }
                ],
                "id": "fireCode"
            }
        },
        "id": "35d713bf-389e-462e-8bf4-077df91f18da",
        "state": "New York",
        "type": "State",
        "longitude": "-74.0059728"
    },
    {"rules":{"buildingCode":{"statements":[{"value":["2018InternationalBuildingCode"]}],"id":"buildingCode"},"exposureCategory":{"statements":[{"value":"b"}],"id":"exposureCategory"},"installableRoofTilts":{"statements":[{"value":{"max":30,"min":2.4},"description":"If Roof Type = Metal: Curved or Trapezoidal","condition":[{"left":"roofType","operator":"=","right":"metalTrapezoidal"}]},{"value":{"max":30},"description":"If Roof Type = Metal: Standing Seam","condition":[{"left":"roofType","operator":"=","right":"metalStandingSeam"}]},{"value":{"min":9.5},"description":"If Roof Type = Tile","condition":[{"left":"roofType","operator":"=","right":"tile"}]},{"value":{"min":9.5},"description":"If Roof Type = Composite Shingle","condition":[{"left":"roofType","operator":"=","right":"compositeShingle"}]},{"value":{"min":1.2}}],"id":"installableRoofTilts"},"liveLoad":{"statements":[{"value":20}],"id":"liveLoad"},"roofSnowLoadReductionAllowed":{"statements":[{"value":"yes"}],"id":"roofSnowLoadReductionAllowed"},"windSpeed":{"statements":[{"value":107}],"id":"windSpeed"}},"longitude":95.7129,"searchNames":["2018 International Building Code"],"id":"a7979450-83fc-84b2-2e3f-afa0fc6a02d6","latitude":37.0902,"name":"2018 International Building Code","type":"International Building Code"},
    {"rules":{"egressPathway(S)":{"statements":[{"value":"flexible;ShortestPossible"}],"id":"egressPathway(S)"},"fireCodeSetbacks":{"statements":[{"value":{"egressPathway":0,"pathway":0,"valley":0,"ridge":0,"hip":0},"description":"If the structure is non-habitable","condition":[{"left":"structureType","operator":"=","right":"nonHabitableStructure"}]},{"value":{"pathway":0,"valley":0,"ridge":0,"hip":0},"description":"If the roof slope is <9.5°","condition":[{"left":"roofPlaneTilt","operator":"<","right":9.5}]},{"value":{"hip":18},"description":"If Primary/Secondary Pathways CANNOT apply & the adjacent section has New/Existing Modules","condition":[{"left":"adjacentHipRoofPlanePercentOccupied","operator":">","right":0},{"left":"adjacentHipRoofPlaneAccessible","operator":"=","right":false},{"left":"adjacentRidgeRoofPlaneAccessible","operator":"=","right":false},{"left":"adjacentValleyRoofPlaneAccessible","operator":"=","right":false}]},{"value":{"valley":18},"description":"If Primary/Secondary Pathways CANNOT apply & the adjacent section has New/Existing Modules","condition":[{"left":"adjacentValleyRoofPlanePercentOccupied","operator":">","right":0},{"left":"adjacentHipRoofPlaneAccessible","operator":"=","right":false},{"left":"adjacentRidgeRoofPlaneAccessible","operator":"=","right":false},{"left":"adjacentValleyRoofPlaneAccessible","operator":"=","right":false}]},{"value":{"ridge":36},"description":"If covering ≥33% of the home","condition":[{"left":"entireRoofPercentOccupied","operator":">=","right":33}]},{"value":{"ridge":18},"description":"If covering <66% of the home & Yes a Fire Sprinkler system IS installed.","condition":[{"left":"entireRoofPercentOccupied","operator":"<","right":66},{"left":"hasFireSprinklers","operator":"=","right":true}]},{"value":{"ridge":18,"egressPathway":36,"pathway":36}}],"id":"fireCodeSetbacks","source":{"type":"International Residential Code","name":"2018 International Residential Code","id":"a507ee46-4486-e12d-5fac-86267f336084"}},"primaryFireCodePathway":{"statements":[{"value":"A Single 36\" MUST be located either on the Front of the Home (in front of gate/fence, if applicable) or adjacent to a Driveway\nMUST run from lowest roof edge (usually the Eave) to Ridge free of obstructions where possible.\nPathway may be located either at the Side, Hip, or Valley.\nThis Pathway may double up as an adjacent roof section pathway."}]},"residentialCode":{"statements":[{"value":["2018InternationalResidentialCode"]}],"id":"residentialCode","source":{"type":"International Residential Code","name":"2018 International Residential Code","id":"a507ee46-4486-e12d-5fac-86267f336084"}},"secondaryFireCodePathway":{"statements":[{"value":"A Single 36\" MUST be located on a separate roof section from the Primary Pathway, where possible.\n(Same additional guidelines apply from the Primary Fire Code Pathway.)"}]}},"longitude":95.7129,"searchNames":["2018 International Residential Code"],"id":"a507ee46-4486-e12d-5fac-86267f336084","latitude":37.0902,"name":"2018 International Residential Code","type":"International Residential Code"},
    {"rules":{"egressPathway(S)":{"statements":[{"value":"flexible;ShortestPossible"}],"id":"egressPathway(S)"},"fireCode":{"statements":[{"value":["2018InternationalFireCode"]}],"id":"fireCode"},"fireCodeSetbacks":{"statements":[{"value":{"egressPathway":0,"pathway":0,"valley":0,"ridge":0,"hip":0},"description":"If the structure is non-habitable","condition":[{"left":"structureType","operator":"=","right":"nonHabitableStructure"}]},{"value":{"pathway":0,"valley":0,"ridge":0,"hip":0},"description":"If the roof slope is <9.5°","condition":[{"left":"roofPlaneTilt","operator":"<","right":9.5}]},{"value":{"hip":18},"description":"If Primary/Secondary Pathways CANNOT apply & the adjacent section has New/Existing Modules","condition":[{"left":"adjacentHipRoofPlanePercentOccupied","operator":">","right":0},{"left":"adjacentHipRoofPlaneAccessible","operator":"=","right":false},{"left":"adjacentRidgeRoofPlaneAccessible","operator":"=","right":false},{"left":"adjacentValleyRoofPlaneAccessible","operator":"=","right":false}]},{"value":{"valley":18},"description":"If Primary/Secondary Pathways CANNOT apply & the adjacent section has New/Existing Modules","condition":[{"left":"adjacentValleyRoofPlanePercentOccupied","operator":">","right":0},{"left":"adjacentHipRoofPlaneAccessible","operator":"=","right":false},{"left":"adjacentRidgeRoofPlaneAccessible","operator":"=","right":false},{"left":"adjacentValleyRoofPlaneAccessible","operator":"=","right":false}]},{"value":{"ridge":36},"description":"If covering ≥33% of the home","condition":[{"left":"entireRoofPercentOccupied","operator":">=","right":33}]},{"value":{"ridge":18},"description":"If covering <66% of the home & Yes a Fire Sprinkler system IS installed.","condition":[{"left":"entireRoofPercentOccupied","operator":"<","right":66},{"left":"hasFireSprinklers","operator":"=","right":true}]},{"value":{"ridge":18,"egressPathway":36,"pathway":36}}],"id":"fireCodeSetbacks","source":{"type":"International Fire Code","name":"2018 International Fire Code","id":"a824717b-a970-8431-13fa-e722a4680988"}},"primaryFireCodePathway":{"statements":[{"value":"A Single 36\" MUST be located either on the Front of the Home (in front of gate/fence, if applicable) or adjacent to a Driveway\nMUST run from lowest roof edge (usually the Eave) to Ridge free of obstructions where possible.\nPathway may be located either at the Side, Hip, or Valley.\nThis Pathway may double up as an adjacent roof section pathway."}],"id":"primaryFireCodePathway"},"secondaryFireCodePathway":{"statements":[{"value":"A Single 36\" MUST be located on a separate roof section from the Primary Pathway, where possible.\n(Same additional guidelines apply from the Primary Fire Code Pathway.)"}],"id":"secondaryFireCodePathway"},"sitePlanAhjNotes":{"statements":[{"value":"ROOF FIRE SUPPRESSION SPRINKLER SYSTEM: {hasFireSprinklers}\nTOTAL ROOF AREA: {totalRoofArea}\nTOTAL MODULE AREA: {totalArrayArea}\nTOTAL AREA COVERED: {entireRoofPercentOccupied}\n"}],"id":"sitePlanAhjNotes","source":{"type":"International Fire Code","name":"2018 International Fire Code","id":"a824717b-a970-8431-13fa-e722a4680988"}}},"longitude":95.7129,"searchNames":["2018 International Fire Code"],"id":"a824717b-a970-8431-13fa-e722a4680988","latitude":37.0902,"name":"2018 International Fire Code","type":"International Fire Code"},
    {"rules":{"690.8(B)Implementation":{"statements":[{"value":"fullImplementation"}],"id":"690.8(B)Implementation"},"allows240.4(B)":{"statements":[{"value":true}],"id":"allows240.4(B)"},"centerFedRuleRequired":{"statements":[{"value":false}],"id":"centerFedRuleRequired"},"electricalCode":{"statements":[{"value":["2017NationalElectricalCode"]}],"id":"electricalCode"}},"longitude":95.7129,"searchNames":["2017 National Electrical Code"],"id":"61424e3b-cbdb-c90f-2cc3-1b8f2324cedd","latitude":37.0902,"name":"2017 National Electrical Code","type":"National Electrical Code"}
];

const utilityDocuments = [
    {
        "searchNames": [
            "PGE SoCal"
        ],
        "city": "South of Market",
        "latitude": "37.7916858",
        "county": "San Francisco County",
        "rules": {},
        "office": "CA-02 San Diego North,CA-06 Apple Valley,CA-08 Inland Empire,CA-09 Thousand Oaks,CA-10 Orange County,CA-12 East LA,CA-13 Temecula,CA-15 Palm Springs",
        "type": "Utility",
        "formattedAddress": "Pacific Gas & Electric Building, 77 Beale St, San Francisco, CA 94105, USA",
        "inherit": [
            {
                "source": {
                    "name": "PGE",
                    "id": "4eb622c2-584b-483e-a731-143131420b12",
                    "type": "Utility"
                }
            }
        ],
        "name": "PGE SoCal",
        "id": "76974416-088c-418d-b49b-6b8f54ddb35f",
        "state": "California",
        "longitude": "-122.3956663"
    },
    {"office":"CA-01 Concord,CA-03 Fresno,CA-04 Bakersfield,CA-07 South Bay,CA-11 Chico,CA-16 Sacramento,CA-18 Stockton,CA-20 Visalia,CA-30 Diablo Valley","rules":{"batteryQuantityRange":{"statements":[{"value":{"max":4,"min":1},"description":"1-4, If designed with at least 2 inverters. (Cash)","condition":[{"left":"contractType","operator":"=","right":"cash"},{"left":"systemSizeAc","operator":">","right":7.6}]},{"value":{"max":2,"min":1},"description":"1-2, If designed with 1 inverter (Cash)","condition":[{"left":"contractType","operator":"=","right":"cash"},{"left":"systemSizeAc","operator":"<=","right":7.6}]},{"value":{"max":4,"min":1},"description":"1-4, If designed with at least 2 inverters. (Loan)","condition":[{"left":"contractType","operator":"=","right":"loan"},{"left":"systemSizeAc","operator":">","right":7.6}]},{"value":{"max":2,"min":1},"description":"1-2, If designed with 1 inverter (Loan)","condition":[{"left":"contractType","operator":"=","right":"loan"},{"left":"systemSizeAc","operator":"<=","right":7.6}]},{"value":{"max":2,"min":1},"description":"1-2, If the System Size is ≥6kW DC. (PPA)","condition":[{"left":"systemSizeDc","operator":">=","right":6},{"left":"contractType","operator":"=","right":"ppa"}]},{"value":{"max":2,"min":1},"description":"1-2, If the System Size is ≥6kW DC. (Lease)","condition":[{"left":"systemSizeDc","operator":">=","right":6},{"left":"contractType","operator":"=","right":"lease"}]},{"value":{"max":1,"min":1}}]},"utilityRequirements":{"name":"Utility Requirements","statements":[{"value":"VSLR Add-on:  Reference the previous system's \"Utility PTO Letter\".  Match all equipment model numbers based on this letter exactly. If the PTO letter has a generic \"2x\" inverter, then dwg and 1-line must also have \"2x\"--they must match exactly. This may require manual editing of the 1-line docs. Likewise, AC disconnect must match PTO letter exactly.\nUnderground ESC: if the electrical panel is underground fed, then the panel cannot be up-sized. The upgrade needs to be a like-for-like panel which means the bus rating needs to stay the same for the upgrade.\nConduit may not be run within 36\" of the gas meter."}],"id":"utilityRequirements","source":{"type":"Utility","name":"PGE","id":"4eb622c2-584b-483e-a731-143131420b12"}},"allowableInterconnectionTypes":{"statements":[{"value":["supplyBreaker","loadBreaker","protectedLoadSideTap"]}],"id":"allowableInterconnectionTypes","source":{"type":"Utility","name":"PGE","id":"4eb622c2-584b-483e-a731-143131420b12"}},"enforceNumberOfBatteries":{"statements":[{"value":true,"description":"If contract type is Cash","condition":[{"left":"contractType","operator":"=","right":"cash"}]},{"value":true,"description":"If contract type is Loan","condition":[{"left":"contractType","operator":"=","right":"loan"}]},{"value":false}]},"sunHourMinimums":{"statements":[{"value":{"system":600},"description":"If the contract type is Loan","condition":[{"left":"contractType","operator":"=","right":"loan"}]},{"value":{"system":600},"description":"If the contract type is Cash","condition":[{"left":"contractType","operator":"=","right":"cash"}]},{"value":{"system":1000},"description":"If the contract is PPA + Battery","condition":[{"left":"batteriesDesigned","operator":">","right":0},{"left":"contractType","operator":"=","right":"ppa"}]},{"value":{"system":1000},"description":"If the contract is Lease + Battery","condition":[{"left":"batteriesDesigned","operator":">","right":0},{"left":"contractType","operator":"=","right":"lease"}]},{"value":{"system":800}}],"id":"sunHourMinimums","source":{"type":"Utility","name":"PGE","id":"4eb622c2-584b-483e-a731-143131420b12"}},"usageCalculationOffset":{"statements":[{"value":{"monthly":999},"description":"No Max, If System Size is <30kW AC & Design Director Approves.","condition":[{"left":"systemSizeAc","operator":"<","right":30},{"left":"directorApprovalRequired","operator":"=","right":true}]},{"value":{"monthly":110},"description":"110%, If System Size meets/exceeds 30kW AC.","condition":[{"left":"systemSizeAc","operator":">=","right":30}]},{"value":{"monthly":125}}],"id":"usageCalculationOffset","source":{"type":"Utility","name":"PGE","id":"4eb622c2-584b-483e-a731-143131420b12"}},"usageAggregationAllowed":{"statements":[{"value":true}]},"batteryAvailable":{"statements":[{"value":false,"description":"A battery is *NOT* allowed for Zero-Lease","condition":[{"left":"contractType","operator":"=","right":"zeroLease"}]},{"value":true}],"id":"batteryAvailable","source":{"type":"Utility","name":"PGE","id":"4eb622c2-584b-483e-a731-143131420b12"}},"systemSizeRestraintsAC":{"statements":[{"value":{"max":1000}}],"id":"systemSizeRestraintsAC"},"batteryRequired":{"statements":[{"value":false}],"id":"batteryRequired"},"generalElectrical":{"statements":[{"value":"1. ALL WIRING MUST BE PROPERLY SUPPORTED BY DEVICES OR MECHANICAL MEANS DESIGNED AND LISTED FOR SUCH USE.  FOR ROOF-MOUNTED SYSTEMS- WIRING MUST BE PERMANENTLY AND COMPLETELY HELD OFF OF THE ROOF SURFACE. \n2. ANY CODE VIOLATIONS EVIDENT IN THE INTERCONNECTION PANEL WILL BE CORRECTED ON INSTALLATION. \n3. SYSTEM SHALL BE INSTALLED IN ACCORDANCE WITH ALL RELEVANT COD\n4. RAPID SHUTDOWN COMMENCES UPON MANIPULATION OF LOCAL OR REMOTE INVERTER DISCONNECT SWITCH. \n5. SEE *E 1.0 AND *E 2.0 FOR DIAGRAMS- CALCULATIONS- SCHEDULE AND SPECIFICATIONS. \n6. 480.6(A): BATTERY DISCONNECT MEANS CONTAINED ON BATTERY UNIT \n7. 480.7(D): BATTERY UNIT CONSTRUCTED OF NONCONDUCTIVE- HEAT-RESISTANT MATERIAL.  NO ADDITIONAL INSULATION REQUIRED. \n8. 480.9(A): VENTILATION. BATTERY TECHNOLOGY DOES NOT EMIT GASES.  ADDITIONAL MECHANICAL VENTILATION NOT REQUIRED.\n","description":"Different Notes if designed with batteries.","condition":[{"left":"batteriesDesigned","operator":">=","right":1}]},{"value":"1. ALL WIRING MUST BE PROPERLY SUPPORTED BY DEVICES OR MECHANICAL MEANS DESIGNED AND LISTED FOR SUCH USE.  FOR ROOF-MOUNTED SYSTEMS- WIRING MUST BE PERMANENTLY AND COMPLETELY HELD OFF OF THE ROOF SURFACE. \n2. ANY CODE VIOLATIONS EVIDENT IN THE INTERCONNECTION PANEL WILL BE CORRECTED ON INSTALLATION. \n3. SYSTEM SHALL BE INSTALLED IN ACCORDANCE WITH ALL RELEVANT CODE\n4. RAPID SHUTDOWN INITIATION TAKES PLACE WITHIN THE FIRMWARE OF THE INVERTER.  RAPID SHUTDOWN COMMENCES UPON LOSS OF UTILITY SOURCE VOLTAGE. \n5. SEE *E 1.0 AND *E 2.0 FOR DIAGRAMS- CALCULATIONS- SCHEDULE AND SPECIFICATIONS\n"}],"id":"generalElectrical"},"numberOfBatteries":{"statements":[{"value":2,"description":"2, If production is >8500kWh & PPA Rate = $.22 - $.23","condition":[{"left":"systemProductionEstimate","operator":">","right":8500},{"left":"contractType","operator":"=","right":"ppa"}]},{"value":2,"description":"2, If production is >8500kWh & Lease Rate = $.21 - $.22","condition":[{"left":"systemProductionEstimate","operator":">","right":8500},{"left":"contractType","operator":"=","right":"lease"}]},{"value":2,"description":"2, If the Contract Type is Cash","condition":[{"left":"contractType","operator":"=","right":"cash"},{"left":"systemProductionEstimate","operator":">=","right":7000},{"left":"systemProductionEstimate","operator":"<=","right":14000}]},{"value":3,"description":"3, If the Contract Type is Cash - Requires 2 StorEdge 7.6 inverters","condition":[{"left":"contractType","operator":"=","right":"cash"},{"left":"systemProductionEstimate","operator":">=","right":14000},{"left":"systemProductionEstimate","operator":"<=","right":27000}]},{"value":4,"description":"4, If the Contract Type is Cash - Requires 2 StorEdge 7.6 inverters","condition":[{"left":"contractType","operator":"=","right":"cash"},{"left":"systemProductionEstimate","operator":">","right":17000}]},{"value":2,"description":"2, If the Contract Type is Loan","condition":[{"left":"contractType","operator":"=","right":"loan"},{"left":"systemProductionEstimate","operator":">=","right":7000},{"left":"systemProductionEstimate","operator":"<=","right":14000}]},{"value":3,"description":"3, If the Contract Type is Loan - Requires 2 StorEdge 7.6 inverters","condition":[{"left":"contractType","operator":"=","right":"loan"},{"left":"systemProductionEstimate","operator":">=","right":14000},{"left":"systemProductionEstimate","operator":"<=","right":27000}]},{"value":4,"description":"4, If the Contract Type is Loan - Requires 2 StorEdge 7.6 inverters","condition":[{"left":"contractType","operator":"=","right":"loan"},{"left":"systemProductionEstimate","operator":">=","right":17000}]}],"id":"numberOfBatteries","source":{"type":"Utility","name":"PGE","id":"4eb622c2-584b-483e-a731-143131420b12"}},"addonsAllowed":{"statements":[{"value":true}]},"hbInsPacket":{"statements":[{"value":["eeDiagram&SitePlanWithDimensions","eeNotes"]}],"id":"hbInsPacket"},"systemSizeRestraintsDC":{"statements":[{"value":{"min":3.5},"description":"If the Contract Type is PPA + 1 Battery","condition":[{"left":"batteriesDesigned","operator":">=","right":1},{"left":"contractType","operator":"=","right":"ppa"}]},{"value":{"min":6},"description":"If the Contract Type is PPA + 2 Batteries","condition":[{"left":"batteriesDesigned","operator":">=","right":2},{"left":"contractType","operator":"=","right":"ppa"}]},{"value":{"min":3.5},"description":"If the Contract Type is Lease + 1 Battery","condition":[{"left":"batteriesDesigned","operator":">=","right":1},{"left":"contractType","operator":"=","right":"lease"}]},{"value":{"min":6},"description":"If the Contract Type is Lease + 2 Batteries","condition":[{"left":"batteriesDesigned","operator":">=","right":2},{"left":"contractType","operator":"=","right":"lease"}]}],"id":"systemSizeRestraintsDC","source":{"type":"Utility","name":"PGE","id":"4eb622c2-584b-483e-a731-143131420b12"}}},"longitude":"-119.4179324","alternativeNames":["Pacific Gas and Electric Company","PGE"],"searchNames":["PGE"],"id":"4eb622c2-584b-483e-a731-143131420b12","latitude":"36.778261","name":"PGE","state":"California","type":"Utility"}
];

const defaultDocument = {
    "searchNames": ["Default"],
    "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2",
    "rules": {
        "centerFedRuleRequired": {
            "name": "Center-Fed Rule Required",
            "statements": [{"value": false}],
            "id": "centerFedRuleRequired"
        },
        "permitZipFiles": {"statements": [{"value": ["dwgFile", "electricalDiagram", "ahjFilesSnips"]}]},
        "pageSize": {"statements": [{"value": "11x17"}], "id": "pageSize"},
        "netMeteringDisclaimerDay": {"statements": [{"value": "During the day, you produce more than you consume. The extra power your solar energy system generates is sent to the utility where it can be used by others. The utility compensates you for that energy with a credit against your future bills."}]},
        "woodGrade&SpeciesAssumption": {"statements": [{"value": true}], "id": "woodGrade&SpeciesAssumption"},
        "inverterReplacement": {"statements": [{"value": {"year": 15, "cost": 750}}]},
        "batteryAvailable": {"statements": [{"value": false}], "id": "batteryAvailable"},
        "liveLoad": {"statements": [{"value": 20}], "id": "liveLoad"},
        "buydownAppliedPercentDefault": {"statements": [{"value": 100}]},
        "stateTaxCreditsDollars": {"statements": [{"value": 0}]},
        "solsticeApproved": {"statements": [{"value": true}], "id": "solsticeApproved"},
        "showConduitOnTheSitePlan": {"statements": [{"value": true}], "id": "showConduitOnTheSitePlan"},
        "acSystemSizeCalcParameter": {"statements": [{"value": "nominal"}], "id": "acSystemSizeCalcParameter"},
        "hbMasterPacket": {
            "statements": [{"value": ["pvCover", "pvLayouts", "pvElectrical", "pvStructural", "pvCutsheets", "pvCutsheetsCont."]}],
            "id": "hbMasterPacket"
        },
        "isShelterInPlace": {"statements": [{"value": false}], "id": "isShelterInPlace"},
        "degradationPercentYear": {"statements": [{"value": 0.5}]},
        "hbElectricalStampRequired": {
            "statements": [{"value": "digitalStamp&Sign"}],
            "id": "hbElectricalStampRequired"
        },
        "specSheetPacket": {"statements": [{"value": ["standard"]}], "id": "specSheetPacket"},
        "srecKeepSellDefault": {"statements": [{"value": ["keep"]}]},
        "sunHourMinimums": {
            "name": "Sun Hour Minimums",
            "statements": [{"value": {"system": 600}}],
            "id": "sunHourMinimums",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "upfrontSrecPriceDollarsWatt": {"statements": [{"value": 0}]},
        "autocadTemplate": {
            "name": "Autocad Template",
            "statements": [{"value": "11x17 VSLR CLA TESTING"}],
            "id": "autocadTemplate",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "additionalOopContributionMonth": {"statements": [{"value": 18}]},
        "maxMountSpacing": {
            "statements": [{
                "description": "If the Roof Type is Trapezoidal/Corrugated Metal",
                "value": {
                    "landscapeEdge": 24,
                    "landscapeField": 24,
                    "portraitField": 24,
                    "portraitEdge": 24,
                    "portrait": 27,
                    "landscape": 27
                },
                "condition": [{"left": "roofType", "operator": "=", "right": "metalTrapezoidal"}]
            }, {
                "description": "If the Roof Type is Standing Seam Metal",
                "value": {
                    "landscapeEdge": 27,
                    "landscapeField": 27,
                    "portraitField": 27,
                    "portraitEdge": 27,
                    "portrait": 27,
                    "landscape": 27
                },
                "condition": [{"left": "roofType", "operator": "=", "right": "metalStandingSeam"}]
            }, {"value": {"portrait": 48, "portraitField": 48, "landscape": 72}}],
            "id": "maxMountSpacing",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "upfrontIncentiveDollars/Watt": {"statements": [{"value": 0}]},
        "cadPacket": {
            "statements": [{"value": ["coverSheet", "sitePlan", "mountDetail", "eeDiagram", "eeNotes", "warningLabels"]}],
            "id": "cadPacket",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "netMeteringDisclaimerNight": {"statements": [{"value": "At night, you use more power than your system generates. When you are not producing, your home uses power from your utility. The credit you've accumulated during the day offsets the power you use at night."}]},
        "savingsDiscountRatePercent": {"statements": [{"value": 0}]},
        "renewalRatePercent": {"statements": [{"value": 90}]},
        "installableRoofTilts": {
            "statements": [{
                "description": "If Roof Type is Rolled Composite",
                "value": {"min": 1.2},
                "condition": [{"left": "roofType", "operator": "=", "right": "rolledComp"}]
            }, {
                "description": "If Roof Type is Metal Standing Seam",
                "value": {"max": 30, "min": 1.2},
                "condition": [{"left": "roofType", "operator": "=", "right": "metalStandingSeam"}]
            }, {
                "description": "If Roof Type is Metal Trapezoidal or Corrugated",
                "value": {"max": 30, "min": 2.4},
                "condition": [{"left": "roofType", "operator": "=", "right": "metalTrapezoidal"}]
            }, {
                "description": "If Roof Type is Foam",
                "value": {"min": 1.2},
                "condition": [{"left": "roofType", "operator": "=", "right": "foam"}]
            }, {
                "description": "If Roof Type is Rubber",
                "value": {"min": 1.2},
                "condition": [{"left": "roofType", "operator": "=", "right": "rubber"}]
            }, {
                "description": "If Roof Type is EPDM",
                "value": {"min": 1.2},
                "condition": [{"left": "roofType", "operator": "=", "right": "epdm"}]
            }, {
                "description": "If Roof Type is TPO",
                "value": {"min": 1.2},
                "condition": [{"left": "roofType", "operator": "=", "right": "tpo"}]
            }, {
                "description": "If Roof Type is Silicone",
                "value": {"min": 1.2},
                "condition": [{"left": "roofType", "operator": "=", "right": "silicone"}]
            }, {"value": {"max": 45, "min": 9.5}}],
            "id": "installableRoofTilts",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "communicationDeviceRequired": {
            "statements": [{
                "description": "Cellular Kit is required if the home has no internet access.",
                "value": "cellularKit",
                "condition": [{"left": "hasInternetAccess", "operator": "=", "right": false}]
            }, {"value": "notRequired"}], "id": "communicationDeviceRequired"
        },
        "hbInsPageSize": {"statements": [{"value": "11X17"}], "id": "hbInsPageSize"},
        "loadCalculationRequired": {
            "statements": [{
                "description": "Yes, If a Derate is required.",
                "value": true,
                "condition": [{"left": "derateRequired", "operator": "=", "right": true}]
            }, {"value": false}],
            "id": "loadCalculationRequired",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "stateTaxCreditsRealizationMonth": {"statements": [{"value": 18}]},
        "additionalOopContributionDollarsDefault": {"statements": [{"value": 0}]},
        "electricalRequirements": {
            "statements": [{"value": "If we are doing an ESC on the account, then the electrical photos are not needed.\nUnlabeled sticker-less panels with a 175A Main, assume 200A Bus.\nFederal Pacific or Pushmatics/Bulldog panels that require an Electrical Engineering Stamp will need an ESC.\n300A & 400A panels require Live Electrical Support in order to complete the Electrical Diagram.\nSite Plan: If the Electrical Diagram prints more than one AC Disconnect, and we are interconnecting via interior supply tap, place the second AC Disconnect on the interior of the home.\nSite Plan: If the electrical diagram shows a sub-panel it must also be shown on the site plan and system legend."}],
            "id": "electricalRequirements",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "rocRequirements": {
            "name": "ROC Requirements",
            "statements": [{"value": "Use the \"Pre-Existing\" modules in cobblestone rather than the Polygon tool.\nIf Knob and Tube wiring is used in the home place the account as Pending Cancellation and create an Exception Hold with a note requesting for the OM to confirm the status of the knob and tube wiring"}],
            "id": "rocRequirements",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "allowableModules": {
            "statements": [{
                "value": {
                    "CATALOG_NAME": ["VS MPH Design Catalog"],
                    "_type": "contain",
                    "CATEGORY": ["ITC 30", "ITC 26"]
                },
                "condition": [{
                    "left": "contractType",
                    "operator": "=",
                    "right": "lease"
                }, {"left": "isMilitaryPrivateHousing", "operator": "=", "right": true}],
                "onConflict": "filter"
            }, {
                "value": {
                    "CATALOG_NAME": ["VS MPH Design Catalog"],
                    "_type": "contain",
                    "CATEGORY": ["ITC 30", "ITC 26"]
                },
                "condition": [{
                    "left": "contractType",
                    "operator": "=",
                    "right": "zeroLease"
                }, {"left": "isMilitaryPrivateHousing", "operator": "=", "right": true}],
                "onConflict": "filter"
            }, {
                "value": {
                    "CATALOG_NAME": ["VS MPH Design Catalog"],
                    "_type": "contain",
                    "CATEGORY": ["ITC 30", "ITC 26"]
                },
                "condition": [{
                    "left": "contractType",
                    "operator": "=",
                    "right": "ppa"
                }, {"left": "isMilitaryPrivateHousing", "operator": "=", "right": true}],
                "onConflict": "filter"
            }, {
                "value": {"CATALOG_NAME": ["VS MPH Design Catalog"], "_type": "contain", "CATEGORY": ["Cash_Loan"]},
                "condition": [{
                    "left": "contractType",
                    "operator": "=",
                    "right": "loan"
                }, {"left": "isMilitaryPrivateHousing", "operator": "=", "right": true}],
                "onConflict": "filter"
            }, {
                "value": {"CATALOG_NAME": ["VS MPH Design Catalog"], "_type": "contain", "CATEGORY": ["Cash_Loan"]},
                "condition": [{
                    "left": "contractType",
                    "operator": "=",
                    "right": "cash"
                }, {"left": "isMilitaryPrivateHousing", "operator": "=", "right": true}],
                "onConflict": "filter"
            }, {
                "value": {"CATALOG_NAME": ["VS MPH Design Catalog"], "_type": "contain", "CATEGORY": ["Cash_Loan"]},
                "condition": [{
                    "left": "contractType",
                    "operator": "=",
                    "right": "cash"
                }, {"left": "isMilitaryPrivateHousing", "operator": "=", "right": true}],
                "onConflict": "filter"
            }, {
                "value": {
                    "CATALOG_NAME": ["VS Design Catalog"],
                    "_type": "contain",
                    "CATEGORY": ["ITC 30", "ITC 26"]
                },
                "condition": [{"left": "contractType", "operator": "=", "right": "lease"}],
                "onConflict": "filter"
            }, {
                "value": {
                    "CATALOG_NAME": ["VS Design Catalog"],
                    "_type": "contain",
                    "CATEGORY": ["ITC 30", "ITC 26"]
                },
                "condition": [{"left": "contractType", "operator": "=", "right": "zeroLease"}],
                "onConflict": "filter"
            }, {
                "value": {
                    "CATALOG_NAME": ["VS Design Catalog"],
                    "_type": "contain",
                    "CATEGORY": ["ITC 30", "ITC 26"]
                }, "condition": [{"left": "contractType", "operator": "=", "right": "ppa"}], "onConflict": "filter"
            }, {
                "value": {"CATALOG_NAME": ["VS Design Catalog"], "_type": "contain", "CATEGORY": ["Cash_Loan"]},
                "condition": [{"left": "contractType", "operator": "=", "right": "loan"}],
                "onConflict": "filter"
            }, {
                "value": {"CATALOG_NAME": ["VS Design Catalog"], "_type": "contain", "CATEGORY": ["Cash_Loan"]},
                "condition": [{"left": "contractType", "operator": "=", "right": "cash"}],
                "onConflict": "filter"
            }, {
                "value": {"CATALOG_NAME": ["VS Design Catalog"], "_type": "contain", "CATEGORY": ["Cash_Loan"]},
                "condition": [{"left": "contractType", "operator": "=", "right": "cash"}],
                "onConflict": "filter"
            }, {
                "value": {"CATALOG_NAME": ["VS MPH Design Catalog"], "_type": "contain"},
                "condition": [{"left": "isMilitaryPrivateHousing", "operator": "=", "right": true}],
                "onConflict": "filter"
            }, {"value": {"CATALOG_NAME": ["VS Design Catalog"], "_type": "contain"}, "onConflict": "filter"}],
            "id": "allowableModules"
        },
        "availablePpaLeaseOptions": {
            "statements": [{
                "value": [{
                    "name": null,
                    "template": "62456a43-e2cd-5c9a-e916-a8b2f455e339",
                    "value": {"contractType": "ppa", "escalator": 2.9, "termYears": 20}
                }, {
                    "name": null,
                    "template": "62456a43-e2cd-5c9a-e916-a8b2f455e339",
                    "value": {"contractType": "lease", "escalator": 0, "termYears": 20}
                }, {
                    "name": null,
                    "template": "62456a43-e2cd-5c9a-e916-a8b2f455e339",
                    "value": {"contractType": "lease", "escalator": 2.9, "termYears": 20}
                }, {
                    "name": null,
                    "template": "62456a43-e2cd-5c9a-e916-a8b2f455e339",
                    "value": {"contractType": "ppa", "escalator": 2.9, "termYears": 25}
                }]
            }]
        },
        "isAcSystemSizeRequiredOnWelcomePacket": {"statements": [{"value": false}]},
        "applyStateTaxCreditsDefault": {"statements": [{"value": ["no"]}]},
        "federalTaxCreditsRealizationMonth": {"statements": [{"value": 18}]},
        "srecPricingMwh": {
            "statements": [{
                "value": [{
                    "name": null,
                    "template": "90a02446-d340-5e87-538e-bc721a0c0f2b",
                    "value": 1
                }, {"name": null, "template": "90a02446-d340-5e87-538e-bc721a0c0f2b", "value": 2}]
            }]
        },
        "hbInsDimensionsRequired": {
            "statements": [{"value": ["arrayDistanceToEave", "arrayDistanceToSide", "arrayLength", "arrayToArray", "arrayWidth"]}],
            "id": "hbInsDimensionsRequired"
        },
        "usageCalculationOffset": {
            "name": "Usage Calculation Offset",
            "statements": [{"value": {"monthly": 100}}],
            "id": "usageCalculationOffset"
        },
        "buydownRequirementPercent": {
            "statements": [{"value": 26}],
            "id": "buydownRequirementPercent",
            "source": {"type": "Nation", "name": "Default", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "hbAvailableMountingSystem": {
            "statements": [{
                "description": "EcoFasten(Rock-It & SimpleGrip), If roof slope is <9.5°.",
                "value": ["ecofasten(Rock-It&Simplegrip)"],
                "condition": [{"left": "roofPlaneTilt", "operator": "<", "right": 9.5}]
            }, {
                "description": "QRail(QBase), If roof material is Tile.",
                "value": ["qrail(Qbase)"],
                "condition": [{"left": "roofType", "operator": "=", "right": "tile"}]
            }, {"value": ["ecofasten(Rock-It)"]}], "id": "hbAvailableMountingSystem"
        },
        "hbStructuralStampRequired": {
            "statements": [{"value": "digitalStamp&Sign"}],
            "id": "hbStructuralStampRequired"
        },
        "installersPacket": {
            "name": "Installers Packet",
            "statements": [{
                "description": "Before Cover Sheet: Add-on Notice: If an Add-on system is being installed.",
                "value": ["addOnNotice"],
                "condition": [{"left": "systemType", "operator": "=", "right": "addOn"}]
            }, {"value": ["cadPacket"]}],
            "id": "installersPacket",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "generalStructural": {
            "statements": [{"value": "4. ROOF LIVE LOAD = {liveLoad} psf TYPICAL- 0 psf UNDER NEW PV SYSTEM.\n5. GROUND SNOW LOAD = {snowLoad} psf\n6. WIND SPEED = {windSpeed} mph\n7. EXPOSURE CATEGORY = {exposureCategory}"}, {
                "value": "1. THE SOLAR PANELS ARE TO BE MOUNTED TO THE ROOF FRAMING USING THE ROCK-IT SYSTEM BY ECOFASTEN.  THE MOUNTING FEET ARE TO BE SPACED AS SHOWN IN THE DETAILS- AND MUST BE STAGGERED TO ADJACENT FRAMING MEMBERS TO SPREAD OUT THE ADDITIONAL LOAD. \n2. UNLESS NOTED OTHERWISE- MOUNTING ANCHORS SHALL BE 5/16\" LAG SCREWS WITH A MINIMUM OF 2 1/2\" PENETRATION INTO ROOF FRAMING.\n3. THE PROPOSED PV SYSTEM ADDS 3.0 psf TO THE ROOF FRAMING SYSTEM.",
                "condition": [{"left": "mountingSystemType", "operator": "=", "right": "ecoFastenRockIt"}]
            }, {
                "value": "1. THE SOLAR PANELS ARE TO BE MOUNTED TO THE ROOF FRAMING USING THE CLICKFIT SYSTEM BY ECOFASTEN.  THE MOUNTING FEET ARE TO BE SPACED AS SHOWN IN THE DETAILS- AND MUST BE STAGGERED TO ADJACENT FRAMING MEMBERS TO SPREAD OUT THE ADDITIONAL LOAD. \n2. UNLESS NOTED OTHERWISE- MOUNTING ANCHORS SHALL BE 5/16\" LAG SCREWS WITH A MINIMUM OF 2 1/2\" PENETRATION INTO ROOF FRAMING.\n3. THE PROPOSED PV SYSTEM ADDS 3.0 psf TO THE ROOF FRAMING SYSTEM.",
                "condition": [{"left": "mountingSystemType", "operator": "=", "right": "ecofasten(Clickfit)"}]
            }, {
                "value": "1. \tTHE SOLAR PANELS ARE TO BE MOUNTED TO THE ROOF FRAMING USING THE SFM SYSTEM BY UNIRAC.  THE MOUNTING FEET ARE TO BE SPACED AS SHOWN IN THE DETAILS- AND MUST BE STAGGERED TO ADJACENT FRAMING MEMBERS TO SPREAD OUT THE ADDITIONAL LOAD.\t\n2. UNLESS NOTED OTHERWISE- MOUNTING ANCHORS SHALL BE 5/16\" LAG SCREWS WITH A MINIMUM OF 2 1/2\" PENETRATION INTO ROOF FRAMING.\n3. THE PROPOSED PV SYSTEM ADDS 3.0 psf TO THE ROOF FRAMING SYSTEM.",
                "condition": [{"left": "mountingSystemType", "operator": "=", "right": "uniracSFM"}]
            }, {
                "value": "1. THE SOLAR PANELS ARE TO BE MOUNTED TO THE ROOF FRAMING USING THE DOUBLE-RAILED SYSTEM BY MSI.  THE MOUNTING FEET ARE TO BE SPACED AS SHOWN IN THE DETAILS- AND MUST BE STAGGERED TO ADJACENT FRAMING MEMBERS TO SPREAD OUT THE ADDITIONAL LOAD. \n2. UNLESS NOTED OTHERWISE- MOUNTING ANCHORS SHALL BE 5/16\" LAG SCREWS WITH A MINIMUM OF 2 1/2\" PENETRATION INTO ROOF FRAMING.\n3. THE PRORPOSED PV SYSTEM ADDS 3.0 psf TO THE ROOF FRAMING SYSTEM.",
                "condition": [{"left": "mountingSystemType", "operator": "=", "right": "msi"}]
            }],
            "id": "generalStructural",
            "source": {"type": "Nation", "name": "Default", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "federalTaxCreditPercent": {"statements": [{"value": 26}]},
        "specSheetPageSize": {"statements": [{"value": "8.5x11"}], "id": "specSheetPageSize"},
        "proposalZipFiles": {
            "name": "Proposal Zip Files",
            "statements": [{"value": ["usageForcaster", "dwg", "dpfPhotos", "electricalPhotos", "utilityPhotos"]}],
            "id": "proposalZipFiles"
        },
        "batteryRequired": {"statements": [{"value": false}], "id": "batteryRequired"},
        "generalElectrical": {
            "statements": [{"value": "1. ALL WIRING MUST BE PROPERLY SUPPORTED BY DEVICES OR MECHANICAL MEANS DESIGNED AND LISTED FOR SUCH USE.  FOR ROOF-MOUNTED SYSTEMS- WIRING MUST BE PERMANENTLY AND COMPLETELY HELD OFF OF THE ROOF SURFACE. \n2. ANY CODE VIOLATIONS EVIDENT IN THE INTERCONNECTION PANEL WILL BE CORRECTED ON INSTALLATION. \n3. SYSTEM SHALL BE INSTALLED IN ACCORDANCE WITH ALL RELEVANT CODE\n4. RAPID SHUTDOWN INITIATION TAKES PLACE WITHIN THE FIRMWARE OF THE INVERTER.  RAPID SHUTDOWN COMMENCES UPON LOSS OF UTILITY SOURCE VOLTAGE. \n5. SEE *E 1.0 AND *E 2.0 FOR DIAGRAMS- CALCULATIONS- SCHEDULE AND SPECIFICATIONS\n"}],
            "id": "generalElectrical",
            "source": {"type": "Nation", "name": "Default", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "hbPageSize": {"statements": [{"value": "24X36"}], "id": "hbPageSize"},
        "utilityEscalatorPercent": {
            "statements": [{"value": {"max": 5, "default": 3, "min": 1}}],
            "id": "utilityEscalatorPercent",
            "source": {"type": "Nation", "name": "Default", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "addonsAllowed": {"statements": [{"value": true}]},
        "additionalSystemCostsDollarsDefault": {"statements": [{"value": 0}]},
        "systemLifeYears": {"statements": [{"value": 30}]},
        "usageEstimationAllowed": {"statements": [{"value": true}], "id": "usageEstimationAllowed"},
        "specSheetSigned&Stamped": {"statements": [{"value": "no"}], "id": "specSheetSigned&Stamped"},
        "pvSystemInformation": {
            "statements": [{
                "value": "SYSTEM SIZE - {systemSizeDc}kW DC | {systemSizeAc}kW AC\nMODULE TYPE & AMOUNT - ({totalModuleQuantity}) {moduleManufacturer} {moduleModel} WITH SOLAREDGE P340 OPTIMIZERS\nMODULE DIMENSIONS: (L/W/H) {moduleLength} / {moduleWidth} / {moduleHeight}\nINVERTER - ({totalInverterQuantity}) SOLAREDGE TECHNOLOGIES {inverterModel1} AND {inverterModel2}\nINTERCONNECTION METHOD (GRID-TIED): {interconnectionMethod}",
                "condition": [{"left": "totalInverterQuantity", "operator": "=", "right": 2}]
            }, {
                "value": "SYSTEM SIZE - {systemSizeDc}kW DC | {systemSizeAc}kW AC\nMODULE TYPE & AMOUNT - ({totalModuleQuantity}) {moduleManufacturer} {moduleModel} WITH SOLAREDGE P340 OPTIMIZERS\nMODULE DIMENSIONS: (L/W/H) {moduleLength} / {moduleWidth} / {moduleHeight} \nINVERTER - ({totalInverterQuantity}) SOLAREDGE TECHNOLOGIES {inverterModel1}, {inverterModel2} AND {inverterModel3}\nINTERCONNECTION METHOD (GRID-TIED): {interconnectionMethod}",
                "condition": [{"left": "totalInverterQuantity", "operator": "=", "right": 3}]
            }, {"value": "SYSTEM SIZE - {systemSizeDc}kW DC | {systemSizeAc}kW AC\nMODULE TYPE & AMOUNT - ({totalModuleQuantity}) {moduleManufacturer} {moduleModel} WITH SOLAREDGE P340 OPTIMIZERS\nMODULE DIMENSIONS: (L/W/H) {moduleLength} / {moduleWidth} /{moduleHeight}\nINVERTER: ({totalInverterQuantity}) SOLAREDGE TECHNOLOGIES {inverterModel1}\nINTERCONNECTION METHOD (GRID-TIED): {interconnectionMethod}\n"}],
            "id": "pvSystemInformation",
            "source": {"type": "Nation", "name": "Default", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "allowableInverters": {
            "statements": [{
                "value": {
                    "CATALOG_NAME": ["VS MPH Design Catalog"],
                    "_type": "contain"
                },
                "condition": [{"left": "isMilitaryPrivateHousing", "operator": "=", "right": true}],
                "onConflict": "filter"
            }, {"value": {"CATALOG_NAME": ["VS Design Catalog"], "_type": "contain"}, "onConflict": "filter"}],
            "id": "allowableInverters"
        },
        "defPointSetbacks": {
            "name": "Def-Point Setbacks",
            "statements": [{
                "description": "If roof type is Tile.",
                "value": {
                    "side": 12,
                    "valley": 12,
                    "eave": 18,
                    "sidesAgainstWalls": 12,
                    "obstructions": 12,
                    "hip": 12
                },
                "condition": [{"left": "roofType", "operator": "=", "right": "tile"}]
            }, {
                "description": "If the structure is a Prefab.",
                "value": {"eave": 36},
                "condition": [{"left": "structureType", "operator": "=", "right": "prefabHome"}]
            }, {
                "value": {
                    "serviceLine": 36,
                    "side": 8,
                    "chimney": 6,
                    "newSolarArray": 4,
                    "eave": 8,
                    "obstructions": 3,
                    "mechanicalUnits": 36,
                    "skyLights": 18,
                    "hip": 8,
                    "existingSolarArray": 4,
                    "sidesAgainstWalls": 8,
                    "valley": 8,
                    "ridge": 18,
                    "inflection": 8
                }
            }],
            "id": "defPointSetbacks",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "rafterSize&SpacingAssumption": {"statements": [{"value": true}], "id": "rafterSize&SpacingAssumption"},
        "roofSnowLoadReductionAllowed": {"statements": [{"value": "yes"}], "id": "roofSnowLoadReductionAllowed"},
        "availableLoanOptions": {
            "statements": [{
                "value": [{
                    "name": null,
                    "template": "7ca81a8e-701f-dbec-38c6-1a62bce24a4e",
                    "value": {"interestRate": 3.99, "termYears": 20}
                }, {
                    "name": null,
                    "template": "7ca81a8e-701f-dbec-38c6-1a62bce24a4e",
                    "value": {"interestRate": 2.99, "termYears": 10}
                }]
            }]
        },
        "electricalServiceChangeAllowed": {"statements": [{"value": true}]},
        "hbPermitSubmissionMethod": {"statements": [{"value": ["master"]}], "id": "hbPermitSubmissionMethod"},
        "conduitRunLocation": {
            "statements": [{
                "description": "Rooftop, If Roof slope is <9.5°, OR if the attic is not accessible.",
                "value": "rooftop",
                "condition": [{"left": "roofPlaneTilt", "operator": "<", "right": 9.5}]
            }, {"value": "attic"}],
            "id": "conduitRunLocation",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "installableRoofTypes": {
            "name": "Installable Roof Types",
            "statements": [{"value": ["compositeShingle", "tile", "rolledComp", "compShingleOverWoodShake", "foam", "silicone", "rubber", "epdm", "tpo", "metalStandingSeam", "metalTrapezoidal", "tarGravel"]}],
            "id": "installableRoofTypes",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "otherDesignLinks": {
            "name": "Other Design Links",
            "statements": [{
                "value": [{
                    "name": "BTC: The Flow Checklist",
                    "template": "link",
                    "value": "https://docs.google.com/presentation/d/1QYvkQj8p5hXDnz9HhHBkznL0PuP97DjmazXvnH4XWw8/edit#slide=id.g3c8c2e5f82_0_0"
                }, {
                    "name": "Vivint Solar Templates",
                    "template": "link",
                    "value": "https://drive.google.com/open?id=1smlEFw-cGPC1Wlx1gi6QM35UCIINe3yo"
                }, {
                    "name": "Electrical Tools",
                    "template": "link",
                    "value": "https://drive.google.com/drive/folders/0AHDhDCJucFcVUk9PVA"
                }, {
                    "name": "Cellular Kit Notice (If needed)",
                    "template": "link",
                    "value": "https://drive.google.com/open?id=0B3BU2VlKzO_XbWNReVgyZ0pZdDQ"
                }, {
                    "name": "Add-On Notice (Add-ons ONLY)",
                    "template": "link",
                    "value": "https://drive.google.com/open?id=0B97N5u5F8fZnYkxMdXA3NGhxRkE"
                }, {
                    "name": "Inverter Cheat Sheets",
                    "template": "link",
                    "value": "https://drive.google.com/drive/folders/0B08apUqm_eqQcDNoLTZKb1EtZmc"
                }, {
                    "name": "SOURCE: Load Calc",
                    "template": "link",
                    "value": "https://sites.google.com/a/vivintsolar.com/the-source/shared-training/permit-training/200-electrical-review/electrical-review---introduction-to-de-rating-load-calcs-escs/electrical-review---load-calculations"
                }]
            }],
            "id": "otherDesignLinks",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "allowableModuleOrientaion": {
            "statements": [{"value": "portraitOrLandscape"}],
            "id": "allowableModuleOrientaion",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "deratesAllowed": {"statements": [{"value": true}]},
        "higherBusAssumptionOnStickerlessAllowed": {
            "name": "Accepts 125A on Stickerless",
            "statements": [{"value": "no"}],
            "id": "higherBusAssumptionOnStickerlessAllowed",
            "source": {"name": "Default", "type": "Nation", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "hbInsPacket": {"statements": [{"value": ["eeDiagram&SitePlanWithDimensions"]}], "id": "hbInsPacket"},
        "shouldScaleUsage": {
            "statements": [{"value": true}],
            "id": "shouldScaleUsage",
            "source": {"type": "Nation", "name": "Default", "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2"}
        },
        "buydownMonth": {"statements": [{"value": 18}]}
    },
    "name": "Default",
    "type": "Nation"
};


module.exports = [
    ...townshipDocuments,
    ...cityDocuments,
    ...countyDocuments,
    ...rocDocuments,
    ...stateDocuments,
    ...utilityDocuments,
    defaultDocument
];
