import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { onSearchFormSubmit } from './js/pixabay-api';

const elements = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search-input'),
  searchButton: document.querySelector('.search-button'),
  gallery: document.querySelector('.gallery'),
};

elements.searchForm.addEventListener('submit', onSearchFormSubmit);

const onImgClick = event => {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }
  const imageModal = new SimpleLightbox('.gallery a');
};

elements.gallery.addEventListener('click', onImgClick);
