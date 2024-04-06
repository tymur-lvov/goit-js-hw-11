import { getData } from './js/pixabay-api';
import { renderElements } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const elements = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search-input'),
  searchButton: document.querySelector('.search-button'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

const messages = {
  iziToast: {
    error() {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fff',
        backgroundColor: '#ff3333',
        position: 'topRight',
      });
    },
  },
};

const options = {
  simpleLightBox: { captionsData: 'alt', captionDelay: 250 },
};

const imageModal = new SimpleLightbox('.gallery a', options.simpleLightBox);

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchInputValue = event.srcElement.elements.search_input.value;
  const options = {
    key: '43212506-95870309335e8ebf3ea9c8656',
    q: searchInputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
  };

  const searchParams = new URLSearchParams(options).toString();
  const url = `https://pixabay.com/api/?${searchParams}`;

  const searchData = getData(url, options);
  searchData.then(data => {
    if (data.hits.length === 0) {
      messages.iziToast.error();
      return;
    }
    renderElements(data.hits, elements.gallery);
    imageModal.refresh();
  });
};

elements.searchForm.addEventListener('submit', onSearchFormSubmit);
