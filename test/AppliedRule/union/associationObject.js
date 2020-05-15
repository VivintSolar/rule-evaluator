module.exports = {
    "ahj": {
        "rules": {
            "permitOfficeRequirements": {
                "name": "Permit Office Requirements",
                "statements": [
                    {
                        "value": "DWG Properties: Change \"CANTILEVER\" to \"12\" instead of \"L/3\" DWG Properties: Change \"MaxSpacing\" to be \"48\"",
                        "onConflict": "union",
                        "source": {
                            "id": "29691c3d-df4f-49e6-9b42-c3b933a293f4",
                            "name": "Prince George's County",
                            "type": "County"
                        }
                    },
                    {
                        "value": "Default to attic runs, unless not possible. Be sure that the attic runs are shown on the site plan and the 1-line. (Custom 1-line needed if 2017 NEC)",
                        "onConflict": "union",
                        "source": {
                            "id": "94348f35-8978-4e0f-8fa0-63a2a2c432b8",
                            "name": "MD-01 DC North Solar",
                            "type": "ROC"
                        }
                    },
                    {
                        "value": "Site Plan: Check O-page for HOA, If HOA is Tide Water add the property line. Conduit attic runs on special request only. Requires an EE support.",
                        "onConflict": "union",
                        "source": {
                            "id": "718a6340-a7b0-408e-a5a9-12b946a7f84b",
                            "name": "Maryland",
                            "type": "State"
                        }
                    }
                ],
                "id": "permitOfficeRequirements",
                "source": {
                    "id": "29691c3d-df4f-49e6-9b42-c3b933a293f4",
                    "name": "Prince George's County",
                    "type": "County"
                },
                "timeStamp": "2019-05-20T18:36:18.031Z"
            }
        }
    },
    "definitions": {
        "rules": {
            "permitOfficeRequirements":{
                "allowableConditions": "none",
                "description": "Permit Office Requirements",
                "id": "permitOfficeRequirements",
                "name": "Permit Office Requirements",
                "rule": true,
                "tags": [
                    "design",
                    "permitDesignRuleGroup",
                    "permitDesignView",
                    "proposalView",
                    "electricalView",
                    "structuralView",
                    "surveyor",
                    "permitRole"
                ],
                "template": {
                    "dataType": "string",
                    "onConflict": "union"
                }
            }
        },
        "conditions": {}
    }
};