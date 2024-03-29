import bookInterface from "../interface/bookInterface";
import getElementAttributeWhereDataID from "../getElementAttributeWhereDataID";
import updateCheck from "./updateCheck";



const checkData = (target: HTMLElement, books: Array<bookInterface>) => {
  if (target.closest('#check')) {
    
    let id : string | null = getElementAttributeWhereDataID('#check', target);
    
    updateCheck(id, books, target, true);
  
  }
};

export default checkData;