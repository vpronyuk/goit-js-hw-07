import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imagesEl = document.querySelector(".gallery");

const gallery = galleryItems
  .map((img) => {
    return `<div class="gallery__item">
              <a class="gallery__link" href=${img.original}>
                <img 
                  class="gallery__image"
                  src=${img.preview} 
                  data-source=${img.original}
                  alt=${img.description}>
              </a>
            </div>`;
  })
  .join("");

imagesEl.insertAdjacentHTML("afterbegin", gallery);
imagesEl.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  const isImageElement = event.target.classList.contains("gallery__image");
  if (!isImageElement) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src='${event.target.dataset.source}'>`
  );
  instance.show();
  imagesEl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

console.log(galleryItems);
