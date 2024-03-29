import getDataFromStorage from "../getData";
import bookInterface from "../interface/bookInterface";


const findBookWhereId = (id: string) : bookInterface | null => {
  let finded: bookInterface | null = null;

  getDataFromStorage().forEach((book: bookInterface) => {
    if (book.id.toString() == id) {
      finded = book;
    }
  });

  return finded;
};

export default findBookWhereId;