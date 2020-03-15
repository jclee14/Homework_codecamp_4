setTimeout(function(){
    console.log('a');
    setTimeout(function(){
        console.log('b');
        setTimeout(function(){
            console.log('c');
        }, 1000);
    }, 1000);
}, 1000);