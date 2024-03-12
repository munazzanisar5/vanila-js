hexa=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const btn = document.querySelector('.btn')
const color = document.querySelector('.color')

btn.addEventListener("click",()=>{
    let hexaColor="#";
    for (let i = 0; i < 6; i++) {
        hexaColor += hexa[randomNumber()]
        // console.log(hexaColor);

        
    }
    color.textContent=hexaColor
    console.log(color.textContent=hexaColor);
    document.body.style.backgroundColor=hexaColor
})

const randomNumber = ()=>{
   return  Math.floor(Math.random() * hexa.length);
}