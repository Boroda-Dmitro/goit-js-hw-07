import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

const openModal = (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const targetImg = e.target.parentNode.href;

  const modal = basicLightbox.create(
    `
    <img
    class="gallery__image"
    src="${targetImg}"
    data-source="large-image.jpg"
    alt="${e.target.alt}"
  />
	`
  );

  modal.show();

  const closeModal = (e) => {
    if (e.code === "Escape") {
      console.log(e.code);
      modal.close();
      galleryEL.removeEventListener("keydown", closeModal);
    }
  };

  galleryEL.addEventListener("keydown", closeModal);
};

galleryEL.addEventListener("click", openModal);
