const outputElement=document.querySelector('#output')
const btnCopy=document.querySelector('#btnCopy')
const passswordLengthElement=document.querySelector('#length')
const numberElement=document.querySelector('#number')
const capitalElement=document.querySelector('#capital')
const smallElement=document.querySelector('#small')
const symbolElement=document.querySelector('#symbol')
const frmElement=document.querySelector('#frm')

btnCopy.addEventListener('click',async()=>{
    const pass=outputElement.value;
    console.log(pass)
    if(pass){
await navigator.clipboard.writeText(pass)
alert("copied")

    }else{
        alert("There is no passsword to copy")
    }
}) 
// 65-90=A_Z
//97-122=a-z
// 48-57=0-9
// 32=space
function generateRandomChar(min,max)
{
    const limit = max-min+1;
     return String.fromCharCode(Math.floor(Math.random()*limit)+min)
}
function capitalValue(){
    return generateRandomChar(65,90)
}
function smallValue(){
    return generateRandomChar(97,122)
}
function numberValue(){
    return generateRandomChar(48,57)
}
function symbolValue(){
    const symbols="~!@#$%^&*()_+|}{<>>?/";
    return symbols[Math.floor(Math.random()*symbols.length)]



}
const functionArray=[
    {
        element:capitalElement,
        fun: capitalValue
    },
    {
        element:smallElement,
        
        fun:smallValue
    },
{
    element:numberElement,
    fun:numberValue
},
{
    element:symbolElement,
    fun:symbolValue

}
];
frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const limit =passswordLengthElement.value
    let generatePassword="";
    const funArray=functionArray.filter(({element})=>element.checked);
    console.log(funArray)
    for(i=0;i<limit;i++){
        const index=Math.floor(Math.random()*funArray.length);
        const letter=funArray[index].fun()
         generatePassword+=letter;
    }
    outputElement.value=generatePassword
})