import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const options = {
  captionsData: 'alt',
  captionDelay: 250,
};

const imageModal = new SimpleLightbox('.gallery a', options);

export const renderGalleryElements = galleryData => {
  const gallery = document.querySelector('.gallery');

  gallery.innerHTML = '';

  const imagesMarkup = galleryData.hits
    .map(img => {
      return `
      <li class="gallery-item"><a href="${img.largeImageURL}" class="gallery-link"><img     src="${img.webformatURL}"
      alt="${img.tags}" class="gallery-img"></a>
        <div class="card-content">
         <div class="label-cont"><span class="label">Likes</span><span class="value">${img.likes}</span></div>
         <div class="label-cont"><span class="label">Views</span><span class="value">${img.views}</span></div>
         <div class="label-cont"><span class="label">Comments</span><span class="value">${img.comments}</span>
         </div>
         <div class="label-cont"><span class="label">Downloads</span><span
          class="value">${img.downloads}</span></div>
        </div>
      </li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', imagesMarkup);

  imageModal.refresh();
};
