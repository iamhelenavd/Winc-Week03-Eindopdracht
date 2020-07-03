async function translateData() {
  const result = await someAPICallToGetAllTasks();
  try {
    console.log("Before (the raw result):", result);
    let tasks = Object.keys(result).map((key) => ({
      id: key,
      description: result[key].description,
      done: result[key].done,
    }));
    console.log("After the tasks array", tasks);
    return tasks;
  } catch (err) {
    console.log(err);
  }
}

const apiUrl = "https://wincacademydatabase.firebaseio.com/helena/tasks.json";

const someAPICallToGetAllTasks = async () => {
  try {
    let res = await fetch(apiUrl, { method: "GET" }); //fetch met get methode
    let resultUrl = await res.json(); //respons omzetten json bestand
    return resultUrl; // let op dit moet er staan anders blijft de data rondzweven in het web */
  } catch (err) {
    console.log(err);
  }
};

// Post

const postData = async (task) => {
  try {
    let res = await fetch(apiUrl, {
      method: "POST",
      body: `{"description": "${task}", "done": false}`,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (hash) => {
  console.log(hash);
  try {
    let res = await fetch(
      `https://wincacademydatabase.firebaseio.com/helena/tasks/${hash}.json`,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    console.log(error);
  }
};
