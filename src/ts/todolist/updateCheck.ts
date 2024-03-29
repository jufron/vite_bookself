import bookInterface from "../interface/bookInterface";
import findBokWhereIndex from "./findBookWhereIndex";
import findBookWhereId from "./findBookWhereId";
import { BOOKS, renderUiEvent } from "../config";
import modalShow from "../modal/modalShow";
import renderUIModal from "../modal";
import modalClose from "../modal/modalClose";


const updateCheck = (id : string | null, books : Array<bookInterface>, target: HTMLElement, isCompleteStatus: boolean) => {
  if (id) {
    const bookTarget: bookInterface | null = findBookWhereId(id);

    if (bookTarget !== null) {

      bookTarget.isComplete = isCompleteStatus;

      const findIndex: number = findBokWhereIndex(books, bookTarget);
      
      if (findIndex === -1) {
        alert('gagal');
      }

      books[findIndex] = bookTarget;

      localStorage.setItem(BOOKS, JSON.stringify(books));
      document.dispatchEvent(new Event(renderUiEvent));
      
    } else {
      modalShow();
      renderUIModal('alert', 'Gagal', 'File tidak ditemukan');
      setTimeout(() => {
        modalClose(target);
      }, 3000);
    }
  }
};


export default updateCheck;