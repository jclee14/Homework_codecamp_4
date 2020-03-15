setTimeout(function(){
    console.log('a');
    setTimeout(function(){
        console.log('b');
        setTimeout(function(){
            console.log('c');
            setTimeout(function(){
                console.log('d');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);