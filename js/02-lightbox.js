import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    (galleryItem) =>
      `<a class="gallery__item" href="${galleryItem.original}">
            <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
        </a>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', markup);

gallery.addEventListener('click', onClick);

function onClick(evt) {}

// console.log(galleryItems);
