const statement = 'Hello All!';

function setTimeoutAndLog(input) {
    return new Promise((resolve, result) => {
        setTimeout(function(){
            resolve(input);
        }, 1000);
    })
}

setTimeoutAndLog(statement).then((result) => {
    console.log('Promise result: ' + result);
})