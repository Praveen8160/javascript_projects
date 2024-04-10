const key="wfNVl1izEndU72kXdMgDLD0bnyJTP7n6PUb70LKTpX0"

const form1=document.querySelector('form')
const user=document.getElementById('search')
const images=document.querySelector('.images')
const more=document.getElementById('more_image')

let userinput=""
let page=1
async function search(){
    userinput=user.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${userinput}&client_id=${key}`

    const response=await fetch(url);
    const data= await response.json();
    const result=data.results;
    if(page===1){
        images.innerHTML=""
    }
    console.log(result.length)

    if(result.length > 0)
    {
        result.map((result)=>{
            const imagediv=document.createElement('div')
            imagediv.classList.add("image")
            const imagetag=document.createElement('img')
            imagetag.src=result.urls.small
            imagetag.alt=result.alt_description
            const imagelink=document.createElement('a')
            imagelink.href=result.links.html 
            imagelink.target="_blank"
            imagelink.textContent=result.alt_description
    
            imagediv.appendChild(imagetag)
            imagediv.appendChild(imagelink)
            images.appendChild(imagediv)
            page++
            if(page>1){
                more.style.display="block"
            }
        })
    }
    else
    {
        const imagediv=document.createElement('div')
        imagediv.classList.add("image")
        const heading=document.createElement('h2')
        images.style.justifyContent="center"
        heading.style.marginLeft="120px"
        heading.textContent="Results Not Found"
        imagediv.appendChild(heading)
        images.appendChild(imagediv)
        console.log("done")
    }

}
form1.addEventListener("submit",(e)=>{
    e.preventDefault()
    page=1
    search()
})
more.addEventListener("click",(e)=>{
    search()
})