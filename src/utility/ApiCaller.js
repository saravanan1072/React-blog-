


 export const ApiCaller=({url="" ,method='get' ,body={}})=>{
    return new Promise((resolve,reject)=>{
        const options ={method};
        if(Object.keys(body).length){
            options.body=body;

        }

        fetch(url,options)
        .then((Response)=>{
            return Response.json();
        })
        .then((Response)=>{
            resolve(Response )
        })
        .catch((rej)=>reject(rej))


    })
}; 