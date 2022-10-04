const addTask=document.getElementById("btnAddTask");
const removeNot=document.getElementById("inputItems");
const tableRow=document.getElementById("taskTable");

const a = "Patil Anil";
addTask.addEventListener('click', myfunction);
addTask.addEventListener("click",(event)=>{
  // console.log(event);
  event.preventDefault();
  console.log("hey thanks for calling ", this);
   removeNot.classList.remove("not");
});
 function myfunction(){
  //  removeEnd.classList.remove("end");
  console.log(this);
}
