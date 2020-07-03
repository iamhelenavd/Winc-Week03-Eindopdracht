// A Add data to the Dom
let getList = document.querySelector("#content");

async function getListData() {
  const getData = await translateData();
  const genreDetails = getData;

  genreDetails.forEach((element) => {
    const newLi = document.createElement("li");
    let deleteBtn = document.createElement("span");

    newLi.innerHTML = ` ${element.description}`;
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete");
    newLi.appendChild(deleteBtn); // then delete btn

    deleteBtn.addEventListener("click", () => {
      deleteData(element.id); // unieke code toevoegen
      console.log(element.id); //unieke code aanmaken
    });

    getList.appendChild(newLi);
  });
}

getListData();

// input

const addForm = document.getElementById("add-input");
const addNewButton = document.getElementById("btn");

addNewButton.addEventListener("click", (event) => {
  const newValue = addForm.value;
  postData(newValue);
  const loadNewList = async () => {
    getNewList = await getListData();
  };

  getList.innerHTML = ""; //alles leegmaken
  loadNewList(); //nieuwe lijst plaatsen */
});
