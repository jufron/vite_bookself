import { buttonCreate, modalShow, BOOKS } from "../config";
import renderUIModal from "../modal";
import { renderUiEvent } from "../config";
import modalClose from "../modal/modalClose";
import getDataFromStorage from "../getData";
import bookInterface from "../interface/bookInterface";

const add = (): void => {

  // * button create 
  buttonCreate!.addEventListener('click', function (): void {
    modalShow!.classList.add('active');
    renderUIModal('add', 'Tambah Data Baru');
  });

  // * when submit
  document.addEventListener('submit', function (e): void {
    const target: any = e.target;
    
    e.preventDefault();

    const formAdd = new FormData(target);    
    
    const dataObject: bookInterface = dataObj(
      formAdd.get('title') as string,
      formAdd.get('author') as string,
      formAdd.get('year') as string
    );

    saveData(dataObject);

    document.dispatchEvent(new Event(renderUiEvent));
  
    // * close modal
    modalShow!.classList.remove('active');

    modalClose(target);
  });
};


const dataObj = (title: string, author: string, year: string): bookInterface => {
  return {
    id: +new Date(),
    title,
    author,
    year: parseInt(year),
    isComplete: false
  };
};

const saveData = (data: bookInterface): void => {
  const dataStorage: any[] = getDataFromStorage();
  dataStorage.push(data);  
  localStorage.setItem(BOOKS, JSON.stringify(dataStorage));
};

export default add;