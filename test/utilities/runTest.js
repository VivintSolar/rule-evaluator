


module.exports = testPath => {
    const path = require('path')
    testPath = path.resolve( testPath )
    const getErrorMessage = error => (`
        Error while executing test file! 
        \n\t path: ${ testPath }
        \n\t message: ${ error.message }
        
    `);
    try{
        require( testPath )();
    }catch( error ){
        console.log(getErrorMessage( error ))
    }
}
