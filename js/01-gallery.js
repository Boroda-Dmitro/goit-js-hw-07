import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEL = document.querySelector(".gallery");

const galleryItemsEl = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

galleryEL.innerHTML = galleryItemsEl;

galleryEL.onclick = (e) => {
  e.preventDefault(); 

  if (e.target.nodeName !== "IMG") {
    return
  };

  const targetImg = e.target.parentNode.href;
  console.log(targetImg);

  basicLightbox
    .create(
      `
    <img
    class="gallery__image"
    src="${targetImg}"
    data-source="large-image.jpg"
    alt="${e.target.alt}"
  />
	`
    )
    .show();
};
