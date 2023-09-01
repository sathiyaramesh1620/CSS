const containerElement = document.getElementById("container")
const btnAdd = document.getElementById("btn-add ")[0];
function getAppStorage(){
    return JSON.parse(localStorage.getItem('sathiyaApp')||"[]")
}
getAppStorage().forEach(element=>{
    console.log(element)
    const textElement=createTextElement(element.id,element.content);
    containerElement.insertBefore(textElement,btnAdd)
})

function createTextElement(id,content){
    const createTextElement=document.createElement('textarea');
    TextElement.classList.add('sticky');
    createTextElement.value=content;
    textElement.placeholder='Enter your Notes'

    textElement.addEventListener("change",()=>{
        updateNote(id,textElement.value);
    })
    return textElement;


}
// Add New Sticky Notes
function addSticky(){
    const notes=getAppStorage();
    const noteObject={
        id:Math.floor(Math.random()*100000),
        content:""
    }
 const textElement=createTextElement(noteObject.id,noteObject.content);
 containerElement.insertBefore(textElement,btnAdd);
 notes.push(noteObject);
 saveNotes(notes);

}
btnAdd.addEventListener('click',()=>addSticky());

function saveNotes(notes){
    localStorage.setItem('sathiyaApp',JSON.stringify(notes));
}
//update Sticky Note
function updateNote(id,content){
    const notes=getAppStorage();
    const updateElement=notes.filter((note)=>
        note.id==id
    )[0];
    updateElement.content=content;
    saveNotes(notes)
}
a=[10,20,30,10,40]
a=[10,10]

   
