/* Demonstration of Callback Hell */
let sqr = function(n, sqr){
    if(sqr)
        sqr()
    let res = n**2
    setTimeout(()=>{
        if(res<100)
            return res
        else
            return new Error(res)
    },1000)
}

sqr(13,()=>{
    sqr(4,()=>{
        sqr(3,()=>{
            sqr(2,()=>{
                sqr(1,()=>{
                    sqr(12)
                })
            })
        })
    })
})

// //* Promises
function promiseSqr(a){
    return new Promise((resolve, reject)=>{
        let res = a**2
        console.log(res);
        if(res<100)
            resolve();
        else
            reject(res);
    })
}
promiseSqr(2).then(()=>{
    promiseSqr(3).then(()=>{
        promiseSqr(4).then(()=>{
            promiseSqr(5).catch((err) =>{
                console.log(new Error(err))
            })
        }).catch((err) =>{
            console.log(new Error(err))
        })
    }).catch((err) =>{
        console.log(new Error(err))
    })
}).catch((err) => {
    console.log(new Error(err))
})

// //* async and await
function awaitSqr(a){
    return new Promise((resolve, reject)=>{
        let res = a**2
        console.log(res);
        if(res<100)
            resolve();
        else
            reject(res);
    })
}
async function a(){
    await awaitSqr(2);
    await awaitSqr(3);
    await awaitSqr(4);
    await awaitSqr(5);
}
a()