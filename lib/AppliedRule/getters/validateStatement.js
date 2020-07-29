
// validateStatement
module.exports = (function( statement ){
    return statement.value !== undefined && statement.value !== null;
});
