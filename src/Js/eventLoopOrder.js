function eventLoopOrder(){
    console.log("Begin")
    setTimeout(()=>{
        console.log("TimeOut Task")
    },0)
    Promise.resolve().then(()=>{
        console.log("Promise Task")
    })
    console.log("End")
}

eventLoopOrder()