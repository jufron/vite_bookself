import bookInterface from "./interface/bookInterface";

const renderCardHTML = (data: bookInterface): HTMLElement|Element => {
  const card: HTMLElement = document.createElement('div');

  card.classList.add('card');
  card.setAttribute('data-id', data.id.toString());

  card.innerHTML = `
      <h1>${data.title}</h1>
      <p>Penulis : ${data.author}</p>
      <p>${data.year}</p>
      <div class="button-group">
        ${isCheckAndUnCheck(data.isComplete)}
        <button class="button-icon" id="delete">
          <i class="fa-solid fa-trash fa-xl"></i>
        </button>
      </div>
  `;

  return card;
};

const isCheckAndUnCheck = (isComplete: boolean): string => {
  if (isComplete) {
    return `
      <button class="button-icon" id="uncheck">
        <i class="fa-solid fa-rotate-left fa-xl"></i>
      </button>
    `;
  } else {
    return `
      <button class="button-icon" id="check">
        <i class="fa-solid fa-circle-check fa-xl"></i>
      </button>
    `;
  }
};


export default renderCardHTML;