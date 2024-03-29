import { BOOKS } from "./config";
import bookInterface from "./interface/bookInterface";


const getDataFromStorage = (): Array<bookInterface> => {
  const dataBooks: string | null = localStorage.getItem(BOOKS);
  return dataBooks ? JSON.parse(dataBooks) : [];
};

export default getDataFromStorage;