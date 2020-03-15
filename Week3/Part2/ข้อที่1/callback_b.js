setTimeout(function(){
    console.log('a');
    setTimeout(function(){
        console.log('b');
    }, 1000);
}, 1000);