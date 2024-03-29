import bookInterface from "../interface/bookInterface";
import getElementAttributeWhereDataID from "../getElementAttributeWhereDataID";
import updateCheck from "./updateCheck";



const uncheckData = (target: HTMLElement, books: Array<bookInterface>) : void => {
  if (target.closest('#uncheck')) {

    let id : string | null = getElementAttributeWhereDataID('#uncheck', target);
    
    updateCheck(id, books, target, false);

  }
};

export default uncheckData;