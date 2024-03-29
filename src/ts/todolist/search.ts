import { buttonSearch, inputSearch, renderUiEvent, setBookArray } from "../config";
import getDataFromStorage from "../getData";
import bookInterface from "../interface/bookInterface";


const searchData = () : void => {
  
  buttonSearch!.addEventListener('click', function () : void {
    
    const allData: Array<bookInterface> = getDataFromStorage();

    const result = allData.filter(data => {
      return data.title == inputSearch!.value;
    });

    setBookArray(result);

    document.dispatchEvent(new Event(renderUiEvent));
  });


};

export default searchData;