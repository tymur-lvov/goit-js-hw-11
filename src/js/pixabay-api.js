import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { renderGalleryElements } from './render-functions';

export const onSearchFormSubmit = event => {
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

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fff',
          backgroundColor: '#ff3333',
          position: 'topRight',
        });
        return;
      }
      renderGalleryElements(data);
    })
    .catch(error => {
      return error;
    });
};
