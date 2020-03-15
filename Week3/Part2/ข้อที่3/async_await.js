function setTimeoutAndLog(input) {
    return new Promise((resolve, result) => {
        setTimeout(function(){
            resolve(input);
        }, 1000);
    })
}

async function logAlphabet() {
    let result;
    result = await setTimeoutAndLog('a');
    console.log(result);
    result = await setTimeoutAndLog('b');
    console.log(result);
    result = await setTimeoutAndLog('c');
    console.log(result);
    result = await setTimeoutAndLog('d');
    console.log(result);
}

logAlphabet();