let is_ok = true

let fetchAsyncMock = (time, data) =>{
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            if(is_ok){
                resolve(data)
            }
            else{
                reject("error")
            }
        }, time)
    })
}

export default fetchAsyncMock;