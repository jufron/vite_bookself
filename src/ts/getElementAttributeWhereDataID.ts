
const getElementAttributeWhereDataID = (dataID: string, target: HTMLElement): string | null => {
  const checkElement: HTMLElement | Element | ParentNode | null = target.closest(dataID)!.parentNode!.parentNode;    
  let id : string | null = '' ;

  if (checkElement instanceof HTMLElement) {
      id = checkElement!.getAttribute('data-id');
  }
  return id;
};

export default getElementAttributeWhereDataID;