// write below code for global scope
let glogalScopeVar = 10
function someFunctionGlobalScope() {
    console.log(glogalScopeVar)
}

someFunctionGlobalScope()

// write below code for function scope
function someFunctionFunctionScope() {
    let functonScopeVar = 4
    console.log(functonScopeVar)
}

someFunctionFunctionScope()

try {
    console.log(functonScopeVar)
} catch {
    console.log('Error, because this variable exists only in function body, and global scope can\'t see it')
}


// write below code for block scope

function someFunctionBlockScope() {
    {
        // if you define function with LET you get error, but if you use VAR, you wont.
        // VAR can be seen by scopes that below initial scope, but only for blocks not fucntions
        var functonBlockVar = 10
    }
    console.log(functonBlockVar)
}

try {
    console.log(functonBlockVar)
} catch {
    console.log('Error, because this variable exists only in function body, and global scope can\'t see it')
}

someFunctionBlockScope()