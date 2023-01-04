import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


// refs

const galleryRefs = document.querySelector('.gallery');

// function for creating gallery

function createImageGallery() {
  const galleryMarkup = galleryItems.reduce((acc, { original, preview, description }) => acc + 
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`,
    '');

  galleryRefs.insertAdjacentHTML('afterbegin', galleryMarkup);
};

// creating of a gallery

createImageGallery();

// opening lightbox

const lightbox = new SimpleLightbox('.gallery a',
  {
    captionsData: "alt",
    captionDelay: 250,
  }
);