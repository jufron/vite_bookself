import bookInterface from "../interface/bookInterface";

const findBokWhereIndex = (books: Array<bookInterface>, bookTarget: bookInterface) : number => {
  return books.findIndex((book: bookInterface) => book.id === bookTarget.id);
};

export default findBokWhereIndex;