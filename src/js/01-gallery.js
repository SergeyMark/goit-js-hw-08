// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGallery(){
    return galleryItems.map( (itemGallery) => 
        `<a class="gallery__item" href="${itemGallery.original}">
            <img class="gallery__image" src="${itemGallery.preview}" alt="${itemGallery.description}" />
        </a>`
    ).join("")};

const createGalleryFn = createGallery();

gallery.insertAdjacentHTML('beforeend', createGalleryFn);

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
