import findBookWhereId from "./findBookWhereId";
import findBokWhereIndex from "./findBookWhereIndex";
import bookInterface from "../interface/bookInterface";
import getDataFromStorage from "../getData";
import { BOOKS, renderUiEvent, modalShow as modalShowVariabel } from "../config";
import modalClose from "../modal/modalClose";
import modalShow from "../modal/modalShow";
import renderUIModal from "../modal";
import getElementAttributeWhereDataID from "../getElementAttributeWhereDataID";


const deleteData = (target: HTMLElement, books: Array<bookInterface>) : void => {
  if (target.closest('#delete')) {

    let id : string | null = getElementAttributeWhereDataID('#delete', target);

    if (id) {
      const bookTarget: bookInterface | null = findBookWhereId(id);

      modalShow();
      renderUIModal('delete', 'Hapus data');

      if (bookTarget !== null) {
        const data: Element | HTMLElement | null = document.querySelector('#button-delete-final');
        data?.addEventListener('click', function () {

          deleteOldDataAndUpdate(bookTarget, books);

          document.dispatchEvent(new Event(renderUiEvent));

          modalShowVariabel!.classList.remove('active');
        });
      } else {
        modalShow();
        renderUIModal('alert', 'Gagal', 'File tidak ditemukan');
        setTimeout(() => {
          modalClose(target);
        }, 3000);
      }
    }
  }
};

const deleteOldDataAndUpdate = (bookTarget: bookInterface, books: Array<bookInterface>) : void => {
  const oldData = getDataFromStorage();
  const findIndex: number = findBokWhereIndex(books, bookTarget);

  oldData.splice(findIndex, 1);
  localStorage.setItem(BOOKS, JSON.stringify(oldData));
};


export default deleteData;