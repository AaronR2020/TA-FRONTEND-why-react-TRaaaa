let input = document.querySelector('#text');
let root = document.querySelector('ul');

allTodos = [{
    todo: "learn node tutorials",
    isWatched: false,
},
{
    todo: "learn react tutorials",
    isWatched: false,
}
];

input.addEventListener('keyup', (event)=>{


    if (event.keyCode === 13 && event.target.value !== '') {
            //clear root to prevent reoccurance of same elements
        root.innerHTML = '';
        allTodos.push({
          todo: event.target.value,
          isWatched: false,
        });
        //reset input field to empty
        event.target.value = '';
        //create ui()
        createUI(allTodos,root)
      }
      
});


function createUI(allTodos,root){
    root.innerHTML='';
    allTodos.forEach((element,index) => {
        li=document.createElement('li');
        li.setAttribute("class", "flex_row");

        button=document.createElement('input');
        button.setAttribute('type','checkbox');
        button.addEventListener('click',(e)=>{
            allTodos[index].isWatched=!allTodos[index].isWatched;
        });
        //check or uncheck button
        if(element.isWatched==true){
            button.checked=true;
        }else{
            button.checked=false;
        }

        //text
        p=document.createElement('p');
        p.innerHTML=element.todo;

        //span
       span=document.createElement('span');
       span.innerText='X'
       span.setAttribute('class','red');
       span.addEventListener('click',(e)=>{
        allTodos.splice(index,1);
        createUI(allTodos,root)
    });


        li.append(button);
        li.append(p);
        li.append(span);
        root.append(li);
        console.log(element);
    });

}