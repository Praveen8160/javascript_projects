let Random_Num=parseInt(Math.random()*100+1)
const secondiv=document.querySelector('.second')
const submit=document.querySelector('.btn')
const userinput=document.querySelector('.userinput')
// console.log(userinput)
const previousNum=document.querySelector('.preNum')
const Remainguess=document.querySelector('.remainguess')
const loworhigh=document.querySelector('.loworhigh')

const p=document.createElement('p')
let prevnum=[]
let No_of_try=1
let playgame=true
if(playgame)
{
    submit.addEventListener('click',(e)=>{
        const guess=parseInt(userinput.value)
        console.log(guess)
        validateguess(guess)
    })
}
function validateguess(guess){
    if(isNaN(guess))
    {
        alert('please enter valid number')
    }
    else if(guess>100)
    {
        alert('please enter less than 100')
    }
    else if(guess<1)
    {
        alert('please enter more than 1')
    }
    else{
        prevnum.push(guess)
        if(No_of_try===10)
        {
            cleanup(guess)
            displayMessage(`game over. random number was ${Random_Num}`)
            endgame()
        }
        else{
            cleanup(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess){
    if(guess===Random_Num)
    {
        displayMessage(`you guess right`)
        endgame()
    }
    else if(guess < Random_Num)
    {
        displayMessage(`you guess low value`)
    }
    else if(guess > Random_Num)
    {
        displayMessage(`you guess high value`)
    }
}
function cleanup(guess){
    userinput.value=""
    previousNum.innerHTML+=`${guess} `
    Remainguess.innerHTML=`${10 - No_of_try}`
    No_of_try++
}
function displayMessage(message){
    loworhigh.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.innerHTML=`<h2 id="newgame">click to start new game</h2>`
    secondiv.appendChild(p)
    playgame=false
    newgame()
}
function newgame(){
    const newgame=document.querySelector('#newgame')
    newgame.addEventListener('click',()=>{
        Random_Num=parseInt(Math.random()*100+1)
        prevnum=[]
        No_of_try=1
        previousNum.innerHTML=''
        Remainguess.innerHTML=`${11 - No_of_try}`
        userinput.removeAttribute('disabled')
        secondiv.removeChild(p)
        playgame=false
    })
}