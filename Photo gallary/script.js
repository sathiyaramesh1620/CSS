const modal=document.createElement('div')
modal.id='modal'
document.body.appendChild(modal)
const images= document.querySelectorAll('.img')
console.log(images)
images.forEach(image=>{
    // console.log(image);
   image.addEventListener('click',()=>{
    // alert("hi")
    modal.classList.add('active');
const img=document.createElement('img')
// console.log(image.src)
img.src=image.src;
img.id="img";
while(modal.firstChild){
    modal.removeChild(modal.firstChild)}
modal.appendChild(img)
   }) 
})
modal.addEventListener('click',()=>{
    modal.classList.remove('active')
})

