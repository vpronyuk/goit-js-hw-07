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
imagesEl.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  const isImageElement = event.target.classList.contains("gallery__image");
  if (!isImageElement) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}

console.log(galleryItems);
