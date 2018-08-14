

// execute

const operators = new Map();
operators.set("+", {
    precedence: 1,
    arity: 2,
    associativity: "left",
    fn: ( left, right ) => left + right,
});

operators.set("-", {
    precedence: 1,
    arity: 2,
    associativity: "left",
    fn: ( left, right ) => left - right,
});

operators.set("*", {
    precedence: 2,
    arity: 2,
    associativity: "left",
    fn: ( left, right ) => left * right,
});

operators.set("/", {
    precedence: 2,
    arity: 2,
    associativity: "left",
    fn: ( left, right ) => left / right,
});

function strToToken(token) {
    if(operators.has(token))
        return { type: "op", value: token };

    const nval = parseFloat(token);
    if(!isNaN(nval))
        return { type: "number", value: nval };

    return { type: "name", value: token };
}

function * tokenize(str) {
    let token = ""
    for(let index = 0; index < str.length; index++){
        const char = str[index];
        switch(char){
        case " ":
            if(token !== "")
                yield strToToken(token);
            token = ""; 
            break;
        case "(":
            if(token !== "")
                yield strToToken(token);
            yield { type: "paren", value: "(" };
            token = "";
            break;
        case ")":
            if(token !== "")
                yield strToToken(token);
            yield { type: "paren", value: ")" };
            token = "";
            break;
        default:
            token += char;
            break;
        }
    }

    if(token !== "")
        yield strToToken(token);
}

function * parseToRPN(tokens, implicitMultiply){
    const stack = [];

    let expect = "value";

    const handle_op = function * (token){

        const { precedence: tok_p } = operators.get(token.value);

        while(true){
            // while ((the operator at the top of the operator stack has equal precedence and is left associative))
            //        or (there is an operator at the top of the operator stack with greater precedence))
            //       and (the operator at the top of the operator stack is not a left bracket):
            const top = stack[stack.length-1];
            if(top && top.value !== "("){
                const { precedence: top_p, associativity: top_a } = operators.get(top.value);
                if(top_p > tok_p || (top_p === tok_p && top_a === "left")){ 
                    //pop operators from the operator stack onto the output queue.
                    yield stack.pop();
                    continue;
                }
            }
            break;
        }

        stack.push(token); // push it onto the operator stack.
    };

    for(const token of tokens){ // while there are tokens to be read, read a token.
        if(token.type === "number" || token.type === "name") { //if the token is a number, then:
            if(expect !== "value"){
                if(implicitMultiply) yield * handle_op({type: "op", name: "*"});
                else throw new Error("Missing Operator");
            }
            yield token; //push it to the output queue.
            expect = "op";
        } else if(token.type === "op"){ //if the token is an operator, then:
            if(expect !== "op") throw new Error("Missing Value");
            yield * handle_op(token);
            expect = "value";
        } else if(token.value === "(") { // if the token is a left bracket (i.e. "("), then:
            if(expect !== "value"){
                if(implicitMultiply) yield * handle_op({type: "op", name: "*"});
                else throw new Error("Missing Operator");
            }
            stack.push(token); // push it onto the operator stack.
        } else if(token.value === ")") { // if the token is a right bracket (i.e. ")"), then:
            if(expect !== "op") throw new Error("Missing Value");
            match_parens: if(stack.length){
                while(stack[stack.length-1].value !== "(") { // while the operator at the top of the operator stack is not a left bracket:
                    yield stack.pop(); // pop the operator from the operator stack onto the output queue.
                    if(stack.length === 0) break match_parens;
                }

                stack.pop(); // pop the left bracket from the stack.
                continue;
            }
            /* if the stack runs out without finding a left bracket, then there are mismatched parentheses. */
            throw new Error("Mismatched Parentheses");
        }
    }

    //if there are no more tokens to read:
    while(stack.length){ // while there are still operator tokens on the stack:
        const token = stack.pop();
        if(token.type === "paren"){ /* if the operator token on the top of the stack is a bracket, then there are mismatched parentheses. */
            throw new Error("Mismatched Parentheses");
        }
        
        yield token;
    }
}

function tokToNum(token, logError){
    if(token.type === "name"){
        const element = token.value;
        if( appliedConditions && appliedConditions[element] !== void 0 &&
            conditions && conditions[element] !== void 0){
            return conditions[element]
        } else {
            const error = `Required Parameter Missing ${appliedConditions[element].name}`;
            logError( error );
            return NaN;
        }
    } else { // literal number
        return token.value;
    }
}

function evaluateRPNStack(q, logError){
    const vstack = [];
    for(const token of q){
        if(token.type === "op"){
            const opInfo = operators.get(token.value);
            if(vstack.length < opInfo.arity){
                logError("Missing Values");
                return NaN;
            }
            const right = tokToNum(vstack.pop(), logError);
            const left = tokToNum(vstack.pop(), logError);
            vstack.push({ type: "number", value: opInfo.fn(left, right) });
        } else {
            vstack.push(token);
        }
    }

    if(vstack.length === 0){
        logError("Empty Formula");
        return NaN;
    }

    if(vstack.length > 1){
        logError("Missing Operators");
        return NaN;
    }

    return vstack[0].value;
}

function execute(formula, implicitMultiply, logError){
    if(formula.trim() === ""){
        logError("Empty Formula");
        return NaN;
    }

    try{
        const tokens = tokenize(formula);
        const q = parseToRPN(tokens, implicitMultiply);
        return evaluateRPNStack(q, logError);
    }catch(e){
        logError(e.message);
        return NaN;
    }
}

module.exports = (function( formula, conds, params ){
    const appliedConditions = this.appliedConditions || conds;
    const conditions = this.conditions || params;
    let errors = []

    const addToErrors = ( message ) => {
        if( !errors.includes( message ) ){
            errors.push( message );
        }
    };

    const result = execute(formula, false, addToErrors); // no implicit multiplication
    
    if( errors ){
        if( this.addError ) errors.map( error => {
            this.addError( error );
        });
        return formula;
    }

    return result;
});