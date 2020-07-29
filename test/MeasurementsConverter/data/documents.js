

const defaultDocument = {
    "searchNames": ["Default"],
    "id": "9a9e8ccd-44a3-40dc-8376-2c76411284a2",
    "rules": {
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
        }
    },
    "name": "Default",
    "type": "Nation"
};

const defPointSetbacks = {
    "allowableConditions": [
        "structureType",
        "roofType"
    ],
    "description": "Def-Points/Safety Buffer for Roof Offsets and Obstructions",
    "id": "defPointSetbacks",
    "name": "Def-Point Setbacks",
    "rule": true,
    "tags": [
        "roofRequirementsRuleGroup",
        "permitDesignView",
        "proposalView",
        "surveyor"
    ],
    "template": {
        "dataType": "object",
        "item": {
            "chimney": {
                "dataType": "number",
                "displayUnitsAs": "in",
                "name": "Chimney",
                "range": {
                    "max": "100",
                    "min": null
                },
                "units": "m"
            },
            "eave": {
                "dataType": "number",
                "name": "Eave",
                "onConflict": "standard",
                "range": {
                    "max": 100,
                    "min": 0
                },
                "units": "in"
            },
            "existingSolarArray": {
                "dataType": "number",
                "name": "Existing Solar Array",
                "units": "in"
            },
            "hip": {
                "dataType": "number",
                "name": "Hip",
                "onConflict": "standard",
                "range": {
                    "max": 100,
                    "min": 0
                },
                "units": "in"
            },
            "inflection": {
                "dataType": "number",
                "displayUnitsAs": "in",
                "name": "Inflection",
                "range": {
                    "max": "100",
                    "min": null
                },
                "units": "m"
            },
            "mechanicalUnits": {
                "dataType": "number",
                "name": "Mechanical Units",
                "onConflict": "standard",
                "range": {
                    "max": 100,
                    "min": 0
                },
                "units": "in"
            },
            "newSolarArray": {
                "dataType": "number",
                "name": "New Solar Array",
                "units": "in"
            },
            "obstructions": {
                "dataType": "number",
                "name": "Obstructions",
                "onConflict": "standard",
                "range": {
                    "max": 100,
                    "min": 0
                },
                "units": "in"
            },
            "ridge": {
                "dataType": "number",
                "name": "Ridge",
                "onConflict": "standard",
                "range": {
                    "max": 100,
                    "min": 0
                },
                "units": "in"
            },
            "satelliteDish": {
                "dataType": "number",
                "displayUnitsAs": "in",
                "name": "Satellite Dish",
                "range": {
                    "max": "100",
                    "min": null
                },
                "units": "m"
            },
            "serviceLine": {
                "dataType": "number",
                "name": "Service Line",
                "onConflict": "standard",
                "range": {
                    "max": 100,
                    "min": 0
                },
                "units": "in"
            },
            "side": {
                "dataType": "number",
                "name": "Side",
                "onConflict": "standard",
                "range": {
                    "max": 100,
                    "min": 0
                },
                "units": "in"
            },
            "sidesAgainstWalls": {
                "dataType": "number",
                "name": "Sides Against Walls",
                "onConflict": "standard",
                "range": {
                    "max": 100,
                    "min": 0
                },
                "units": "in"
            },
            "skyLights": {
                "dataType": "number",
                "name": "Sky Lights",
                "onConflict": "standard",
                "range": {
                    "max": 100,
                    "min": 0
                },
                "units": "in"
            },
            "valley": {
                "dataType": "number",
                "name": "Valley",
                "onConflict": "standard",
                "range": {
                    "max": 100,
                    "min": 0
                },
                "units": "in"
            },
            "vent": {
                "dataType": "number",
                "displayUnitsAs": "in",
                "name": "Vent",
                "range": {
                    "max": "100",
                    "min": null
                },
                "units": "m"
            }
        },
        "onConflict": "union"
    }
};

const roofType = {
    "applyTo": [ "defPointSetbacks" ],
    "condition": true,
    "description": "List of commonly installed roof types",
    "id": "roofType",
    "name": "Roof Type",
    "tags": [
        "roof requirements",
    ],
    "template": {
        "dataType": "enum",
        "items": [
            {
                "id": "tile",
                "name": "Tile"
            },
            {
                "id": "tarGravel",
                "name": "Tar & Gravel"
            },
            {
                "id": "silicone",
                "name": "Silicone"
            },
            {
                "id": "foam",
                "name": "Foam"
            },
            {
                "id": "rubber",
                "name": "Rubber"
            },
            {
                "id": "epdm",
                "name": "EPDM"
            },
            {
                "id": "tpo",
                "name": "TPO"
            },
            {
                "id": "membrane",
                "name": "Membrane"
            },
            {
                "id": "metalStandingSeam",
                "name": "Metal Standing Seam"
            },
            {
                "id": "metalTrapezoidal",
                "name": "Metal Trapezoidal"
            },
            {
                "id": "rolledComp",
                "name": "Roll Comp"
            },
            {
                "id": "compositeShingle",
                "name": "Composite Shingle"
            },
            {
                "id": "rolledAsphalt",
                "name": "Rolled Asphalt"
            },
            {
                "id": "stoneCoatedSteel",
                "name": "Stone Coated Steel"
            },
            {
                "id": "compShingleOverWoodShake",
                "name": "Comp Shingle over Wood Shake"
            },
            {
                "id": "pvc",
                "name": "PVC"
            },
            {
                "id": "metalCorrugated",
                "name": "Metal Corrugated"
            }
        ]
    }
};

const structureType = {
    "applyTo": [
        "defPointSetbacks",
    ],
    "condition": true,
    "description": "List of Commonly Installed Structure Types",
    "id": "structureType",
    "name": "Structure Type",
    "tags": [
        "roofRequirementsRuleGroup"
    ],
    "template": {
        "dataType": "enum",
        "items": [
            {
                "id": "townHouse",
                "name": "Town House"
            },
            {
                "id": "prefabHome",
                "name": "Prefab Home"
            },
            {
                "id": "nonHabitableStructure",
                "name": "Non-Habitable Structure"
            },
            {
                "id": "duplex",
                "name": "Duplex"
            },
            {
                "id": "singleFamilyDwelling",
                "name": "Single Family Dwelling"
            },
            {
                "id": "two-FamilyDwelling",
                "name": "Two-Family Dwelling"
            },
            {
                "id": "multi-FamilyDwelling",
                "name": "Multi-Family Dwelling"
            },
            {
                "id": "mobileHome",
                "name": "Mobile Home"
            },
            {
                "id": "prefab/ManufacturedHome",
                "name": "Prefab/Manufactured Home"
            },
            {
                "id": "non-Residential",
                "name": "Non-Residential"
            },
            {
                "id": "post&PierHome",
                "name": "Post & Pier Home"
            }
        ]
    }
}


module.exports = {
    defaultDocument,
    defPointSetbacks,
    roofType,
    structureType
};
