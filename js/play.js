// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item from localStorage
// clear(): Clear all data from localStorage
// key(): Passed a number to retrieve the key of a localStorage
const key = "result";
class Save {
  constructor(result) {
    if (!localStorage.getItem(key)) {
      this.result = result;
      this.setItem(key, result);
    }
  }
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}

const save = new Save([]);

// const resultContainer = document.getElementById("result");
// const renderInit = () => {
// }
const play = () => {
  //   renderInit();
  console.log("play");
};

// play();

const getNumber = () => {
  return Math.round(Math.random() * 90);
};
const random = () => {
  let number = getNumber();
};
