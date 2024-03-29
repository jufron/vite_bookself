import bookInterface from "./interface/bookInterface";

const BOOKS: string = 'books';
const renderUiEvent: string = 'renderUI';
let booksArr: Array<bookInterface> = [];

// const buttonCreate: HTMLElement = document.querySelector('#add-book');
const buttonCreate = document.querySelector('#add-book');
const modal = document.querySelector('#modal');
const modalShow: HTMLElement | null = document.querySelector('.modal-container');

const buttonSearch: HTMLElement | null = document.querySelector('#button-search'); 
const inputSearch: HTMLInputElement | null = document.getElementById('search-judul') as HTMLInputElement;

const readingBooks: Element | null = document.querySelector('.reading-books .books-list');
const finishedRead: Element | null = document.querySelector('.finished-read .books-list');

const setBookArray = (data: any): void => {
  booksArr = data;
};

const getBookArray = (): Array<bookInterface> => {
  return booksArr;
};

export {
  BOOKS,
  renderUiEvent,

  buttonCreate,
  modal,
  modalShow,

  inputSearch,
  buttonSearch,

  readingBooks,
  finishedRead,

  setBookArray,
  getBookArray,
  booksArr
};