function setTimeoutAndLog(input) {
    return new Promise((resolve, result) => {
        setTimeout(function(){
            resolve(input);
        }, 1000);
    })
}

setTimeoutAndLog('a').then((result) => {
    console.log(result);
    return setTimeoutAndLog('b');
}).then((result) => {
    console.log(result);
    return setTimeoutAndLog('c');
}).then((result) => {
    console.log(result);
    return setTimeoutAndLog('d');
}).then((result) => {
    console.log(result);
})