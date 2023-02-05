import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEL = document.querySelector(".gallery");

const galleryItemsEl = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}" >
           <img class="gallery__image" src="${preview}" alt="${description}" "/>
           </a>`;
  })
  .join("");

galleryEL.innerHTML = galleryItemsEl;

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
