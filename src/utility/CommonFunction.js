 const Time=()=>{
    let date=new Date()
    let month=Date.month();
    let day=Date.day();
    let year=Date.year();

    export let times=`${month} ${day},${year}'

}
setInterval(()=>{
    time();
},1000)
