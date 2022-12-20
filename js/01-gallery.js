import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    (galleryItem) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
            <img 
                class="gallery__image"
                src="${galleryItem.preview}" 
                data-source="${galleryItem.original}" 
                alt="${galleryItem.description}"  
            >
        </a>
    </div>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', markup);

// console.log(markup);

gallery.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const currentImg = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${currentImg}" width="800" height="600">
`);

  instance.show();

  gallery.addEventListener('keydown', closeModal);

  function closeModal(evt) {
    if (evt.code === 'Escape') {
      instance.close();
      gallery.removeEventListener('keydown', closeModal);
    }
  }
}
