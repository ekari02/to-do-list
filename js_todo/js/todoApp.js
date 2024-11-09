const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const listGroup = document.querySelector("#listGroup");
const taskTotal = document.querySelector("#taskTotal");
const doneTaskTotal = document.querySelector("#doneTaskTotal");
const done = document.querySelector("#done");

//Action ( business logic )
const updateTaskTotal = () => {
  //count list and update
  const listTotal = document.querySelectorAll(".list");
  taskTotal.innerText = listTotal.length;
};

const updateDoneTaskTotal = () => {
  //count list and update
  const doneListTotal = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = doneListTotal.length;
  done.innerText = "Done";
};

const createNewList = (currentTask) => {
  const list = document.createElement("div");
  list.classList.add("list");
  console.log(list);
  list.innerHTML = `
<div class="my-4 flex border border-stone-900 p-3 justify-between">
              <div class=" flex gap-2 items-center">
                <input type="checkbox" class="ListDoneCheck accent-stone-950"/>
                <p class="font-sans list-task">${currentTask}</p>
              </div>
              <div>
                <button class="list-edit-btn border disabled:opacity-40 border-stone-950">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 pointer-events-none"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
                <button class="list-delete-btn border border-stone-950">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 pointer-events-none"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
`;

  // const ListDoneCheck = list.querySelector(".ListDoneCheck");
  // const listTask = list.querySelector(".list-task");
  // const listDelBtn = list.querySelector(".list-delete-btn");
  // const listEditBtn = list.querySelector(".list-edit-btn");

  // ListDoneCheck.addEventListener("change",() => {
  //   updateDoneTaskTotal();
  //   listTask.classList.toggle("line-through");
  //   list.classList.add("duration-200");
  //   list.classList.toggle("opacity-30");
  //   list.classList.toggle("scale-90");
  //   // console.log(ListDoneCheck.checked);
  //   if(ListDoneCheck.checked){
  //   listEditBtn.setAttribute("disabled",true);
  //   }else{
  //   listEditBtn.removeAttribute("disabled");
  //   }
  // })

  // listDelBtn.addEventListener("click",() => {
  //   if(window.confirm("Are you sure to delete?")){
  //     list.remove();
  //   }
  //   updateTaskTotal();
  //   updateDoneTaskTotal();
  // })

  // listEditBtn.addEventListener("click",() => {
  // listEditBtn.setAttribute("disabled",true);
  // ListDoneCheck.setAttribute("disabled",true);
  // const currentTask = listTask.innerText;
  // const newTaskInput = document.createElement("input");
  // newTaskInput.className = "border border-stone-950 font-mono px-2 h-full focus-visible:outline-none";
  // newTaskInput.value = currentTask;
  // listTask.after(newTaskInput);
  // newTaskInput.focus();
  // listTask.classList.add("hidden");

  // newTaskInput.addEventListener("blur",() => {
  //   listEditBtn.removeAttribute("disabled");
  //  listTask.innerText = newTaskInput.value;
  //  listTask.classList.remove("hidden");
  //  newTaskInput.remove();
  //  ListDoneCheck.removeAttribute("disabled");
  //   })

  // })

  return list;
};

const delList = (currentList) => {
  // console.log("U delete");
  if (window.confirm("Are you sure to delete?")) {
    currentList.remove();
  }
  updateTaskTotal();
  updateDoneTaskTotal(); 
}

const editList = (currentList) => {
  console.log("U edit"); 
  const listEditBtn = currentList.querySelector(".list-edit-btn");
    const ListDoneCheck = currentList.querySelector(".ListDoneCheck");
    const listTask = currentList.querySelector(".list-task"); 
  listEditBtn.setAttribute("disabled", true);
      ListDoneCheck.setAttribute("disabled", true);
      const currentTask = listTask.innerText;
      const newTaskInput = document.createElement("input");
      newTaskInput.className =
        "border border-stone-950 font-mono px-2 h-full focus-visible:outline-none";
      newTaskInput.value = currentTask;
      listTask.after(newTaskInput);
      newTaskInput.focus();
      listTask.classList.add("hidden");

      newTaskInput.addEventListener("blur", () => {
        listEditBtn.removeAttribute("disabled");
        listTask.innerText = newTaskInput.value;
        listTask.classList.remove("hidden");
        newTaskInput.remove();
        ListDoneCheck.removeAttribute("disabled");
      });
}

const doneList = (currentList) => {
  // console.log("U done");
  const listEditBtn = currentList.querySelector(".list-edit-btn");
  const ListDoneCheck = currentList.querySelector(".ListDoneCheck");
  const listTask = currentList.querySelector(".list-task");
  
    updateDoneTaskTotal();
    listTask.classList.toggle("line-through");
    currentList.classList.add("duration-200");
    currentList.classList.toggle("opacity-30");
    currentList.classList.toggle("scale-90");
    // console.log(ListDoneCheck.checked);
    if (ListDoneCheck.checked) {
      listEditBtn.setAttribute("disabled", true);
    } else {
      listEditBtn.removeAttribute("disabled");
    }
}

const addList = (text) => {
  //mount list to listGroup
  listGroup.append(createNewList(text));
  taskInput.value = null;
  updateTaskTotal();
};

//application logic
//Handler
const listGroupHandler = (event) => {
  const list = event.target.closest(".list");

  if (event.target.classList.contains("list-delete-btn")) {
    delList(list);
  }

  if (event.target.classList.contains("list-edit-btn")) {
    editList(list);
  }

  if (event.target.classList.contains("ListDoneCheck")) {
    doneList(list);
  }
};

const addListHandler = () => {
  //mount list to listGroup
  addList(taskInput.value);
};

//listener
addTaskBtn.addEventListener("click", addListHandler);
listGroup.addEventListener("click", listGroupHandler);
