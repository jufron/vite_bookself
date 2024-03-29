import { modal } from "./config";


const renderUIModal = (formType: string, modalTitle: string, modalDescription: string | null = null) => {
  let formHTML: string;  
  if (formType === 'add') {
    formHTML = `
   <form action="#" method="post">
     <h1 class="form-title">${ modalTitle }</h1>
     <div class="form-group">
       <label class="form-label" for="title">Title</label>
       <input class="form-input" type="text" id="title" name="title">
     </div>
     <div class="form-group">
       <label class="form-label" for="author">Author</label>
       <input class="form-input" type="text" id="author" name="author">
     </div>
     <div class="form-group">
       <label class="form-label" for="year">Year</label>
       <input class="form-input" type="number" pattern="[0-9]{4}" id="year" name="year">
     </div>
     <button type="button" class="button button-secondary" id="close">Tutup</button> 
     <button type="submit" class="button button-success">Simpan</button>
   </form>
   `;
   return modal!.innerHTML = formHTML;
  }
  if (formType === 'delete') {
    formHTML = `
      <h1>${modalTitle}</h1> 
      <p>Yakin ingin menghapus data tersebut</p>
      <button type="button" class="button button-secondary" id="close">Tutup</button> 
      <button class="button button-danger" id="button-delete-final">Hapus</button>
    `;
    return modal!.innerHTML = formHTML;
  }
  if (formType === 'alert') {
    if (modalDescription !== null) {
      formHTML = `
        <h1>${modalTitle}</h1> 
        <p>${modalDescription}</p>
        <button class="modal-button close">Tutup</button>     
      `;
      return modal!.innerHTML = formHTML;
    }
  }
};

export default renderUIModal;