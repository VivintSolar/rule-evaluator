const RuleEvaluator = require('../../../../index');
const assert = require('assert');
const associationObject = require('./associationObject');

const expectedEmptySnowLoadTest = JSON.stringify({
    "ruleId": "generalStructural",
    "conditions": {
        "mountingSystemType": "ecoFastenRockIt"
    },
    "appliedConditions": [
        "mountingSystemType",
        "snowLoad"
    ],
    "evaluated": {
        "templateString": "1. THE SOLAR PANELS ARE TO BE MOUNTED TO THE ROOF FRAMING USING THE ROCK-IT SYSTEM BY ECOFASTEN. THE MOUNTING FEET ARE TO BE SPACED AS SHOWN IN THE DETAILS- AND MUST BE STAGGERED TO ADJACENT FRAMING MEMBERS TO SPREAD OUT THE ADDITIONAL LOAD. 2. UNLESS NOTED OTHERWISE- MOUNTING ANCHORS SHALL BE 5/16\" LAG SCREWS WITH A MINIMUM OF 2 1/2\" PENETRATION INTO ROOF FRAMING. 3. THE PORPOSED PV SYSTEM ADDS 3.0 psf TO THE ROOF FRAMING SYSTEM.\n4. ROOF LIVE LOAD = [LiveLoad] psf TYPICAL- 0 psf UNDER NEW PV SYSTEM. 5. GROUND SNOW LOAD = {snowLoad} psf 6. WIND SPEED = [WindSpeed] mph 7. EXPOSURE CATEGORY = [ExposureCategory]",
        "exceptions": null,
        "conditions": null,
        "value": null,
        "errors": [
            "Required Condition Parameter Input Missing; Snow Load"
        ],
        "id": "generalStructural"
    }
});

const expectedSnowLoadTest = JSON.stringify({
    ruleId: 'generalStructural',
    conditions: { mountingSystemType: 'ecoFastenRockIt', snowLoad: 50 },
    appliedConditions: [ 'mountingSystemType', 'snowLoad' ],
    evaluated: {
        templateString: '1. THE SOLAR PANELS ARE TO BE MOUNTED TO THE ROOF FRAMING USING THE ROCK-IT SYSTEM BY ECOFASTEN. THE MOUNTING FEET ARE TO BE SPACED AS SHOWN IN THE DETAILS- AND MUST BE STAGGERED TO ADJACENT FRAMING MEMBERS TO SPREAD OUT THE ADDITIONAL LOAD. 2. UNLESS NOTED OTHERWISE- MOUNTING ANCHORS SHALL BE 5/16" LAG SCREWS WITH A MINIMUM OF 2 1/2" PENETRATION INTO ROOF FRAMING. 3. THE PORPOSED PV SYSTEM ADDS 3.0 psf TO THE ROOF FRAMING SYSTEM.\n4. ROOF LIVE LOAD = [LiveLoad] psf TYPICAL- 0 psf UNDER NEW PV SYSTEM. 5. GROUND SNOW LOAD = {snowLoad} psf 6. WIND SPEED = [WindSpeed] mph 7. EXPOSURE CATEGORY = [ExposureCategory]',
        exceptions: null,
        conditions: null,
        value: '1. THE SOLAR PANELS ARE TO BE MOUNTED TO THE ROOF FRAMING USING THE ROCK-IT SYSTEM BY ECOFASTEN. THE MOUNTING FEET ARE TO BE SPACED AS SHOWN IN THE DETAILS- AND MUST BE STAGGERED TO ADJACENT FRAMING MEMBERS TO SPREAD OUT THE ADDITIONAL LOAD. 2. UNLESS NOTED OTHERWISE- MOUNTING ANCHORS SHALL BE 5/16" LAG SCREWS WITH A MINIMUM OF 2 1/2" PENETRATION INTO ROOF FRAMING. 3. THE PORPOSED PV SYSTEM ADDS 3.0 psf TO THE ROOF FRAMING SYSTEM.\n4. ROOF LIVE LOAD = [LiveLoad] psf TYPICAL- 0 psf UNDER NEW PV SYSTEM. 5. GROUND SNOW LOAD = 50 psf 6. WIND SPEED = [WindSpeed] mph 7. EXPOSURE CATEGORY = [ExposureCategory]',
        errors: null,
        id: 'generalStructural'
    }
});

const emptySnowLoadTest = () => {
    const ruleEvaluator = new RuleEvaluator( associationObject );
    const conditions = { mountingSystemType: 'ecoFastenRockIt' };
    const ruleId = 'generalStructural';
    const generalStructuralResults = { ruleId, conditions };
    generalStructuralResults.appliedConditions = ruleEvaluator.getAppliedConditions( generalStructuralResults.ruleId );
    generalStructuralResults.evaluated = ruleEvaluator.evaluate( generalStructuralResults.ruleId, conditions );
    assert.equal( expectedEmptySnowLoadTest, JSON.stringify(generalStructuralResults) );
    console.log('AppliedRules -- Template Strings -- GeneralStructural -- emptySnowLoadTest ---> Success!!!!!!!!!');
};

const snowLoadTest = () => {
    const ruleEvaluator = new RuleEvaluator( associationObject );
    const conditions = { mountingSystemType: 'ecoFastenRockIt', snowLoad: 50 };
    const ruleId = 'generalStructural';
    const generalStructuralResults = { ruleId, conditions };
    generalStructuralResults.appliedConditions = ruleEvaluator.getAppliedConditions( generalStructuralResults.ruleId );
    generalStructuralResults.evaluated = ruleEvaluator.evaluate( generalStructuralResults.ruleId, conditions );
    assert.equal( expectedSnowLoadTest, JSON.stringify(generalStructuralResults) );
    console.log('AppliedRules -- Template Strings -- GeneralStructural -- snowLoadTest ---> Success!!!!!!!!!');
};


module.exports = () => {
    emptySnowLoadTest();
    snowLoadTest();
};
