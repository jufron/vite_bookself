import { BOOKS } from "./config";

const checkStorageSupport = (): void => {
  if (typeof (Storage) !== 'undefined') {
    if (localStorage.getItem(BOOKS) === null) {
      localStorage.setItem(BOOKS, JSON.stringify([]));
    }
  } else {
    // modalShow.classList.add('active');
    // renderUIModal('alert', 'Dukungan Browser', 'Browser anda tidak mendukung local storage');
    // setTimeout(() => {
    //   modalShow.classList.remove('active');  
    // }, 3000);
  }
};


export default checkStorageSupport;