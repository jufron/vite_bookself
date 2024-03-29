import checkStorageSupport from "./storageSupport";
import { 
  renderUiEvent, 
  readingBooks, 
  finishedRead, 
  inputSearch,
  setBookArray,
  getBookArray,
  buttonSearch
} from './config'; 
import getDataFromStorage from "./getData";
import add from "./todolist/add";
import modalClose from "./modal/modalClose";
import checkData from "./todolist/checkData";
import uncheckData from "./todolist/uncheckData";
import deleteData from "./todolist/deleteData";
import renderCardHTML from "./renderCardHTML";
import bookInterface from "./interface/bookInterface";
import searchData from "./todolist/search";


document.addEventListener('DOMContentLoaded', (): void => {

  checkStorageSupport();

  document.dispatchEvent(new Event(renderUiEvent));

  add();
  searchData();

  document.addEventListener('click', function (ev): void {
    const target: any = ev.target;
    const books: Array<bookInterface> = getDataFromStorage();
  
    // * close
    modalClose(target);
  
    checkData(target, books);
    uncheckData(target, books);
    deleteData(target, books);
  });

});

document.addEventListener(renderUiEvent, function () {
  readingBooks!.innerHTML = '';
  finishedRead!.innerHTML = '';
  let data : Array<bookInterface> = [];

  if (inputSearch!.value === '') {
    setBookArray(getDataFromStorage());
    data = getBookArray();
  } else {
    data = getBookArray();
  }
  
  data.forEach(d => {    
    
    const makeElment: HTMLElement| Element = renderCardHTML(d);
    if (!d.isComplete) {
      readingBooks!.append(makeElment);
    } else {
      finishedRead!.append(makeElment);
    } 
  });
});