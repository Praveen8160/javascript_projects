const btn=document.querySelectorAll('button')
btn.forEach(function(val){
    val.addEventListener('click',(e)=>{
        let col=e.target.className
        document.body.style.backgroundColor=`rgb(${col})`
        const a=e.target.className=`${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}`
        e.target.style.backgroundColor=`rgb(${a})`
        e.target.innerHTML=`rgb(${a})`
    })
})