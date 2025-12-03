import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let currentPage = 1;
let currentQuery = "";
let totalPages = 0;
const perPage = 15; 

const form = document.querySelector(".form");
const input = form.elements.query;
const loadButton = document.getElementById("load-button"); 
const gallery = document.querySelector(".gallery");

hideLoader();
hideLoadMoreButton();

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const query = input.value.trim();

    if (!query) {
        iziToast.warning({
            message: "Please enter a search term!",
            position: "topRight",
        });
        return;
    }

    currentPage = 1;
    currentQuery = query;

    hideLoadMoreButton();
    clearGallery();
    showLoader();
    
    const data = await fetchImages(true);

    if (data && data.hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
         
        hideLoader();
        form.reset();
        return;
    }

    form.reset();

});

loadButton.addEventListener("click", async () => {

    currentPage += 1;

    hideLoadMoreButton();
    showLoader();

    const data = await fetchImages(false);

    if (data && data.hits.length > 0) {
        smoothScroll();
    }
    

})

async function fetchImages(isFirstSearch) {

try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    const hits = data.hits; 
    const totalHits = data.totalHits;
    totalPages = Math.ceil(totalHits / perPage);

if (!hits.length) {
        hideLoadMoreButton();
        if (isFirstSearch) {
            return data;
        }
        iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: "bottomCenter",
        });
        return data;
    }

    createGallery(hits);

    if (currentPage < totalPages) {
        showLoadMoreButton();
    } else {
        hideLoadMoreButton();
        iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: "bottomCenter",
        });
    }

    return data
}
    
catch(error) {
iziToast.error({
            message: "Error",
            position: "topRight",
        });
        console.error(error);
}

finally {
        hideLoader();
    }
    
}

function smoothScroll() {
    const firstGalleryItem = gallery.querySelector('.gallery-item');

    if (firstGalleryItem) {

        const { height: cardHeight } = firstGalleryItem.getBoundingClientRect();
        
        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
        });
    }
}