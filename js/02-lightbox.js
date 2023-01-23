import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imagesEl = document.querySelector(".gallery");

const gallery = galleryItems
  .map((img) => {
    return `<a class="gallery__item" href=${img.original}>
                <img 
                class="gallery__image"
                src=${img.preview} 
                alt=${img.description}>
            </a>`;
  })
  .join("");

imagesEl.insertAdjacentHTML("afterbegin", gallery);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
