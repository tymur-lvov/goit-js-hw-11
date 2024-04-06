import { elements } from '../main';

export const getData = (url, options) => {
  elements.loader.classList.add('is-open');

  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
