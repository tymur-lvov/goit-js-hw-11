import { onSearchFormSubmit } from './js/pixabay-api';

const elements = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search-input'),
  searchButton: document.querySelector('.search-button'),
};

elements.searchForm.addEventListener('submit', onSearchFormSubmit);
