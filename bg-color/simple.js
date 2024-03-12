
const myColor= ['green', 'red' , '#0E1975' ,'rgba(133,122,200)']


const btn = document.querySelector('.btn')
const color = document.querySelector('.color')

btn.addEventListener("click",()=>{
    let newColor=""
   
    newColor += myColor[randomNum()]
    color.textContent=newColor
    document.body.style.backgroundColor=newColor

})

let randomNum= ()=>{
    // console.log(Math.floor(Math.random()* myColor.length))
    return Math.floor(Math.random()* myColor.length)
}