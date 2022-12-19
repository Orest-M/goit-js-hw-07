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
  console.log(evt.target);

  if (evt.target.classList.contains('gallery__image')) {
    const currentImg = evt.target.dataset.source;
    console.log(currentImg);
  }
}
