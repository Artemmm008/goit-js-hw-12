import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery")
const loaderOverlay = document.getElementById("loader-overlay"); 

function createMarkup(image) {
    return `
        <li class="gallery-item">
            <a href="${image.largeImageURL}" class="gallery-link"> 
                <img src="${image.webformatURL}" 
                     alt="${image.tags}" 
                     class="gallery-image">
            </a>
        <div class="info">
            <p class="info-item"><b>Likes</b>${image.likes}</p>
            <p class="info-item"><b>Views</b>${image.views}</p>
            <p class="info-item"><b>Comments</b>${image.comments}</p>
            <p class="info-item"><b>Downloads</b>${image.downloads}</p>
        </div>
    </li>
    `;
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: 'alt', 
    captionDelay: 250,
});


export function createGallery(images) {
    const markup = images.map(createMarkup).join('');
    gallery.insertAdjacentHTML('beforeend', markup);

    lightbox.refresh();
}


export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    if (loaderOverlay) {
        loaderOverlay.classList.remove('hidden');
    }
}

export function hideLoader() {
    if (loaderOverlay) {
        loaderOverlay.classList.add('hidden');
    }
}