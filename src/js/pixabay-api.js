import { elements } from '../main';
import { messages } from '../main';

export const getData = (url, options) => {
  elements.gallery.innerHTML = '';

  elements.loader.classList.add('is-open');

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .catch(() => {
      messages.iziToast.somethingWentWrong();
    })
    .finally(() => {
      elements.loader.classList.remove('is-open');
    });
};
