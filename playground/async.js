addAsync=(a,b)=>{
    return new Promise((resolve,reject)=>{
        if(typeof a==='number' && typeof b==='number')
            resolve(a+b)
        else
            reject('invalid input')    
    })
}

addAsync(5,12).then(res=>{
        console.log(res)
        return addAsync(res,44)
},
err=>{
        console.log(err)
})